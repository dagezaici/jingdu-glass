import React from 'react';
import { Factory, Award, Users, Truck } from 'lucide-react';

interface FactoryStrengthProps {
    t: any;
}

const FactoryStrength: React.FC<FactoryStrengthProps> = ({ t }) => {
    const items = t.strength.items;
    
    const icons = [Factory, Users, Award, Truck];

    return (
        <div className="py-16 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <span className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm bg-brand-50 px-4 py-2 rounded-full">Factory Direct</span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-4 md:mt-6 mb-4">{t.strength.title}</h2>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light">
                        {t.strength.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {items.map((item: any, idx: number) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <div key={idx} className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-card border border-gray-100 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-warm-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-50 transition-colors">
                                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-slate-400 group-hover:text-brand-600 transition-colors" />
                                </div>
                                
                                <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Trust Signals */}
                <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-6 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos for Certifications */}
                    <div className="flex items-center space-x-2">
                        <div className="font-serif font-bold text-xl md:text-2xl text-slate-800">ISO<span className="text-brand-600">9001</span></div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="font-sans font-black text-xl md:text-2xl text-slate-800">BSCI</div>
                    </div>
                     <div className="flex items-center space-x-2">
                        <div className="font-serif font-bold text-xl md:text-2xl text-slate-800">LFGB</div>
                    </div>
                     <div className="flex items-center space-x-2">
                        <div className="font-sans font-black text-xl md:text-2xl text-slate-800">FDA</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactoryStrength;