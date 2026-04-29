import React from 'react';
import { 
  Receipt, 
  Search, 
  Plus, 
  DollarSign, 
  ArrowDownCircle, 
  Calendar, 
  Tag, 
  MoreVertical,
  Filter,
  TrendingDown,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Expense } from '../types';

const expenses: Expense[] = [
  { id: 'EXP-101', category: 'rent', amount: 45000, date: '2024-03-01', status: 'paid', description: 'Giza Hub Monthly Lease' },
  { id: 'EXP-102', category: 'utilities', amount: 8200, date: '2024-03-05', status: 'paid', description: 'Electricity & Water (Matrix Zone)' },
  { id: 'EXP-103', category: 'marketing', amount: 15000, date: '2024-03-10', status: 'pending', description: 'Summer Shred Facebook Ads' },
  { id: 'EXP-104', category: 'maintenance', amount: 3500, date: '2024-03-12', status: 'paid', description: 'Treadmill Belt Replacement' },
];

export const Expenses: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Capital Outflow</h1>
          <p className="text-text-dim">Tracking operational burn rates and fiscal expenditures.</p>
        </div>
        <button className="bg-red-500 text-white px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Authorize Expense
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
         {[
           { label: 'Total Burn', value: '71,700', sub: 'EGP This Month', icon: TrendingDown, color: 'text-red-500' },
           { label: 'Fixed Costs', value: '45,000', sub: 'Rent & Lease', icon: DollarSign, color: 'text-white' },
           { label: 'Pending Payout', value: '15,000', sub: 'Awaiting Settlement', icon: Clock, color: 'text-amber-400' },
           { label: 'Operational', value: '11,700', sub: 'Maintenance & Utils', icon: Receipt, color: 'text-white/40' },
         ].map((stat, i) => (
           <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
             <stat.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12" />
             <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">{stat.label}</p>
             <h3 className={cn("text-3xl font-black italic mb-2 tracking-tighter", stat.color)}>{stat.value}</h3>
             <p className="text-[10px] font-bold text-white/20 uppercase">{stat.sub}</p>
           </div>
         ))}
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-dim" />
            <input 
              placeholder="Search via Transaction ID or Category..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
          <div className="flex gap-4">
             <button className="p-4 rounded-xl bg-white/2 border border-white/5 text-text-dim hover:text-white transition-all"><Filter className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Description</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Classification</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Cycle Date</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Payload Amount</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Settlement</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {expenses.map((exp) => (
                <tr key={exp.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6">
                    <div>
                       <p className="font-bold text-white text-base group-hover:neon-text transition-colors italic uppercase">{exp.description}</p>
                       <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{exp.id}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-black text-text-dim uppercase tracking-[0.3em] bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                       {exp.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-white/60 font-bold">{exp.date}</td>
                  <td className="px-8 py-6">
                    <span className="text-xl font-black text-white italic">{exp.amount.toLocaleString()} <span className="text-[10px] font-bold not-italic opacity-40">EGP</span></span>
                  </td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border",
                      exp.status === 'paid' ? "text-accent border-accent/20 bg-accent/5" : "text-amber-400 border-amber-400/20 bg-amber-400/5"
                    )}>
                      <div className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        exp.status === 'paid' ? "bg-accent shadow-[0_0_8px_rgba(209,255,0,1)]" : "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]"
                      )}></div>
                      {exp.status}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <button className="p-3 rounded-2xl bg-white/2 hover:bg-white/5 hover:text-accent transition-all">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
