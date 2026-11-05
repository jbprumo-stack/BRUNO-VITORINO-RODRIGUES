import React from 'react';
import { Target, Layers, Cpu, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#fafaf8] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Trajetória & Propósito
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Quem está por trás da direção
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed">
            <p className="text-stone-900 font-medium text-lg sm:text-xl leading-relaxed">
              Sou Administrador e Consultor, com uma trajetória construída unindo gestão, processos, sistemas e a realidade da operação empresarial.
            </p>
            
            <p>
              Minha atuação nasce da combinação direta entre conhecimento técnico e vivência prática no cotidiano das organizações. Isso me permite enxergar além do sintoma superficial, compreendendo os processos, os comportamentos, os números e a tecnologia que estão por trás de cada gargalo.
            </p>

            <p className="text-stone-900 font-medium">
              Eu não quero apenas analisar uma empresa. Quero entender como ela funciona, onde estão seus pontos fortes, onde existem problemas e qual pode ser o próximo passo.
            </p>

            <p>
              Meu propósito é sentar ao lado do empresário para ajudá-lo a compreender melhor seu próprio negócio, identificar oportunidades invisíveis na rotina, corrigir falhas operacionais e tomar decisões com segurança e clareza.
            </p>

            {/* Core personal brand ethos block */}
            <div className="mt-8 p-6 bg-stone-100/80 rounded-xl border border-stone-200/80">
              <p className="text-xs font-bold tracking-wider uppercase text-stone-500 mb-2">
                Minha visão de conjunto
              </p>
              <p className="text-sm sm:text-base text-stone-800 leading-normal font-medium">
                Não olho para um problema de forma isolada. Meu trabalho consiste em compreender a engrenagem viva do negócio:
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm font-semibold text-stone-900">
                <span className="px-2.5 py-1 bg-white rounded border border-stone-200">pessoas</span>
                <span className="text-stone-400 self-center">+</span>
                <span className="px-2.5 py-1 bg-white rounded border border-stone-200">processos</span>
                <span className="text-stone-400 self-center">+</span>
                <span className="px-2.5 py-1 bg-white rounded border border-stone-200">números</span>
                <span className="text-stone-400 self-center">+</span>
                <span className="px-2.5 py-1 bg-white rounded border border-stone-200">tecnologia</span>
                <span className="text-stone-400 self-center">+</span>
                <span className="px-2.5 py-1 bg-white rounded border border-stone-200">operação</span>
                <span className="text-stone-400 self-center">+</span>
                <span className="px-2.5 py-1 bg-white rounded border border-stone-200">gestão</span>
                <span className="text-stone-400 self-center">=</span>
                <span className="px-2.5 py-1 bg-orange-600 text-white rounded font-bold">resultado</span>
              </div>
            </div>
          </div>

          {/* Pillars Card (5 cols) - Minimalist structural surface */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Fundamentos da minha atuação</span>
              <h3 className="text-lg font-bold text-stone-900 mt-1">Convergência Prática</h3>
            </div>

            <ul className="space-y-4 text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-stone-900 font-semibold">Administração & Gestão:</strong> Estruturo a tomada de decisão com método e definição clara de responsabilidades.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-stone-900 font-semibold">Processos & Rotinas:</strong> Elimino gargalos, retrabalho e a dependência excessiva de pessoas específicas.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-stone-900 font-semibold">Sistemas ERP & Tecnologia:</strong> Conecto sistemas à realidade do chão da empresa para gerar dados úteis, não relatórios vazios.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-stone-900 font-semibold">Finanças & Controladoria:</strong> Trago clareza ao fluxo de caixa, margens reais, controle de custos e conciliação de dados.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-stone-900 font-semibold">Vivência de Mercado:</strong> Experiência construída no dia a dia de empresas reais, lidando com problemas complexos.
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-stone-100">
              <a
                href="#como-enxergo"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-stone-800 hover:text-orange-600 transition-colors"
              >
                <span>Ver como enxergo a engrenagem da sua empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
