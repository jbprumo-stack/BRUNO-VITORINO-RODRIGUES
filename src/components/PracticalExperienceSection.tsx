import React from 'react';
import { 
  Briefcase, 
  Settings2, 
  Database, 
  Cpu, 
  Package, 
  BarChart3, 
  ShieldCheck, 
  FileSpreadsheet, 
  Binary, 
  ClipboardCheck, 
  Building2 
} from 'lucide-react';

export const PracticalExperienceSection: React.FC = () => {
  const practiceAreas = [
    {
      title: 'Gestão Empresarial',
      desc: 'Alinhamento estratégico, tomada de decisão e visão integrada entre os setores.',
      icon: Briefcase,
    },
    {
      title: 'Processos e Rotinas',
      desc: 'Mapeamento, eliminação de gargalos e padronização para execução com autonomia.',
      icon: Settings2,
    },
    {
      title: 'Sistemas ERP',
      desc: 'Parametrização, implantação prática e conciliação de rotinas dentro do sistema.',
      icon: Database,
    },
    {
      title: 'Tecnologia Aplicada à Operação',
      desc: 'Ferramentas digitais a serviço do fluxo diário, e não como burocracia extra.',
      icon: Cpu,
    },
    {
      title: 'Controle de Estoque',
      desc: 'Acuracidade, gestão de giro, redução de perdas, rupturas e capital parado.',
      icon: Package,
    },
    {
      title: 'Indicadores (KPIs)',
      desc: 'Métricas essenciais que mostram a saúde do negócio sem excesso de dados irrelevantes.',
      icon: BarChart3,
    },
    {
      title: 'Auditoria & Controles Internos',
      desc: 'Validação de rotinas, verificação de conformidade e mitigação de riscos operacionais.',
      icon: ShieldCheck,
    },
    {
      title: 'Organização de Processos',
      desc: 'Estruturação de fluxogramas claros e redução de dependência individual.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Análise de Informações',
      desc: 'Leitura crítica de relatórios e números para apoiar decisões financeiras e comerciais.',
      icon: Binary,
    },
    {
      title: 'Rotinas Administrativas',
      desc: 'Organização de backoffice, contas, compras e fluxo documental sem desperdício de tempo.',
      icon: ClipboardCheck,
    },
    {
      title: 'Operação Empresarial',
      desc: 'Presença no dia a dia da empresa, onde as vendas, entregas e cobranças realmente acontecem.',
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-stone-100/50 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-600" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
              Meu Campo de Atuação
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Experiência que vem da prática.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Minha experiência foi construída dentro da realidade das empresas, unindo gestão, processos, tecnologia e a rotina viva da operação, onde esses elementos precisam funcionar em sincronia todos os dias.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {practiceAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200/80 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5">
                    {area.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                
                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  <span>Aplicação prática</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote / Summary Statement */}
        <div className="mt-12 p-7 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Meu Princípio Profissional</span>
              <p className="text-base sm:text-lg font-bold text-stone-900">
                “A teoria ajuda a pensar, mas é o entendimento do chão da empresa que resolve problemas.”
              </p>
              <p className="text-xs sm:text-sm text-stone-600">
                Meu trabalho se adapta ao contexto da sua operação, sem fórmulas genéricas incompatíveis com seu tamanho.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <span>Conversar sobre sua operação</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
