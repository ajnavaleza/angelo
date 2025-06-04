'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090c1a]/95 backdrop-blur border-b border-[#181c2a]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#about"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Angelo Navaleza
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white font-semibold hover:text-pink-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1uXmqtGwefOTK07BiRvo-coxcbSTW7loB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-pink-400 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Snackbar */}
      {isOpen && (
        <div className="md:hidden bg-[#090c1a]/95 border-t border-[#181c2a] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-white font-semibold hover:text-pink-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1uXmqtGwefOTK07BiRvo-coxcbSTW7loB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-semibold hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
