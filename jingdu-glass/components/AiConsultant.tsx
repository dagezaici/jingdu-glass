import React, { useState } from 'react';
import { consultGlassExpert } from '../services/geminiService';
import { Bot, Send, Loader2, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface AiConsultantProps {
  t: any;
  language: Language;
}

const AiConsultant: React.FC<AiConsultantProps> = ({ t, language }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    const result = await consultGlassExpert(query, language);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
             <span className="inline-flex items-center justify-center p-2 bg-brand-100 text-brand-700 rounded-lg mb-4">
                 <Bot className="h-6 w-6 mr-2" /> {t.nav.ai}
             </span>
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.ai.title}</h2>
             <p className="text-gray-500">{t.ai.desc}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Chat Area */}
          <div className="p-8 bg-gray-50/50 min-h-[300px] flex flex-col">
            {response ? (
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in flex items-start">
                <div className="flex-shrink-0 bg-brand-600 rounded-full p-2 mr-4">
                     <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-sm md:text-base">{response}</p>
                    <button 
                    onClick={() => setResponse(null)}
                    className="mt-4 text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
                    >
                    {t.ai.ask_another}
                    </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400">
                <MessageSquare className="h-12 w-12 mb-4 text-gray-300" />
                <p className="font-medium text-gray-500">{t.ai.try_asking}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-lg">
                  {t.ai.suggestions.map((suggestion: string, idx: number) => (
                    <span 
                      key={idx}
                      onClick={() => setQuery(suggestion)}
                      className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-brand-400 hover:text-brand-600 hover:shadow-md cursor-pointer text-sm transition-all"
                    >
                      "{suggestion}"
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleConsultation} className="relative flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.ai.placeholder}
                className="w-full bg-gray-50 border-0 rounded-xl py-4 px-4 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-brand-200 focus:bg-white transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-4 bg-brand-600 rounded-xl text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-500/30"
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 rtl:rotate-180" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AiConsultant;