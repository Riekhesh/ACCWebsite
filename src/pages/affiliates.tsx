import Image from 'next/image';

const affiliates = [
  {
    id: 1,
    name: "GenCorporate",
    description: "General Description",
    image: "/affiliates/A1.jpeg", // You'll add affiliate images to public/affiliates/
    website: ""
  },
  {
    id: 2,
    name: "UCL Malaysian Society",
    description: "General Description",
    image: "/affiliates/A2.jpeg",
    website: ""
  },
  {
    id: 3,
    name: "LSESU Malaysian Club",
    description: "General Description",
    image: "/affiliates/A3.jpeg",
    website: ""
  },
  {
    id: 4,
    name: "Taylor’s business school",
    description: "General Description",
    image: "/affiliates/A4.jpeg",
    website: ""
  },
  {
    id: 5,
    name: "KCL Malaysian Society",
    description: "General Description",
    image: "/affiliates/A5.jpeg",
    website: ""
  },
  {
    id: 6,
    name: "Business Club University of Malaya",
    description: "General Description",
    image: "/affiliates/A6.jpeg",
    website: ""
  },
  {
    id: 7,
    name: "ICMS",
    description: "General Description",
    image: "/affiliates/A7.jpeg",
    website: ""
  }
];

const AffiliatesPage = () => {
  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/90 text-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Our Affiliates
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Partnering with leading consulting firms and organizations to deliver exceptional value.
          </p>
        </div>
      </section>

      {/* Affiliates Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {affiliates.map((affiliate) => (
            <article
              key={affiliate.id}
              className="group rounded-2xl border border-[var(--primary)]/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-80 cursor-pointer"
              style={{ boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.06), 0 8px 32px 0 rgba(31, 38, 135, 0.12)' }}
              onClick={() => window.open(affiliate.website, '_blank')}
            >
              {/* Affiliate logo/image */}
              <div className="relative w-full h-48 rounded-t-2xl overflow-hidden bg-white">
                <Image
                  src={affiliate.image}
                  alt={affiliate.name}
                  fill
                  className="object-contain p-4"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/20 flex items-center justify-center">
                          <div class="text-center">
                            <svg class="w-12 h-12 mx-auto mb-2 text-[var(--primary)]/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <p class="text-[var(--primary)]/60 text-sm font-medium">Logo</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Name & Description */}
              <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg font-bold text-[var(--primary)]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  {affiliate.name}
                </h3>
                <p className="mt-1 text-[var(--primary)]/70 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  {affiliate.description}
                </p>

                {/* Card hover accent */}
                <div className="mt-2 h-1 w-16 rounded-full bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors"></div>
                
                {/* Click indicator */}
                <div className="mt-2 text-[var(--primary)]/50 text-xs group-hover:text-[var(--primary)] transition-colors">
                  Click to visit
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--primary)]/10 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Interested in Partnering?
          </h2>
          <p className="text-[var(--primary)]/70 text-lg mb-8" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            We're always looking to expand our network of strategic partners and affiliates.
          </p>
          <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-colors shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AffiliatesPage; 