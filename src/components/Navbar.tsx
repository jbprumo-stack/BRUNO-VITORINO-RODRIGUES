import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Visão Sistêmica', href: '#como-enxergo' },
    { label: 'Diagnóstico', href: '#dores' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Ecossistema NORTE', href: '#ecossistema' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafaf8]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-[#fafaf8]/60 backdrop-blur-xs border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-baseline gap-2 group whitespace-nowrap shrink-0"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors">
              BRUNO V. RODRIGUES
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 hidden sm:inline">
              | Consultor
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single Line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/5532999978495"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-orange-600 rounded-md transition-all duration-200 shadow-xs whitespace-nowrap shrink-0 hover:shadow-md active:scale-[0.99]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Falar comigo</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/5532999978495"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar pelo WhatsApp"
              className="p-2 text-stone-900 hover:text-orange-600 rounded-md"
            >
              <MessageCircle className="w-5 h-5 text-orange-600" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#fafaf8] shadow-lg animate-fadeIn">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block py-2.5 text-base font-medium text-stone-800 hover:text-orange-600 border-b border-stone-100"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://wa.me/5532999978495"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-stone-900 rounded-md hover:bg-orange-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar comigo no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
