import React from 'react';
import { BookOpen, FileText, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const KnowledgeMaterialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fafaf8] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Minhas Publicações & Materiais
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Conhecimento também é ferramenta.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Além da consultoria, desenvolvo materiais, livros e conteúdos voltados ao desenvolvimento empresarial, à gestão prática e à tomada de decisões com clareza.
          </p>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Meu trabalho não termina na análise pontual: mantenho uma produção contínua de ferramentas práticas e reflexões aplicadas para apoiar empresários e gestores no seu dia a dia.
          </p>
        </div>

        {/* Modular Grid prepared for future books & materials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Livros & Obras */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between group hover:border-stone-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Publicações Autorais
                </span>
                <BookOpen className="w-5 h-5 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </div>

              {/* Book placeholder visual representation */}
              <div className="aspect-[3/4] w-36 mx-auto mb-6 bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg shadow-md border border-stone-700/60 p-4 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-600/10 rounded-full blur-xl pointer-events-none" />
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-orange-400 font-bold block mb-1">Livro / Obra</span>
                  <p className="text-xs font-bold leading-tight text-white">Desenvolvimento Empresarial & Gestão</p>
                </div>
                <div className="border-t border-stone-700 pt-2 text-[10px] text-stone-400">
                  <span>Bruno V. Rodrigues</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Livros em Produção
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Obras estruturadas a partir de experiências reais no ambiente corporativo, abordando gargalos, organização de processos e liderança prática.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="text-stone-400">Em preparação</span>
              <span className="text-orange-600 font-semibold">Lançamentos futuros</span>
            </div>
          </div>

          {/* Card 2: E-books & Guias Estratégicos */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between group hover:border-stone-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Materiais Digitais
                </span>
                <FileText className="w-5 h-5 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </div>

              {/* Digital Ebook placeholder */}
              <div className="aspect-[3/4] w-36 mx-auto mb-6 bg-stone-100 rounded-lg border border-stone-300 p-4 flex flex-col justify-between text-stone-800 shadow-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-stone-500 font-bold block mb-1">E-book</span>
                  <p className="text-xs font-bold leading-tight text-stone-900">Diagnóstico & Direção Estratégica</p>
                </div>
                <div className="border-t border-stone-200 pt-2 text-[10px] text-stone-500">
                  <span>Guia Executivo</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-2">
                E-books & Manuais
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Conteúdos objetivos e didáticos voltados a empresários que desejam entender melhor os indicadores financeiros e a eficiência operacional.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="text-stone-400">Acervo em expansão</span>
              <span className="text-orange-600 font-semibold">Disponibilização gradual</span>
            </div>
          </div>

          {/* Card 3: Ferramentas & Frameworks Práticos */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between group hover:border-stone-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Instrumentos de Gestão
                </span>
                <Sparkles className="w-5 h-5 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </div>

              {/* Tool framework placeholder */}
              <div className="aspect-[3/4] w-36 mx-auto mb-6 bg-stone-900 rounded-lg p-4 flex flex-col justify-between text-white shadow-xs border border-stone-800">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-orange-400 font-bold block mb-1">Ferramental</span>
                  <p className="text-xs font-bold leading-tight text-stone-100">Matrizes de Decisão & Rotinas</p>
                </div>
                <div className="space-y-1.5 border-t border-stone-800 pt-2">
                  <div className="h-1.5 bg-stone-700 rounded-full w-4/5" />
                  <div className="h-1.5 bg-orange-600/60 rounded-full w-3/5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Ferramentas Práticas
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Planilhas modelo, mapas de fluxo e roteiros de auditoria desenvolvidos para simplificar o cotidiano empresarial sem softwares caros ou complexos.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="text-stone-400">Metodologias próprias</span>
              <span className="text-stone-800 font-semibold">Uso consultivo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
