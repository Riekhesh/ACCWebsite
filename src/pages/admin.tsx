import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface Player {
  id: number;
  name: string;
  score: number;
  rank: number;
  avatar: string;
  badge: string;
}

const AdminPage = () => {
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [newScore, setNewScore] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const useSupabase = isSupabaseConfigured();

  // Check authentication on component mount
  useEffect(() => {
    setMounted(true);
    const checkAuth = () => {
      const adminLoggedIn = sessionStorage.getItem('adminLoggedIn');
      if (!adminLoggedIn) {
        router.push('/game');
        return;
      }
      setIsAuthenticated(true);
      fetchPlayers();
    };

    if (mounted) {
      checkAuth();
    }
  }, [router, mounted]);

  const fetchPlayers = async () => {
    try {
      if (useSupabase) {
        const { data, error } = await supabase
          .from('players')
          .select('*')
          .order('score', { ascending: false });
        if (error) throw error;
        if (data && data.length) {
          const mapped = data.map((p: any, idx: number) => ({
            id: p.id,
            name: p.name,
            score: p.score,
            avatar: p.avatar || '👤',
            badge: p.badge || 'Player',
            rank: idx + 1,
          }));
          setPlayers(mapped);
          if (typeof window !== 'undefined') {
            localStorage.setItem('leaderboardPlayers', JSON.stringify(mapped));
          }
          return;
        }
      }
      // Fallback to localStorage/default
      const saved = typeof window !== 'undefined' ? localStorage.getItem('leaderboardPlayers') : null;
      if (saved) {
        const parsed: Player[] = JSON.parse(saved);
        const sorted = [...parsed].sort((a, b) => b.score - a.score).map((p, idx) => ({ ...p, rank: idx + 1 }));
        setPlayers(sorted);
      } else {
        const samplePlayers: Player[] = [
          { id: 1, name: "Riekhesh", score: 2840, rank: 1, avatar: "👑", badge: "Champion" },
          { id: 2, name: "Steven", score: 2720, rank: 2, avatar: "🥈", badge: "Runner-up" },
          { id: 3, name: "Michael Wong", score: 2650, rank: 3, avatar: "🥉", badge: "Third Place" },
          { id: 4, name: "Emma Rodriguez", score: 2480, rank: 4, avatar: "⭐", badge: "Top Player" },
          { id: 5, name: "David Lee", score: 2350, rank: 5, avatar: "🎯", badge: "Sharp Shooter" },
          { id: 6, name: "Lisa Park", score: 2220, rank: 6, avatar: "🚀", badge: "Rising Star" },
          { id: 7, name: "James Wilson", score: 2080, rank: 7, avatar: "💪", badge: "Competitor" },
          { id: 8, name: "Maria Garcia", score: 1950, rank: 8, avatar: "🎮", badge: "Gamer" }
        ];
        setPlayers(samplePlayers);
        if (typeof window !== 'undefined') {
          localStorage.setItem('leaderboardPlayers', JSON.stringify(samplePlayers));
        }
      }
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  const persistPlayers = async (next: Player[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('leaderboardPlayers', JSON.stringify(next));
    }
    if (useSupabase) {
      // Upsert rows
      const rows = next.map(p => ({ id: p.id, name: p.name, score: p.score, avatar: p.avatar, badge: p.badge }));
      const { error } = await supabase.from('players').upsert(rows, { onConflict: 'id' });
      if (error) console.error('Supabase upsert error:', error.message);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminLoggedIn');
    router.push('/game');
  };

  const startEditing = (player: Player) => {
    setEditingPlayer(player);
    setNewScore(player.score.toString());
  };

  const cancelEditing = () => {
    setEditingPlayer(null);
    setNewScore('');
  };

  const saveScore = async () => {
    if (!editingPlayer || !newScore) return;

    const score = parseInt(newScore);
    if (isNaN(score) || score < 0) {
      alert('Please enter a valid score');
      return;
    }

    try {
      const updatedPlayers = players.map(player =>
        player.id === editingPlayer.id
          ? { ...player, score }
          : player
      );

      const sortedPlayers = updatedPlayers.sort((a, b) => b.score - a.score);
      const finalPlayers = sortedPlayers.map((player, index) => ({ ...player, rank: index + 1 }));

      setPlayers(finalPlayers);
      await persistPlayers(finalPlayers);
      setEditingPlayer(null);
      setNewScore('');
    } catch (error) {
      console.error('Error updating score:', error);
      alert('Failed to update score');
    }
  };

  const addPoints = async (playerId: number, points: number) => {
    const updatedPlayers = players.map(player =>
      player.id === playerId
        ? { ...player, score: player.score + points }
        : player
    );

    const sortedPlayers = updatedPlayers.sort((a, b) => b.score - a.score);
    const finalPlayers = sortedPlayers.map((player, index) => ({ ...player, rank: index + 1 }));

    setPlayers(finalPlayers);
    await persistPlayers(finalPlayers);
  };

  if (!mounted || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/90 text-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Admin Dashboard
              </h1>
              <p className="mt-4 text-white/80 text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Manage player scores and leaderboard {useSupabase ? '(Supabase)' : '(Local)'}
              </p>
            </div>
            <button onClick={handleLogout} className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">Logout</button>
          </div>
        </div>
      </section>

      {/* Admin Controls */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-2xl p-8 shadow-xl border border-[var(--primary)]/10">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Player Management
          </h2>

          {loading ? (
            <div className="text-center py-8">
              <div className="text-[var(--primary)]">Loading players...</div>
            </div>
          ) : (
            <div className="space-y-4">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center p-6 rounded-xl bg-white/80 border border-[var(--primary)]/10 hover:shadow-lg transition-all"
                >
                  {/* Rank */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center font-bold text-lg">
                    {player.rank}
                  </div>

                  {/* Avatar */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-2xl ml-4">
                    {player.avatar}
                  </div>

                  {/* Player Info */}
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                      {player.name}
                    </h3>
                    <p className="text-[var(--primary)]/60 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                      {player.badge}
                    </p>
                  </div>

                  {/* Score Management */}
                  <div className="flex items-center space-x-4">
                    {editingPlayer?.id === player.id ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={newScore}
                          onChange={(e) => setNewScore(e.target.value)}
                          className="w-20 px-3 py-2 border border-[var(--primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none"
                        />
                        <button
                          onClick={saveScore}
                          className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                            {player.score.toLocaleString()}
                          </div>
                          <div className="text-[var(--primary)]/60 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                            points
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => addPoints(player.id, 100)}
                            className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                          >
                            +100
                          </button>
                          <button
                            onClick={() => addPoints(player.id, -100)}
                            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                          >
                            -100
                          </button>
                          <button
                            onClick={() => startEditing(player)}
                            className="px-3 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 transition-colors text-sm"
                          >
                            Edit
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
