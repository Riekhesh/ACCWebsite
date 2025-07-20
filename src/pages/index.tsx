import { useEffect, useRef, useState } from 'react';

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
      {/* Carousel */}
      <div className="w-full max-w-4xl mt-12 mb-16 rounded-2xl overflow-hidden shadow-2xl bg-[var(--secondary)] transform hover:scale-[1.02] transition-transform duration-500">
        <div className="relative h-72 sm:h-96 md:h-[500px]">
          {images.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Southeast Asia ${idx + 1}`}
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
                <li><a href="/vision" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Our Vision</a></li>
                <li><a href="/meet-the-team" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Meet The Team</a></li>
                <li><a href="/affiliates" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Affiliates</a></li>
                <li><a href="/contact-us" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Contact Us</a></li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold text-[var(--primary)] mb-6" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Connect With Us</h4>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="#" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-1.62 0-3.768-2.245-3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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