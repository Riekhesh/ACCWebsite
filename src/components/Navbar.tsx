import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 backdrop-blur-sm border-b border-white/10 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold tracking-wide hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Asian Consulting Conference
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/vision" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Vision
            </Link>
          </li>
          <li>
            <Link href="/meet-the-team" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Meet the team
            </Link>
          </li>
          <li>
            <Link href="/affiliates" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Affiliates
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider hover:scale-105" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 