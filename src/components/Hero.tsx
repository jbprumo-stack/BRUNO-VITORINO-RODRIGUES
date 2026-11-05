import React, { useState } from 'react';
import { ArrowDown, MessageCircle, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#fafaf8]">
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1c1917 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Identity & Title Tag */}
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-orange-600" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-stone-600">
                BRUNO V. RODRIGUES <span className="text-orange-600 font-extrabold">·</span> CONSULTOR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-6 text-balance">
              Direção para empresas que querem prosperar.
            </h1>

            {/* Supporting Institutional Concept */}
            <div className="mb-6 pl-4 border-l-2 border-orange-500/80 py-1">
              <p className="font-editorial text-lg sm:text-xl md:text-2xl text-stone-800 italic leading-snug">
                “Toda empresa tem um próximo passo. Meu trabalho é ajudar a encontrar qual é.”
              </p>
            </div>

            {/* Complementary explanatory text */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Gestão, processos, números e tecnologia conectados para ajudar empresas a enxergarem onde estão, para onde precisam ir e o que precisa mudar para chegar lá.
            </p>

            {/* Strict Two Buttons CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="https://wa.me/5532999978495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-stone-900 hover:bg-orange-600 rounded-md transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] group text-center"
              >
                <MessageCircle className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                <span>Fale comigo</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('#como-enxergo')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200/90 rounded-md transition-all duration-200 shadow-2xs hover:border-stone-300 text-center cursor-pointer"
              >
                <span>Conheça meu trabalho</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </button>
            </div>

            {/* Holistic Pillars Teaser (Clean unboxed metadata) */}
            <div className="pt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm font-medium text-stone-500">
              <span className="text-stone-900 font-semibold">Visão Integrada:</span>
              <span>Pessoas</span>
              <span aria-hidden="true">·</span>
              <span>Processos</span>
              <span aria-hidden="true">·</span>
              <span>Números</span>
              <span aria-hidden="true">·</span>
              <span>Tecnologia</span>
              <span aria-hidden="true">·</span>
              <span>Operação</span>
              <span aria-hidden="true">·</span>
              <span className="text-orange-700 font-semibold">Resultados</span>
            </div>

          </div>

          {/* Photo Column (5 cols on lg) - Premium Digital Card Framing */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Subtle architectural backdrop accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-stone-200/60 via-stone-100/40 to-orange-100/30 rounded-2xl -rotate-1 transform scale-98 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-xl group">
                
                {/* Fallback container if image fails or is loading */}
                {!imageLoaded && !imageError && (
                  <div className="aspect-[4/5] w-full flex items-center justify-center bg-stone-900 text-stone-400">
                    <div className="flex flex-col items-center gap-3">
                      <Compass className="w-8 h-8 text-orange-500 animate-spin" />
                      <span className="text-xs uppercase tracking-widest text-stone-400">Bruno V. Rodrigues</span>
                    </div>
                  </div>
                )}

                {imageError ? (
                  <div className="aspect-[4/5] w-full flex flex-col justify-end p-8 bg-gradient-to-b from-stone-800 to-stone-950 text-white">
                    <div className="mb-4">
                      <span className="text-xs tracking-widest uppercase text-orange-400 font-semibold">Consultor</span>
                      <h3 className="text-2xl font-bold tracking-tight text-white mt-1">Bruno Vitorino Rodrigues</h3>
                    </div>
                    <p className="text-sm text-stone-300">
                      Administrador e consultor com visão sistêmica em gestão, processos, sistemas e controladoria.
                    </p>
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-900">
                    <img
                      src="https://i.postimg.cc/htPBzQMK/Captura-de-tela-2026-11-05-102645.png"
                      alt="Bruno Vitorino Rodrigues - Consultor"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02] ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    {/* Measured soft gradient scrim on bottom for readability and premium feel */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent pointer-events-none" />

                    {/* Subtle digital card badge in corner */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <div>
                        <p className="font-semibold text-white tracking-wide">Bruno Vitorino Rodrigues</p>
                        <p className="text-stone-300 text-[11px]">Administração · Gestão Financeira · Auditoria</p>
                      </div>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 bg-stone-900/80 backdrop-blur-md rounded border border-white/10 text-[11px] text-orange-300 font-medium">
                        <Compass className="w-3 h-3 text-orange-400" />
                        Direção
                      </span>
                    </div>
                  </div>
                )}

              </div>

              {/* Discreet caption below photo on mobile */}
              <p className="text-center text-xs text-stone-500 mt-3 lg:hidden">
                Bruno Vitorino Rodrigues · Consultor Estratégico & Operacional
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
