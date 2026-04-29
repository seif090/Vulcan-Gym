import React from 'react';
import { 
  CreditCard, 
  Plus, 
  Settings2, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { SubscriptionPlan, Subscription } from '../types';
import { cn, formatCurrency, formatDate } from '../lib/utils';

const plans: SubscriptionPlan[] = [
  { id: 'p1', name: 'الباقة الشهرية', durationMonths: 1, price: 500, description: 'وصول كامل للجيم لمدة شهر واحد.' },
  { id: 'p2', name: 'الباقة الربع سنوية', durationMonths: 3, price: 1200, description: 'وفر 300 ج.م مع اشتراك 3 أشهر.' },
  { id: 'p3', name: 'الباقة السنوية', durationMonths: 12, price: 4000, description: 'أفضل قيمة: تدريب لمدة سنة كاملة.' },
];

const activeSubscriptions: any[] = [
  { id: 's1', memberName: 'أحمد محمد علي', planName: 'الباقة السنوية', startDate: '2024-01-15', endDate: '2025-01-14', status: 'active', remainingDays: 260 },
  { id: 's2', memberName: 'سارة محمود', planName: 'الباقة الشهرية', startDate: '2024-04-10', endDate: '2024-05-09', status: 'active', remainingDays: 12 },
  { id: 's3', memberName: 'ياسين حسن', planName: 'الباقة الربع سنوية', startDate: '2023-11-20', endDate: '2024-02-19', status: 'expired', remainingDays: 0 },
];

export const Subscriptions: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">خطط الاشتراك</h1>
          <p className="text-text-dim">إدارة باقات التدريب المتاحة ومتابعة التزامات الأعضاء.</p>
        </div>
        <div className="flex gap-4">
          <button className="glass flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/5 transition-all">
            <Settings2 className="h-5 w-5 text-accent" />
            تهيئة النظام
          </button>
          <button className="bg-accent text-black px-8 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-all neon-glow flex items-center gap-3">
            <Plus className="h-5 w-5" />
            تفعيل باقة
          </button>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className="relative overflow-hidden group glass rounded-[2rem] p-10 transition-all hover:-translate-y-3 hover:border-accent/40">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-all group-hover:scale-110">
                <CreditCard className="h-8 w-8" />
              </div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1 rounded-full border border-accent/10">
                {plan.durationMonths} Months
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{plan.name}</h3>
            <p className="text-sm text-text-dim mb-8 leading-relaxed line-clamp-2 h-10">{plan.description}</p>
            
            <div className="flex items-baseline gap-2 pt-6 border-t border-white/5">
              <span className="text-4xl font-extrabold text-white neon-text">{plan.price}</span>
              <span className="text-xs font-bold text-text-dim uppercase tracking-widest">EGP</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
           <h2 className="text-xl font-bold text-white flex items-center gap-3">
             <Clock className="h-6 w-6 text-accent" />
             الاشتراكات النشطة حالياً
           </h2>
           <span className="glass px-4 py-1.5 rounded-full text-[10px] font-extrabold text-accent uppercase tracking-widest border border-accent/20">
             352 Active Sessions
           </span>
        </div>

        <div className="glass rounded-[2rem] overflow-hidden shadow-2xl">
           <div className="overflow-x-auto">
             <table className="w-full text-right text-sm">
               <thead>
                 <tr className="bg-white/2">
                   <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">العضو</th>
                   <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">نوع الباقة</th>
                   <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">فترة الصلاحية</th>
                   <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">معدل الانجاز</th>
                   <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">الحالة</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {activeSubscriptions.map((sub) => (
                   <tr key={sub.id} className="hover:bg-white/[0.03] transition-all group">
                     <td className="px-8 py-6 font-bold text-white text-base group-hover:text-accent transition-colors">{sub.memberName}</td>
                     <td className="px-8 py-6">
                        <span className="text-xs font-bold text-white/80">{sub.planName}</span>
                     </td>
                     <td className="px-8 py-6">
                        <div className="space-y-1">
                           <p className="text-[10px] text-text-dim uppercase tracking-tighter">من: {formatDate(sub.startDate)}</p>
                           <p className="text-[10px] text-white font-bold tracking-tighter italic">إلى: {formatDate(sub.endDate)}</p>
                        </div>
                     </td>
                     <td className="px-8 py-6">
                       {sub.status === 'active' ? (
                          <div className="flex flex-col gap-2 w-32">
                             <div className="flex justify-between items-center text-[10px] font-bold">
                                <span className={cn(sub.remainingDays > 30 ? "text-accent" : "text-amber-400")}>{sub.remainingDays} Days Left</span>
                                <span className="text-white/40">{Math.round((sub.remainingDays/30)*100)}%</span>
                             </div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <div 
                                 className={cn(
                                   "h-full rounded-full transition-all duration-1000",
                                   sub.remainingDays > 30 ? "bg-accent shadow-[0_0_10px_rgba(209,255,0,0.4)]" : "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                                 )} 
                                 style={{ width: `${Math.min(100, (sub.remainingDays/30)*100)}%` }}
                               ></div>
                             </div>
                          </div>
                       ) : (
                         <span className="text-white/20 italic text-xs">Expired Session</span>
                       )}
                     </td>
                     <td className="px-8 py-6 text-left">
                       <div className={cn(
                         "inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg border",
                         sub.status === 'active' ? "text-accent border-accent/20 bg-accent/5" : "text-white/20 border-white/5 bg-white/2"
                       )}>
                         {sub.status === 'active' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                         {sub.status === 'active' ? 'Active' : 'Expired'}
                       </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};
