import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdminLoginModal from '../components/AdminLoginModal';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface Player {
  id: number;
  name: string;
  score: number;
  rank: number;
  avatar: string;
  badge: string;
}

const defaultPlayers: Player[] = [
  { id: 1, name: "Riekhesh", score: 2840, rank: 1, avatar: "👑", badge: "Champion" },
  { id: 2, name: "Steven", score: 2720, rank: 2, avatar: "🥈", badge: "Runner-up" },
  { id: 3, name: "Michael Wong", score: 2650, rank: 3, avatar: "🥉", badge: "Third Place" },
  { id: 4, name: "Emma Rodriguez", score: 2480, rank: 4, avatar: "⭐", badge: "Top Player" },
  { id: 5, name: "David Lee", score: 2350, rank: 5, avatar: "🎯", badge: "Sharp Shooter" },
  { id: 6, name: "Lisa Park", score: 2220, rank: 6, avatar: "🚀", badge: "Rising Star" },
  { id: 7, name: "James Wilson", score: 2080, rank: 7, avatar: "💪", badge: "Competitor" },
  { id: 8, name: "Maria Garcia", score: 1950, rank: 8, avatar: "🎮", badge: "Gamer" }
];

const GamePage = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);
  const useSupabase = isSupabaseConfigured();

  const handleAdminLogin = () => {
    sessionStorage.setItem('adminLoggedIn', 'true');
    setShowAdminModal(false);
    router.push('/admin');
  };

  useEffect(() => {
    setMounted(true);
    const load = async () => {
      if (useSupabase) {
        const { data, error } = await supabase
          .from('players')
          .select('*')
          .order('score', { ascending: false });
        if (!error && data) {
          const mapped = data.map((p: any, idx: number) => ({
            id: p.id, name: p.name, score: p.score, avatar: p.avatar || '👤', badge: p.badge || 'Player', rank: idx + 1
          }));
          setPlayers(mapped);
        } else {
          // fallback
          const saved = localStorage.getItem('leaderboardPlayers');
          if (saved) {
            const parsed: Player[] = JSON.parse(saved);
            const sorted = [...parsed].sort((a, b) => b.score - a.score).map((p, idx) => ({ ...p, rank: idx + 1 }));
            setPlayers(sorted);
          } else {
            setPlayers(defaultPlayers);
          }
        }
      } else {
        const saved = localStorage.getItem('leaderboardPlayers');
        if (saved) {
          const parsed: Player[] = JSON.parse(saved);
          const sorted = [...parsed].sort((a, b) => b.score - a.score).map((p, idx) => ({ ...p, rank: idx + 1 }));
          setPlayers(sorted);
        } else {
          setPlayers(defaultPlayers);
        }
      }
    };
    load();
  }, [useSupabase]);

  useEffect(() => {
    if (!useSupabase) return;
    // Realtime updates for players table
    const channel = supabase
      .channel('players-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'players' }, async () => {
        const { data } = await supabase.from('players').select('*').order('score', { ascending: false });
        if (data) {
          const mapped = data.map((p: any, idx: number) => ({
            id: p.id, name: p.name, score: p.score, avatar: p.avatar || '👤', badge: p.badge || 'Player', rank: idx + 1
          }));
          setPlayers(mapped);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [useSupabase]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[var(--secondary)] flex items-center justify-center">
        <div className="text-[var(--primary)] text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/90 text-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Game Leaderboard
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Compete with participants and climb the ranks in our interactive game.
          </p>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-2xl p-8 shadow-xl border border-[var(--primary)]/10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Top Players {useSupabase ? '' : '(Local)'}
            </h2>
            <button
              onClick={() => setShowAdminModal(true)}
              className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/20 transition-colors text-sm font-medium"
            >
              Admin Login
            </button>
          </div>
          
          <div className="space-y-4">
            {players.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                  index === 0 
                    ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-200' 
                    : index === 1 
                    ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200'
                    : index === 2
                    ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200'
                    : 'bg-white/80 border border-[var(--primary)]/10 hover:bg-white/90'
                }`}
              >
                {/* Rank */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === 0 
                    ? 'bg-yellow-400 text-white' 
                    : index === 1 
                    ? 'bg-gray-400 text-white'
                    : index === 2
                    ? 'bg-orange-400 text-white'
                    : 'bg-[var(--primary)]/20 text-[var(--primary)]'
                }`}>
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

                {/* Score */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                    {player.score.toLocaleString()}
                  </div>
                  <div className="text-[var(--primary)]/60 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                    points
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--primary)]/5 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {players.length}
              </div>
              <div className="text-[var(--primary)]/70 text-sm mt-1" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Total Players
              </div>
            </div>
            
            <div className="bg-[var(--primary)]/5 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {Math.max(...players.map(p => p.score)).toLocaleString()}
              </div>
              <div className="text-[var(--primary)]/70 text-sm mt-1" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Highest Score
              </div>
            </div>
            
            <div className="bg-[var(--primary)]/5 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {Math.round(players.reduce((sum, p) => sum + p.score, 0) / players.length).toLocaleString()}
              </div>
              <div className="text-[var(--primary)]/70 text-sm mt-1" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Average Score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
        onLogin={handleAdminLogin}
      />

    </div>
  );
};

export default GamePage;
