import Image from "next/image";
import LOGO from "../../../../public/Logo.png";


const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={LOGO}
              alt="Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-10 text-white">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Packages
            </a>
            <a href="#" className="hover:text-gray-400">
              Destinations
            </a>
            <a href="#" className="hover:text-gray-400">
              Gallery
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
