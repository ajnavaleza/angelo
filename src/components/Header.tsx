'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAnimations } from '../hooks/useAnimations';
import { Button } from '@/components/ui/button';
import styles from '../styles/Header.module.css';
import { RESUME_LINK } from '../config/resume';

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
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <a
          href="#about"
          className={`${styles.logo} header-logo`}
        >
          Angelo Navaleza
        </a>
        {/* Desktop Nav */}
        <ul className={styles.desktopNav}>
          {navLinks.map(link => (
            <li key={link.name} className={`nav-item ${styles.navItem}`}>
              <Button
                variant="ghost"
                className={styles.navButton}
                asChild
              >
                <a href={link.href}>
                  {link.name}
                  <span className={styles.navUnderline}></span>
                </a>
              </Button>
            </li>
          ))}
          <li className={`nav-item ${styles.navItem}`}>
            <Button
              variant="outline"
              className={styles.resumeButton}
              asChild
            >
              <a
                href={RESUME_LINK}
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
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </nav>
      {/* Mobile Menu Snackbar */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            {navLinks.map(link => (
              <li key={link.name}>
                <Button
                  variant="ghost"
                  className={styles.mobileNavButton}
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
                className={styles.mobileResumeButton}
                onClick={() => setIsOpen(false)}
                asChild
              >
                <a
                  href={RESUME_LINK}
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
