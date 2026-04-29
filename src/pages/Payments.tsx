import React from 'react';
import { 
  DollarSign, 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard,
  Calendar,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';
import { formatDate } from '../lib/utils';

const payments = [
  { id: 'TX-9021', member: 'أحمد السعدني', amount: 1500, date: '2024-03-15', method: 'card', status: 'paid', plan: 'الباقة الذهبية' },
  { id: 'TX-9022', member: 'سارة محمود', amount: 3000, date: '2024-03-14', method: 'cash', status: 'paid', plan: 'باقة الـ VIP' },
  { id: 'TX-9023', member: 'كريم عبد العزيز', amount: 1200, date: '2024-03-14', method: 'online', status: 'pending', plan: 'باقة المبتدئين' },
  { id: 'TX-9024', member: 'ياسين ابراهيم', amount: 1500, date: '2024-03-13', method: 'card', status: 'paid', plan: 'الباقة الذهبية' },
  { id: 'TX-9025', member: 'ليلى أحمد', amount: 800, date: '2024-03-12', method: 'cash', status: 'failed', plan: 'تجديد شهري' },
];

export const Payments: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Financial Terminal</h1>
          <p className="text-text-dim">Ledger of all active transactions and revenue nodes.</p>
        </div>
        <div className="flex gap-4">
          <button className="glass flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/5 transition-all">
            <Download className="h-5 w-5 text-accent" />
            Export CSV
          </button>
          <button className="bg-accent text-black px-8 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-all neon-glow flex items-center gap-3">
            <CreditCard className="h-5 w-5" />
            New Transaction
          </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        {[
          { label: 'Total Volume', value: '45,200', sub: '+12% from last week', icon: ArrowUpRight, color: 'text-accent' },
          { label: 'Net Revenue', value: '38,900', sub: 'After overhead', icon: DollarSign, color: 'text-white' },
          { label: 'Pending Clear', value: '2,400', sub: '3 transactions', icon: Calendar, color: 'text-amber-400' },
          { label: 'Failed Rate', value: '0.8%', sub: '-2% improved', icon: ArrowDownLeft, color: 'text-red-400' },
        ].map((stat, i) => (
          <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full blur-2xl group-hover:bg-white/5 transition-all"></div>
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">{stat.label}</p>
            <h3 className={cn("text-3xl font-black italic mb-2 tracking-tighter", stat.color)}>{stat.value}</h3>
            <p className="text-[10px] font-bold text-white/40">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-dim" />
            <input 
              placeholder="Search via Transaction ID or Identity..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-text-dim uppercase tracking-widest hover:text-white transition-all">
                <Filter className="h-4 w-4" />
                Filter Matrix
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Transaction ID</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Identity Name</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Quantum Amount</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Protocol</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Temporal Status</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {payments.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6 font-mono text-[10px] text-white/50">{tx.id}</td>
                  <td className="px-8 py-6 font-bold text-white text-base group-hover:text-accent transition-colors">{tx.member}</td>
                  <td className="px-8 py-6">
                    <span className="text-lg font-black text-white italic">{tx.amount} <span className="text-[10px] text-text-dim font-bold not-italic">EGP</span></span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-text-dim uppercase tracking-widest">
                       <CreditCard className="h-4 w-4 text-accent/50" />
                       {tx.method}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest",
                      tx.status === 'paid' ? "text-accent bg-accent/10 border border-accent/20" : 
                      tx.status === 'pending' ? "text-amber-400 bg-amber-400/10 border border-amber-400/20" : 
                      "text-red-500 bg-red-500/10 border border-red-500/20"
                    )}>
                      <div className={cn("h-1.5 w-1.5 rounded-full", 
                        tx.status === 'paid' ? "bg-accent shadow-[0_0_8px_rgba(209,255,0,1)]" : 
                        tx.status === 'pending' ? "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]" : 
                        "bg-red-50"
                      )}></div>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="p-2 rounded-xl bg-white/2 hover:bg-white/5 hover:text-accent transition-all">
                      <MoreHorizontal className="h-5 w-5" />
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
