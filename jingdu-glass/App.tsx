
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuditReport from './components/AuditReport';
import ProductShowcase from './components/ProductShowcase';
import AiConsultant from './components/AiConsultant';
import FactoryStrength from './components/FactoryStrength';
import AdminDashboard from './components/AdminDashboard'; // Import Admin
import { Section, Language } from './types';
import { translations as initialTranslations } from './utils/translations'; // Rename import
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUpRight, Flame, Wind, Thermometer, PackageCheck, MessageCircle, Settings } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [language, setLanguage] = useState<Language>('zh');
  
  // State for data management
  const [allData, setAllData] = useState(initialTranslations);
  const [showAdmin, setShowAdmin] = useState(false);

  // Derive current language data from state
  const t = allData[language];

  useEffect(() => {
    if (language === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = language;
    }
  }, [language]);

  // Visual Process Steps
  const processSteps = [
      { icon: Flame, label: "1600°C Melting", desc: "High purity raw material" },
      { icon: Wind, label: "Mouth Blown", desc: "Handcrafted precision" },
      { icon: Thermometer, label: "Annealing", desc: "Stress elimination" },
      { icon: PackageCheck, label: "100% QC", desc: "Piece by piece check" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case Section.HOME:
        return (
          <>
            <Hero setActiveSection={setActiveSection} t={t} language={language} />
            <FactoryStrength t={t} />
            <ProductShowcase t={t} />
            
            {/* Process Section - Visual Trust Builder */}
            <div className="bg-slate-50 py-16 md:py-24 text-center border-t border-gray-200">
               <div className="max-w-6xl mx-auto px-4">
                  <div className="mb-12">
                      <span className="text-brand-600 font-bold tracking-widest uppercase text-xs">{t.nav.process}</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-3">How We Create Quality</h3>
                  </div>
                  
                  <div className="relative">
                      {/* Connecting Line (Desktop) */}
                      <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -z-0 transform -translate-y-8"></div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                          {processSteps.map((step, idx) => (
                              <div key={idx} className="relative z-10 bg-slate-50 px-2 md:px-4">
                                 <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft mb-4 md:mb-6 border border-gray-100 group hover:border-brand-500 transition-colors duration-300">
                                     <step.icon className="h-6 w-6 md:h-8 md:w-8 text-gray-400 group-hover:text-brand-600 transition-colors" />
                                 </div>
                                 <h4 className="font-bold text-base md:text-lg text-slate-800 mb-1 md:mb-2">{step.label}</h4>
                                 <p className="text-xs md:text-sm text-gray-500">{step.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
               </div>
            </div>
            
            {/* Audit CTA - Persuasion Block */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-20 text-center relative overflow-hidden">
               {/* Background texture */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h3 className="text-2xl md:text-4xl text-white font-serif font-bold mb-6 leading-tight">
                  {language === 'zh' ? '您的网站正在流失付费流量吗？' : 
                  'Is your current site leaking paid traffic?'}
                </h3>
                <p className="text-slate-300 mb-8 md:mb-10 text-base md:text-lg font-light max-w-2xl mx-auto">
                    {language === 'zh' ? '查看我们的改进报告，了解为什么新设计能带来更多询盘。' : 
                  'See our analysis on why this new design generates more inquiries.'}
                </p>
                <button 
                  onClick={() => setActiveSection(Section.AUDIT)}
                  className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold transition-all inline-flex items-center shadow-lg shadow-brand-900/50 text-sm md:text-base"
                >
                  {t.nav.audit} <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>
          </>
        );
      case Section.PRODUCTS:
        return <ProductShowcase t={t} />;
      case Section.STRENGTH:
        return <FactoryStrength t={t} />;
      case Section.AUDIT:
        return <AuditReport t={t} />;
      case Section.AI_CONSULTANT:
        return <AiConsultant t={t} language={language} />;
      case Section.CONTACT:
        return (
            <div className="py-12 md:py-24 bg-warm-50 flex items-center justify-center min-h-[70vh]">
                 <div className="max-w-6xl w-full mx-4 bg-white p-6 md:p-16 rounded-2xl md:rounded-[2rem] shadow-2xl shadow-warm-900/5 border border-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                        <div className="space-y-8 md:space-y-10">
                            <div>
                                <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-2 block">Contact Us</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 md:mb-6">{t.contact.title}</h2>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                    Ready to upgrade your product line? Our sales team usually replies within 2 hours during business days (Mon-Sat).
                                </p>
                            </div>
                            
                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start group p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors -ml-2 md:-ml-4">
                                    <div className="p-3 bg-brand-100 rounded-xl mr-4 rtl:ml-4">
                                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Factory Address</p>
                                        <span className="text-slate-800 font-medium text-base md:text-lg">{t.contact.addr}</span>
                                    </div>
                                </div>
                                <div className="flex items-center group p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors -ml-2 md:-ml-4">
                                    <div className="p-3 bg-brand-100 rounded-xl mr-4 rtl:ml-4">
                                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Call Us</p>
                                        <span className="text-slate-800 font-bold text-lg md:text-xl">{t.contact.phone_num}</span>
                                    </div>
                                </div>
                                 <div className="flex items-center group p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors -ml-2 md:-ml-4">
                                    <div className="p-3 bg-brand-100 rounded-xl mr-4 rtl:ml-4">
                                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email Sales</p>
                                        <span className="text-slate-800 font-bold text-lg md:text-xl">{t.contact.email_addr}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100">
                            <form className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.name}</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 p-3 md:p-4 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all shadow-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.email}</label>
                                        <input type="email" className="w-full bg-white border border-gray-200 p-3 md:p-4 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all shadow-sm" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.details}</label>
                                    <textarea className="w-full bg-white border border-gray-200 p-3 md:p-4 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none h-32 md:h-40 transition-all resize-none shadow-sm"></textarea>
                                </div>
                                <button className="w-full bg-brand-600 text-white py-3 md:py-4 rounded-xl font-bold hover:bg-brand-700 shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1">
                                    {t.contact.submit}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">Your data is secure. We never share your info.</p>
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        );
      default:
        return (
           <>
            <Hero setActiveSection={setActiveSection} t={t} language={language} />
            <FactoryStrength t={t} />
            <ProductShowcase t={t} />
           </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-100 selection:text-brand-900 pb-16 md:pb-0">
      
      {/* Admin Dashboard Overlay */}
      {showAdmin && (
        <AdminDashboard 
            allData={allData} 
            setAllData={setAllData} 
            onClose={() => setShowAdmin(false)} 
        />
      )}

      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      
      <main className="pt-0">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-20 border-t border-slate-800 mt-auto mb-12 md:mb-0 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-24">
            <div className="col-span-1 md:col-span-1">
               <h4 className="text-white font-serif font-bold text-2xl mb-4 md:mb-6 tracking-wide">JINGDU GLASS</h4>
               <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-8">
                 Premium borosilicate glassware manufacturer since 2003. We help global brands create iconic products.
               </p>
               <div className="flex space-x-4 rtl:space-x-reverse">
                 <div className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Facebook className="h-5 w-5" />
                 </div>
                 <div className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5" />
                 </div>
                 <div className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Twitter className="h-5 w-5" />
                 </div>
               </div>
            </div>
            
            <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-800 pb-2 inline-block">{language === 'zh' ? '产品系列' : 'Products'}</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="hover:text-brand-400 cursor-pointer transition-colors flex items-center"><ArrowUpRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100" /> Double Wall Cups</li>
                <li className="hover:text-brand-400 cursor-pointer transition-colors">Glass Teapots</li>
                <li className="hover:text-brand-400 cursor-pointer transition-colors">Water Pitchers</li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-800 pb-2 inline-block">Compliance</h4>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="border border-slate-700 bg-slate-800/50 px-4 py-2 rounded-lg text-slate-300 hover:border-brand-500 transition-colors">ISO 9001</span>
                <span className="border border-slate-700 bg-slate-800/50 px-4 py-2 rounded-lg text-slate-300 hover:border-brand-500 transition-colors">LFGB</span>
                <span className="border border-slate-700 bg-slate-800/50 px-4 py-2 rounded-lg text-slate-300 hover:border-brand-500 transition-colors">FDA</span>
              </div>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-800 pb-2 inline-block">{language === 'zh' ? '联系方式' : 'Contact Factory'}</h4>
               <ul className="space-y-4 md:space-y-6 text-sm">
                   <li className="flex items-start group">
                       <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                       <span className="text-slate-400 leading-relaxed">{t.contact.addr}</span>
                   </li>
                   <li className="flex items-center group">
                       <Mail className="h-5 w-5 text-brand-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                       <span className="text-slate-400 font-medium">{t.contact.email_addr}</span>
                   </li>
                   <li className="flex items-center group">
                       <Phone className="h-5 w-5 text-brand-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                       <span className="text-slate-400 font-medium">{t.contact.phone_num}</span>
                   </li>
               </ul>
            </div>
          </div>
          <div className="mt-12 md:mt-20 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Hebei Jingdu Glass Products Co., Ltd.</p>
            {/* Admin Login Trigger */}
            <button 
                onClick={() => setShowAdmin(true)} 
                className="mt-4 md:mt-0 text-xs text-slate-700 hover:text-brand-500 flex items-center gap-1 transition-colors"
            >
                <Settings className="h-3 w-3" /> Admin Login
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar - CRITICAL for B2B Mobile Conversion */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex items-center justify-around py-3 px-2 safe-area-pb">
          <a href={`tel:${t.contact.phone_num}`} className="flex flex-col items-center text-gray-600 hover:text-brand-600">
             <Phone className="h-5 w-5 mb-0.5" />
             <span className="text-[10px] font-medium">{t.mobile.call}</span>
          </a>
          <a href={`mailto:${t.contact.email_addr}`} className="flex flex-col items-center text-gray-600 hover:text-brand-600">
             <Mail className="h-5 w-5 mb-0.5" />
             <span className="text-[10px] font-medium">{t.mobile.email}</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-600 hover:text-brand-600">
             <MessageCircle className="h-5 w-5 mb-0.5" />
             <span className="text-[10px] font-medium">WhatsApp</span>
          </a>
          <button 
            onClick={() => setActiveSection(Section.CONTACT)}
            className="bg-brand-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-brand-500/30 ml-2"
          >
            {t.mobile.inquiry}
          </button>
      </div>
    </div>
  );
};

export default App;
