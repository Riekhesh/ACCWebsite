import Image from 'next/image';

const members = [
  {
    id: 1,
    name: "Steven Tan Yi Khai",
    role: "President",
    image: "/team/member1.JPG" // You'll add member1.jpg to public/team/
  },
  {
    id: 2,
    name: "Keith Wong", 
    role: "Chief Secretary",
    image: "/team/member2.jpg" // You'll add member2.jpg to public/team/
  },
  {
    id: 3,
    name: "Jonathan Lee",
    role: "Head of Internal Operations", 
    image: "/team/member3.jpg" // You'll add member3.jpg to public/team/
  },
  {
    id: 4,
    name: "Tee Lin Thong",
    role: "Head of External Operations",
    image: "/team/member4.jpeg" // You'll add member4.jpg to public/team/
  },
  {
    id: 5,
    name: "Azmeer Akbar",
    role: "Head of Corporate Relations",
    image: "/team/member5.jpg" // You'll add member5.jpg to public/team/
  },
  {
    id: 6,
    name: "Allison Goh",
    role: "Head of Marketing and Publicity",
    image: "/team/member6.jpeg" // You'll add member6.jpg to public/team/
  },
  {
    id: 7,
    name: "Tarqiz Aris",
    role: "Head of Research",
    image: "/team/member7.jpg" // You'll add member7.jpg to public/team/
  },
  {
    id: 8,
    name: "Lai Jian Zhou",
    role: "Head of Finance",
    image: "/team/member8.jpg" // You'll add member8.jpg to public/team/
  }
];

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
              className="group rounded-2xl border border-[var(--primary)]/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-80"
              style={{ boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.06), 0 8px 32px 0 rgba(31, 38, 135, 0.12)' }}
            >
              {/* Team member image */}
              <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 flex items-center justify-center text-white">
                          <svg class="w-16 h-16 opacity-90" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 12c2.761 0 5-2.69 5-6s-2.239-6-5-6-5 2.69-5 6 2.239 6 5 6zm0 2c-4.418 0-8 2.91-8 6.5V22h16v-1.5C20 16.91 16.418 14 12 14z" />
                          </svg>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Name & Role */}
              <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="mt-1 text-[var(--primary)]/70 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  {member.role}
                </p>

                {/* Card hover accent */}
                <div className="mt-2 h-1 w-16 rounded-full bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors"></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeamPage; 