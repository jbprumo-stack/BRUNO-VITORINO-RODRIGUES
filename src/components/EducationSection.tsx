import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Compass, Layers } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="formacao" className="py-20 md:py-28 bg-stone-100/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Base Técnica & Acadêmica
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Formação
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Conhecimento estruturado e aprofundado para apoiar decisões estratégicas, gestão financeira e controles empresariais.
          </p>
        </div>

        {/* 3 Main Degrees Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: Bacharelado em Administração */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-stone-400">
                  Graduação
                </span>
                <div className="p-2 bg-stone-50 rounded-lg text-stone-700">
                  <GraduationCap className="w-5 h-5 text-orange-600" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 leading-snug mb-3">
                Bacharelado em Administração
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Base fundamental que consolidou minha visão sistêmica da empresa, estruturas operacionais, liderança de equipes e tomada de decisões sob incerteza.
              </p>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                  Foco na prática consultiva:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Visão global do negócio, alinhamento de diretrizes e coordenação entre diferentes setores para que trabalhem na mesma direção.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Visão sistêmica e de negócio</span>
            </div>
          </div>

          {/* Card 2: MBA em Gestão Financeira */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-orange-600 font-bold">
                  Pós-Graduação Executiva
                </span>
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 leading-snug mb-3">
                MBA em Gestão Financeira
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed mb-5">
                Minha formação nessa área aprofundou minha visão sobre gestão empresarial, finanças corporativas, planejamento estratégico, análise financeira e planejamento orçamentário.
              </p>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                  Campos estudados na pós-graduação:
                </span>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Gestão Empresarial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Finanças Corporativas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Economia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Planejamento Estratégico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Análise das Demonstrações Financeiras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Gestão Financeira Estratégica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Planejamento Financeiro e Orçamentário</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Clareza sobre números e decisões</span>
            </div>
          </div>

          {/* Card 3: MBA em Gestão de Auditoria e Controladoria */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-orange-600 font-bold">
                  Pós-Graduação Executiva
                </span>
                <div className="p-2 bg-stone-900 rounded-lg text-white">
                  <GraduationCap className="w-5 h-5 text-orange-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 leading-snug mb-3">
                MBA em Gestão de Auditoria e Controladoria nas Organizações
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed mb-5">
                Essa formação ampliou minha capacidade de analisar controles, processos, patrimônio, estoques, informações contábeis, financeiras e tributárias, além de compreender mecanismos de auditoria e investigação dentro das organizações.
              </p>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                  Campos estudados na pós-graduação:
                </span>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 shrink-0" />
                    <span>Auditoria Contábil, Fiscal, Tributária e Trabalhista</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 shrink-0" />
                    <span>Auditoria de Bens Patrimoniais e Estoque</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 shrink-0" />
                    <span>Auditoria de Controles Internos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 shrink-0" />
                    <span>Controladoria Contábil, Financeira e Tributária</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 shrink-0" />
                    <span>Métodos de Investigação em Organizações</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Identificação de falhas, riscos e controles</span>
            </div>
          </div>

        </div>

        {/* Section 6: Connection between Education & Consulting Vision */}
        <div className="p-8 sm:p-10 bg-white rounded-2xl border border-stone-200/90 shadow-2xs">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2 block">
              Como esses conhecimentos se conectam na prática
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 tracking-tight">
              Minha formação não está separada da minha atuação.
            </h4>
            
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-4">
              <strong>Administração</strong> me deu a visão do negócio como um todo. A <strong>gestão financeira</strong> me ensinou a olhar com precisão para os números e para o impacto das decisões. <strong>Auditoria e controladoria</strong> ampliaram minha capacidade de identificar falhas, riscos, perdas invisíveis e oportunidades reais de melhoria.
            </p>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Tudo isso ganha vida quando somado à minha vivência prática em processos, sistemas ERP e operação empresarial. É essa convergência que me permite olhar para uma empresa por diferentes perspectivas simultaneamente e encontrar soluções que realmente funcionam no chão da organização.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
