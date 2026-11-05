import React from 'react';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      situation: 'Você trabalha muito, mas sente que o resultado não acompanha.',
      context: 'Esforço diário intenso da liderança que parece se dissipar em atritos operacionais e falta de alinhamento.',
    },
    {
      situation: 'Sua empresa vende, mas você não consegue enxergar claramente para onde o dinheiro está indo.',
      context: 'Faturamento presente, mas pouca previsibilidade de sobra de caixa, margens reais difusas ou custos ocultos.',
    },
    {
      situation: 'Existem processos que dependem demais de pessoas específicas.',
      context: 'Quando um colaborador falta ou sai, setores inteiros travam por falta de rotinas documentadas e mapeadas.',
    },
    {
      situation: 'Você tem sistemas e informações, mas ainda toma decisões sem enxergar o todo.',
      context: 'O ERP gera relatórios isolados, mas falta consolidação estratégica para decisões com segurança e rapidez.',
    },
    {
      situation: 'A empresa cresceu, mas a gestão não cresceu na mesma velocidade.',
      context: 'O volume aumentou, a complexidade explodiu e os métodos antigos improvisados começaram a cobrar o preço.',
    },
    {
      situation: 'Existem falhas, desperdícios ou perdas que parecem pequenas, mas se repetem todos os dias.',
      context: 'Pequenos vazamentos na operação e no controle de estoque que, somados ao longo de um ano, drenam a lucratividade.',
    },
    {
      situation: 'Você sabe que sua empresa pode ser melhor, mas não sabe exatamente por onde começar.',
      context: 'A sensação de sobrecarga diante de tantas demandas urgentes que impede o foco no que é estrutural.',
    },
  ];

  return (
    <section id="dores" className="py-20 md:py-28 bg-stone-100/50 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Diagnóstico de Realidade
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Talvez o problema não esteja onde você imagina.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Sei que sua empresa não precisa de fórmulas mágicas ou discursos prontos. Você precisa de alguém com olhar atento para enxergar onde estão os atritos silenciosos da rotina e ajudar a encontrar uma direção clara.
          </p>
        </div>

        {/* Situations Grid (Clean editorial cards, single-elevation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-xl border border-stone-200/80 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-stone-400">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug mt-2 mb-3">
                  {item.situation}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.context}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="italic">Ponto de atenção</span>
                <span className="text-orange-600 font-medium">Requer diagnóstico</span>
              </div>
            </div>
          ))}

          {/* Callout Conclusion Card in the Grid */}
          <div className="bg-stone-900 text-white p-7 rounded-xl border border-stone-900 shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Meu Ponto de Partida
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white mt-3 leading-snug">
                “É nesse ponto que começa o meu trabalho: entender, organizar, identificar e direcionar.”
              </p>
              <p className="text-stone-300 text-sm mt-3 leading-relaxed">
                Não entrego relatórios burocráticos para ficarem guardados em gavetas. Sento com você para entender a realidade da sua empresa, mapear onde estão os vazamentos e definir prioridades práticas de ação.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-stone-400">
                Identificou alguma dessas situações no seu negócio?
              </span>
              <a
                href="https://wa.me/5532999978495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar comigo sobre sua empresa</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
