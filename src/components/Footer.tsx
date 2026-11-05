import React from 'react';
import { Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white border-t border-stone-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-800">
          
          {/* Identity lockup */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                Bruno V. Rodrigues
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                | Consultor
              </span>
            </div>
            <p className="text-stone-400 text-sm mt-2 font-light">
              “Direção para empresas que querem prosperar.”
            </p>
          </div>

          {/* Clean external links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-stone-300">
            <a
              href="https://www.linkedin.com/in/bruno-vitorino-rodrigues-7b2974440"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-stone-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://wa.me/5532999978495"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-orange-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://ecossistemanorte.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-medium"
            >
              <span>Ecossistema NORTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} Bruno Vitorino Rodrigues. Todos os direitos reservados.
          </p>
          <p className="text-stone-500">
            Administração · Gestão Financeira · Auditoria & Controladoria
          </p>
        </div>

      </div>
    </footer>
  );
};
