import React from 'react';
import { Eye, Search, Layers, Compass, LineChart } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'ENTENDER',
      description: 'Conhecer a realidade da empresa, sua operação, seus objetivos e seus desafios.',
      details: 'Mergulho na rotina diária do seu negócio: converso com quem está na linha de frente, observo como o trabalho flui e compreendo onde aperta o sapato.',
      icon: Eye,
    },
    {
      number: '02',
      title: 'IDENTIFICAR',
      description: 'Encontrar gargalos, desperdícios, riscos, oportunidades e pontos que precisam de atenção.',
      details: 'Conduzo um diagnóstico preciso cruzando processos, sistemas ERP e números, separando sintomas superficiais das causas-raiz reais.',
      icon: Search,
    },
    {
      number: '03',
      title: 'ORGANIZAR',
      description: 'Transformar informações e problemas em prioridades, processos e ações mais claras.',
      details: 'Estruturo fluxos operacionais, rotinas de trabalho, controles e indicadores para que sua empresa ganhe previsibilidade e autonomia.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'DIRECIONAR',
      description: 'Ajudar a empresa a tomar decisões melhores e avançar com mais segurança.',
      details: 'Entrego clareza prática para você tomar decisões: o que priorizar primeiro, o que descontinuar, como alocar recursos e como manter o foco.',
      icon: Compass,
    },
    {
      number: '05',
      title: 'ACOMPANHAR',
      description: 'Quando necessário, acompanhar a evolução e os resultados das mudanças realizadas.',
      details: 'Acompanho a execução para garantir que as melhorias sejam absorvidas pela sua equipe e continuem gerando resultados consistentes no longo prazo.',
      icon: LineChart,
    },
  ];

  return (
    <section id="atuacao" className="py-20 md:py-28 bg-[#fafaf8] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Meu Método de Trabalho
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Minha forma de atuar
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Meu objetivo não é entregar um relatório burocrático e ir embora. É gerar clareza, organização e transformação duradoura na rotina do seu negócio.
          </p>
        </div>

        {/* 5-Step Process Timeline/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-2xs hover:border-orange-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-stone-300 group-hover:text-orange-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-stone-50 group-hover:bg-orange-50 text-stone-600 group-hover:text-orange-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-stone-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-800 font-medium leading-snug mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting statement */}
        <div className="mt-10 p-6 bg-stone-50 rounded-xl border border-stone-200/70 text-center max-w-3xl mx-auto">
          <p className="text-sm text-stone-700 font-medium">
            <span className="font-bold text-stone-900">Direção sem complicação:</span> Minha atuação é calibrada para o momento específico, tamanho e cultura da sua empresa.
          </p>
        </div>

      </div>
    </section>
  );
};
