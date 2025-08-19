import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Rice terraces, Philippines
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Ha Long Bay, Vietnam
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', // Bali, Indonesia
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // Angkor Wat, Cambodia
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', // Petronas Towers, Malaysia
];

const visionText = `Our vision is to foster a connected and empowered Southeast Asia, where innovation, collaboration, and cultural diversity drive sustainable growth and prosperity for all communities.`;

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/90 flex flex-col items-center justify-start font-sans relative overflow-hidden">
      {/* Background Image (object-contain to avoid zoom/crop) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/team/klccimage1.jpg"
          alt="Background"
          fill
          priority
          quality={90}
          className="object-cover md:object-contain object-top"
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
      {/* Carousel */}
      <div className="w-full max-w-4xl mt-12 mb-16 rounded-2xl overflow-hidden shadow-2xl bg-[var(--secondary)] transform hover:scale-[1.02] transition-transform duration-500">
        <div className="relative h-72 sm:h-96 md:h-[500px]">
          {images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`Southeast Asia ${idx + 1}`}
              fill
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${idx === current ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
            />
          ))}
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Vision Section */}
      <section className="px-8 py-12 max-w-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl transform hover:scale-[1.02] transition-all duration-500" style={{ boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.1), 0 8px 32px 0 rgba(31, 38, 135, 0.2)' }}>
        <h2 className="text-4xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Montserrat, Arial, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Our Vision</h2>
        <p className="text-xl text-white leading-relaxed text-center" style={{ fontFamily: 'Montserrat, Arial, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)' }}>{visionText}</p>
      </section>
      </div>
      
      {/* Footer */}
      <footer className="w-full mt-20 bg-gradient-to-t from-[var(--secondary)]/90 to-[var(--secondary)]/70 backdrop-blur-lg border-t border-[var(--primary)]/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Asian Consulting Conference</h3>
              <p className="text-[var(--primary)]/80 text-base leading-relaxed" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Connecting and empowering Southeast Asia through innovation and collaboration.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-[var(--primary)] mb-6" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/meet-the-team" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Meet The Team</Link></li>
                <li><Link href="/affiliates" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Affiliates</Link></li>
                <li><Link href="/game" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Game</Link></li>
                <li><Link href="/contact-us" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Contact Us</Link></li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="text-center md:text-center">
              <h4 className="text-xl font-semibold text-[var(--primary)] mb-6" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Connect With Us</h4>
              <div className="flex justify-center space-x-6">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/asian-consulting-conference/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors" aria-label="LinkedIn" title="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/asian_consulting_conference/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors" aria-label="Instagram" title="Instagram">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-[var(--primary)]/20 mt-12 pt-8 text-center">
            <p className="text-[var(--primary)]/60 text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              © 2024 Asian Consulting Conference. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 