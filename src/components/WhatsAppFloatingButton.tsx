import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Ações de contato rápidas" className="fixed bottom-5 right-5 z-40 transition-all duration-300 transform scale-100 animate-fadeIn">
      <a
        href="https://wa.me/5532999978495"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Bruno Vitorino no WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-stone-900 text-white hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group border border-white/10"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
        <span className="text-xs font-bold tracking-wide uppercase pr-1">
          Falar comigo
        </span>
      </a>
    </aside>
  );
};
