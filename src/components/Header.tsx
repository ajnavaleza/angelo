import { Mail } from 'lucide-react';

const navLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-[#090c1a]/95 backdrop-blur border-b border-[#181c2a]">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      {/* Logo/Name */}
      <a href="#about" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Angelo Navaleza
      </a>
      {/* Nav Links */}
      <ul className="flex items-center gap-8">
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
            href="https://drive.google.com/file/d/1nUwCYxzNlTv2WN5ujiWzYvAg9BQev_b2/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-pink-400 transition-colors"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header; 