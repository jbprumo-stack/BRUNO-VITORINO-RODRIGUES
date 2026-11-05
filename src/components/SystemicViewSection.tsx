import React, { useState } from 'react';
import { Network, Users, RefreshCw, DollarSign, Laptop, TrendingUp, ArrowRight, Check } from 'lucide-react';

interface Dimension {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  systemicImpact: string;
  symptomVsRoot: string;
}

export const SystemicViewSection: React.FC = () => {
  const dimensions: Dimension[] = [
    {
      id: 'gestao',
      name: 'Gestão',
      icon: Network,
      role: 'Direção, prioridades e clareza',
      systemicImpact: 'Define onde a empresa deve concentrar energia, evitando que a liderança apague incêndios diariamente sem foco.',
      symptomVsRoot: 'Sintoma: Falta de tempo do empresário. Raiz sistêmica: Centralização e ausência de diretrizes operacionais claras.',
    },
    {
      id: 'pessoas',
      name: 'Pessoas',
      icon: Users,
      role: 'Execução, autonomia e cultura',
      systemicImpact: 'Capacidade de executar rotinas com responsabilidade e sem dependência crônica de indivíduos isolados.',
      symptomVsRoot: 'Sintoma: Erros frequentes da equipe. Raiz sistêmica: Processos informais ou falta de treinamento nos sistemas de apoio.',
    },
    {
      id: 'processos',
      name: 'Processos',
      icon: RefreshCw,
      role: 'Fluxo, cadência e padronização',
      systemicImpact: 'Como o trabalho flui entre setores, do pedido ao faturamento, eliminando retrabalhos e desperdícios.',
      symptomVsRoot: 'Sintoma: Atrasos na entrega ao cliente. Raiz sistêmica: Falha de comunicação entre compras, estoque e vendas.',
    },
    {
      id: 'financas',
      name: 'Finanças',
      icon: DollarSign,
      role: 'Controle, margem e liquidez',
      systemicImpact: 'O reflexo matemático de todas as decisões tomadas nos demais setores da organização.',
      symptomVsRoot: 'Sintoma: Dinheiro não sobra no final do mês. Raiz sistêmica: Precificação desalinhada, custos invisíveis ou estoque excessivo.',
    },
    {
      id: 'tecnologia',
      name: 'Tecnologia',
      icon: Laptop,
      role: 'Sistemas ERP e inteligência de dados',
      systemicImpact: 'A ferramenta que sustenta a operação e gera dados confiáveis para a tomada de decisões.',
      symptomVsRoot: 'Sintoma: O ERP não serve para nada na prática. Raiz sistêmica: Alimentação incorreta e falta de integração com os processos.',
    },
    {
      id: 'resultados',
      name: 'Resultados',
      icon: TrendingUp,
      role: 'Sustentabilidade e prosperidade',
      systemicImpact: 'O fruto natural de uma engrenagem que funciona com sincronia e previsibilidade.',
      symptomVsRoot: 'Sintoma: Estagnação no crescimento. Raiz sistêmica: Desconexão entre os 5 pilares fundamentais da empresa.',
    },
  ];

  const [activeDimension, setActiveDimension] = useState<Dimension>(dimensions[0]);

  return (
    <section id="como-enxergo" className="py-20 md:py-28 bg-[#fafaf8] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Visão Sistêmica
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Uma empresa não é apenas um problema. É um sistema.
          </h2>
          <div className="mt-5 space-y-3 text-stone-600 text-base sm:text-lg leading-relaxed">
            <p>
              Quando uma empresa enfrenta dificuldades, muitas vezes o problema aparece em um lugar, mas sua origem está em outro.
            </p>
            <p>
              Por isso, meu trabalho começa entendendo o todo. Não adianta consertar um sintoma de vendas se o fluxo de compras ou o estoque estão travados. A operação, os processos, as pessoas, os números e a tecnologia precisam conversar entre si.
            </p>
          </div>
        </div>

        {/* 6 Connected Elements Interactive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {dimensions.map((dim) => {
            const Icon = dim.icon;
            const isSelected = activeDimension.id === dim.id;
            return (
              <button
                key={dim.id}
                type="button"
                onClick={() => setActiveDimension(dim)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md transform -translate-y-0.5'
                    : 'bg-white text-stone-800 border-stone-200/80 hover:border-stone-300 hover:bg-stone-50/80'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-stone-800 text-orange-400' : 'bg-stone-100 text-stone-700'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-orange-400' : 'text-stone-400'}`}>
                    Pilar
                  </span>
                </div>
                <div>
                  <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {dim.name}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {dim.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card of the Selected Dimension */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-stone-900 text-orange-400 rounded-xl">
                <activeDimension.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Como analiso este elo</span>
                <h3 className="text-xl font-bold text-stone-900">{activeDimension.name} — {activeDimension.role}</h3>
              </div>
            </div>
            <span className="text-xs text-stone-500">
              Clique nos pilares acima para alternar a análise
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                O papel deste elo no seu negócio
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {activeDimension.systemicImpact}
              </p>
            </div>

            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-2">
                Minha leitura prática: Onde o problema aparece vs. Onde ele nasce
              </p>
              <p className="text-stone-800 text-sm leading-relaxed font-medium">
                {activeDimension.symptomVsRoot}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
