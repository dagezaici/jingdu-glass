import React, { useState } from 'react';
import { Menu, X, Hexagon, Globe, Phone, Mail, Clock } from 'lucide-react';
import { Section, Language } from '../types';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { id: Section.HOME, label: t.nav.home },
    { id: Section.PRODUCTS, label: t.nav.catalog },
    { id: Section.STRENGTH, label: t.nav.strength },
    { id: Section.AI_CONSULTANT, label: t.nav.ai },
    { id: Section.AUDIT, label: t.nav.audit },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ar', label: 'العربية' },
    { code: 'es', label: 'Español' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  return (
    <>
      {/* Top Utility Bar - Essential for B2B Trust */}
      <div className="bg-slate-900 text-gray-300 py-2.5 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <a href={`mailto:${t.contact.email_addr}`} className="flex items-center hover:text-brand-400 transition-colors">
                    <Mail className="h-3.5 w-3.5 mr-2 rtl:ml-2" /> {t.contact.email_addr}
                </a>
                <a href={`tel:${t.contact.phone_num}`} className="flex items-center hover:text-brand-400 transition-colors">
                    <Phone className="h-3.5 w-3.5 mr-2 rtl:ml-2" /> {t.contact.phone_num}
                </a>
            </div>
            <div className="flex items-center text-gray-400 text-xs">
                <Clock className="h-3 w-3 mr-1.5 rtl:ml-1.5" />
                <span>Response time: &lt; 2 Hours</span>
            </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 glass-effect shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer group" onClick={() => setActiveSection(Section.HOME)}>
              <div className="bg-brand-500 p-2 rounded-xl shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-105">
                 <Hexagon className="h-7 w-7 text-white fill-current ltr:mr-0.5 rtl:ml-0.5" />
              </div>
              <div className="flex flex-col ml-3 rtl:mr-3">
                <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">JINGDU</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-600">Glassware Factory</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-brand-700 bg-brand-50 font-semibold'
                        : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
            </div>

            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              {/* Language Selector */}
              <div className="relative">
                  <button 
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center text-gray-600 hover:text-brand-600 px-3 py-2 transition-colors bg-gray-50 rounded-lg"
                  >
                    <Globe className="h-4 w-4 mr-1.5" />
                    <span className="text-sm font-medium uppercase">{language}</span>
                  </button>
                  
                  {langMenuOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 overflow-hidden animate-fade-in">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangMenuOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                            language === lang.code ? 'text-brand-600 font-bold bg-brand-50' : 'text-gray-600'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
              </div>

              <button 
                  onClick={() => setActiveSection(Section.CONTACT)}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-0.5 active:translate-y-0">
                {t.nav.quote}
              </button>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between items-center px-2 mb-4">
                   <span className="text-sm text-gray-400 uppercase tracking-wider">Language</span>
                   <div className="flex space-x-2 rtl:space-x-reverse flex-wrap gap-y-2">
                      {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsOpen(false);
                            }}
                            className={`px-2 py-1 rounded text-xs font-bold border ${
                              language === lang.code 
                              ? 'border-brand-500 text-brand-600 bg-brand-50' 
                              : 'border-gray-200 text-gray-400'
                            }`}
                          >
                            {lang.code.toUpperCase()}
                          </button>
                      ))}
                   </div>
                </div>
              </div>

              <button 
                  onClick={() => {
                      setActiveSection(Section.CONTACT);
                      setIsOpen(false);
                  }}
                  className="w-full mt-2 bg-brand-600 text-white px-4 py-3 rounded-lg font-bold shadow-md">
                {t.nav.quote}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;