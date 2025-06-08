'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAnimations } from '../hooks/useAnimations';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { slideIn, staggerAnimation } = useAnimations();

  useEffect(() => {
    // Animate header elements on load
    slideIn('.header-logo', { direction: 'left', delay: 100, duration: 600 });
    staggerAnimation('.nav-item', { delay: 300 });
  }, [slideIn, staggerAnimation]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090c1a]/95 backdrop-blur border-b border-[#181c2a] shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#about"
          className="header-logo text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 opacity-0"
        >
          Angelo Navaleza
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name} className="nav-item opacity-0">
              <Button
                variant="ghost"
                className="text-white font-semibold hover:text-pink-400 transition-all duration-300 hover:scale-110 relative group p-2"
                asChild
              >
                <a href={link.href}>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </Button>
            </li>
          ))}
          <li className="nav-item opacity-0">
            <Button
              variant="outline"
              className="text-white font-semibold hover:text-pink-400 transition-all duration-300 hover:scale-110 border-purple-500/50 hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-lg"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1uXmqtGwefOTK07BiRvo-coxcbSTW7loB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-purple-400 transition-colors duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </nav>

      {/* Mobile Menu Snackbar */}
      {isOpen && (
        <div className="md:hidden bg-[#090c1a]/95 border-t border-[#181c2a] px-6 py-4 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white font-semibold hover:text-pink-400 transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <a href={link.href}>
                    {link.name}
                  </a>
                </Button>
              </li>
            ))}
            <li>
              <Button
                variant="outline"
                className="w-full text-white font-semibold hover:text-pink-400 transition-all duration-300 border-purple-500/50 hover:border-purple-500"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1uXmqtGwefOTK07BiRvo-coxcbSTW7loB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
