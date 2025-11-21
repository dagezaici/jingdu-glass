import React from 'react';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductShowcaseProps {
  t: any;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ t }) => {
  const products: Product[] = t.products.items;

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">{t.nav.catalog}</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">{t.products.title}</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-light text-lg">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
              <div className="aspect-w-4 aspect-h-3 h-72 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">{product.category}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{product.description}</p>
                
                <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center text-xs font-medium text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 ltr:mr-2 rtl:ml-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 transition-all text-slate-600 text-sm font-bold flex items-center justify-center">
                  {t.products.request} <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;