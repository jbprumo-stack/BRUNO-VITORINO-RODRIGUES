import React, { useState } from 'react';
import { MessageCircle, Phone, Linkedin, ArrowRight, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('Diagnóstico geral da empresa');

  const topics = [
    'Diagnóstico geral da empresa',
    'Organização de processos e rotinas',
    'Finanças, margens e fluxo de caixa',
    'Sistemas ERP e controle de estoque',
    'Empresa cresceu e precisa de direção',
  ];

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Olá, Bruno! Acessei seu site pessoal e gostaria de conversar sobre a minha empresa. Assunto prioritário: ${selectedTopic}.`
    );
    return `https://wa.me/5532999978495?text=${text}`;
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#fafaf8] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-900 via-orange-600 to-stone-900" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-orange-600" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
                  Primeiro Passo
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
                Sua empresa sabe onde quer chegar?
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8">
                Se você sente que sua empresa pode funcionar melhor, crescer com mais organização ou simplesmente precisa enxergar com mais clareza qual deve ser o próximo passo, vamos conversar.
              </p>

              {/* Direct interactive topic selector to personalize WhatsApp message */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                  Qual é o principal desafio atual da sua empresa?
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      className={`text-xs px-3.5 py-2 rounded-lg font-medium transition-all text-left cursor-pointer border ${
                        selectedTopic === t
                          ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold tracking-wide uppercase text-white bg-stone-900 hover:bg-orange-600 rounded-md transition-all duration-200 shadow-md group text-center"
                >
                  <MessageCircle className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  <span>Falar diretamente comigo</span>
                </a>

                <div className="text-xs text-stone-500 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Conversa direta comigo no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Details & Links (5 cols) */}
            <div className="lg:col-span-5 bg-stone-50 p-7 sm:p-8 rounded-2xl border border-stone-200/80 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Meus Canais Oficiais
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-1">Contato Direto</h3>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200/70">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800">
                  <Phone className="w-5 h-5 text-stone-800" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Telefone / WhatsApp</span>
                  <a
                    href="https://wa.me/5532999978495"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-stone-900 hover:text-orange-600 transition-colors"
                  >
                    (32) 9 9997-8495
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200/70">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800">
                  <Linkedin className="w-5 h-5 text-stone-800" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-stone-500 block">LinkedIn Profissional</span>
                  <a
                    href="https://www.linkedin.com/in/bruno-vitorino-rodrigues-7b2974440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-stone-900 hover:text-orange-600 transition-colors truncate block"
                  >
                    bruno-vitorino-rodrigues
                  </a>
                </div>
              </div>

              {/* Reassurance note */}
              <div className="pt-2 text-xs text-stone-500 leading-relaxed border-t border-stone-200/60">
                <p>
                  Você conversa diretamente comigo, de forma confidencial. Sem intermediários, vendedores ou triagens comerciais.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
