import { useState } from 'react';
import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-blue py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-white hover:text-primary-gold">Categories</button>
              <button className="text-white hover:text-primary-gold">Live Auctions</button>
              <button className="text-white hover:text-primary-gold">Upcoming</button>
              <button className="text-white hover:text-primary-gold">How It Works</button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for items..."
                className="w-64 px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
            </div>
            <Button variant="outline">Sign In</Button>
            <Button>Register</Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button className="block w-full text-left text-white hover:text-primary-gold py-2">Categories</button>
            <button className="block w-full text-left text-white hover:text-primary-gold py-2">Live Auctions</button>
            <button className="block w-full text-left text-white hover:text-primary-gold py-2">Upcoming</button>
            <button className="block w-full text-left text-white hover:text-primary-gold py-2">How It Works</button>
            <div className="pt-4">
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
            </div>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;