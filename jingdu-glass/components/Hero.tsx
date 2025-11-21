import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Award, ArrowLeft } from 'lucide-react';
import { Section, Language } from '../types';

interface HeroProps {
    setActiveSection: (section: Section) => void;
    t: any;
    language: Language;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection, t, language }) => {
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-warm-50">
      {/* Background Elements - Subtler and warmer */}
      <div className="absolute top-0 right-0 w-[40vw] h-[80vh] bg-amber-100/40 rounded-bl-full filter blur-[100px] opacity-60 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[50vh] bg-teal-50/60 rounded-tr-full filter blur-[80px] opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
               <ShieldCheck className="h-4 w-4 text-brand-600 mr-2" />
               <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">{t.hero.iso}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
              {t.hero.title1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-600 to-brand-600">{t.hero.title2}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                  onClick={() => setActiveSection(Section.PRODUCTS)}
                  className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center justify-center transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30">
                {t.hero.cta_catalog} <ArrowIcon className="ltr:ml-2 rtl:mr-2 h-5 w-5" />
              </button>
              <button 
                  onClick={() => setActiveSection(Section.AI_CONSULTANT)}
                  className="px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-100 hover:border-brand-200 text-slate-700 rounded-xl font-bold transition-all shadow-sm">
                {t.hero.cta_ai}
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-gray-200/60 pt-8">
              <div className="flex items-center">
                <div className="p-1.5 bg-brand-50 rounded-full mr-3">
                    <CheckCircle className="h-4 w-4 text-brand-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">{t.hero.stats.quality}</span>
              </div>
              <div className="flex items-center">
                <div className="p-1.5 bg-brand-50 rounded-full mr-3">
                    <CheckCircle className="h-4 w-4 text-brand-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">{t.hero.stats.export}</span>
              </div>
               <div className="flex items-center">
                <div className="p-1.5 bg-brand-50 rounded-full mr-3">
                    <CheckCircle className="h-4 w-4 text-brand-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">{t.hero.stats.production}</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Warm Lifestyle Focus */}
          <div className="lg:col-span-6 relative">
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-warm-900/10 border-[6px] border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1563415918636-c537cb512143?q=80&w=2071&auto=format&fit=crop" 
                  alt="Premium Borosilicate Tea Set" 
                  className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Floating "Best Seller" Card */}
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur shadow-xl p-5 rounded-2xl max-w-[240px] border border-gray-50 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <div className="flex items-start gap-4">
                        <div className="bg-warm-100 p-3 rounded-xl">
                            <Award className="h-6 w-6 text-warm-600" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Top Export Item</p>
                            <p className="font-bold text-slate-800 leading-tight">Double Wall Glass Set</p>
                            <div className="flex items-center mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded w-fit">
                                <span>Trending in EU</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Blobs */}
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-warm-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;