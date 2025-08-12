const members = Array.from({ length: 8 }, (_, idx) => ({
  id: idx + 1,
  name: `Member Name ${idx + 1}`,
  role: `Role Title`,
}));

const MeetTheTeamPage = () => {
  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/90 text-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Meet the Team
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            The people behind the Asian Consulting Conference.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <article
              key={member.id}
              className="group rounded-2xl border border-[var(--primary)]/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center"
              style={{ boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.06), 0 8px 32px 0 rgba(31, 38, 135, 0.12)' }}
            >
              {/* Avatar placeholder */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 flex items-center justify-center text-white shadow-lg ring-2 ring-[var(--primary)]/20">
                {/* User icon */}
                <svg className="w-12 h-12 opacity-90" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.761 0 5-2.69 5-6s-2.239-6-5-6-5 2.69-5 6 2.239 6 5 6zm0 2c-4.418 0-8 2.91-8 6.5V22h16v-1.5C20 16.91 16.418 14 12 14z" />
                </svg>
              </div>

              {/* Name & Role */}
              <h3 className="mt-5 text-xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {member.name}
              </h3>
              <p className="mt-1 text-[var(--primary)]/70 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {member.role}
              </p>

              {/* Card hover accent */}
              <div className="mt-5 h-1 w-16 rounded-full bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors"></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeamPage; 