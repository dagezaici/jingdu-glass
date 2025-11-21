import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, Smartphone, Layout, Gauge, TrendingUp } from 'lucide-react';
import { AuditItem } from '../types';

interface AuditReportProps {
  t: any;
}

const AuditReport: React.FC<AuditReportProps> = ({ t }) => {
  const auditPoints: AuditItem[] = t.audit.items;

  return (
    <div className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
            </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.audit.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t.audit.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {auditPoints.map((point) => (
            <div key={point.id} className="bg-white border border-gray-100 shadow-soft rounded-2xl p-8 hover:shadow-card transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                    {point.id === '1' && <Layout className="text-indigo-500 h-6 w-6 ltr:mr-3 rtl:ml-3" />}
                    {point.id === '2' && <Smartphone className="text-indigo-500 h-6 w-6 ltr:mr-3 rtl:ml-3" />}
                    {point.id === '3' && <Gauge className="text-indigo-500 h-6 w-6 ltr:mr-3 rtl:ml-3" />}
                    {point.id === '4' && <AlertTriangle className="text-indigo-500 h-6 w-6 ltr:mr-3 rtl:ml-3" />}
                    <h3 className="text-xl font-bold text-slate-800">{point.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  (point.impact === 'High' || point.impact === '高' || point.impact === 'Hoch' || point.impact === 'عالي') 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-amber-100 text-amber-600'
                }`}>
                  {point.impact} Impact
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start p-4 rounded-xl bg-red-50 border border-red-100">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 ltr:mr-3 rtl:ml-3 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-red-600 uppercase font-bold mb-1">{t.audit.problem}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.issue}</p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-xl bg-green-50 border border-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 ltr:mr-3 rtl:ml-3 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-green-600 uppercase font-bold mb-1">{t.audit.solution}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditReport;