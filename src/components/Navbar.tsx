import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          ACC Website
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/vision" className="text-gray-300 hover:text-white">
              Vision
            </Link>
          </li>
          <li>
            <Link href="/meet-the-team" className="text-gray-300 hover:text-white">
              Meet the team
            </Link>
          </li>
          <li>
            <Link href="/affiliates" className="text-gray-300 hover:text-white">
              Affiliates
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-gray-300 hover:text-white">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 