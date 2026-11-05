import React from 'react';
import { ExternalLink, ArrowRight, Compass, Globe } from 'lucide-react';

export const EcosystemNorteSection: React.FC = () => {
  return (
    <section id="ecossistema" className="py-20 md:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-orange-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-400">
              Projetos & Iniciativas Integradas
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Conheça também o Ecossistema NORTE
          </h2>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
            O Ecossistema NORTE reúne projetos, empresas e soluções desenvolvidas para apoiar organizações em diferentes necessidades, conectando gestão, tecnologia, processos e outras soluções empresariais.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://ecossistemanorte.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-white hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200 shadow-md group"
            >
              <span>Conhecer o Ecossistema NORTE</span>
              <ArrowRight className="w-4 h-4 text-orange-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            <span className="text-xs text-stone-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-stone-500" />
              <span>Extensão da atuação profissional de Bruno V. Rodrigues</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
