import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 backdrop-blur-sm border-b border-white/10 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <Link href="/" className="text-white text-lg sm:text-xl font-bold tracking-wide hover:text-white/90 transition-colors duration-300 max-w-full sm:max-w-none truncate" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Asian Consulting Conference
        </Link>
        <ul className="flex flex-wrap justify-start sm:justify-end gap-x-4 gap-y-2">
          <li>
            <Link href="/meet-the-team" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Meet the team
            </Link>
          </li>
          <li>
            <Link href="/affiliates" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Affiliates
            </Link>
          </li>
          <li>
            <Link href="/game" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Game
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 