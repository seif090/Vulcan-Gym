import React from 'react';
import { 
  Truck, 
  Search, 
  Plus, 
  Mail, 
  Phone, 
  Building2, 
  ExternalLink, 
  MoreVertical,
  ShieldCheck,
  Zap,
  PackageCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Supplier } from '../types';

const suppliers: Supplier[] = [
  { id: 'SUP-01', name: 'Optimum Nutrition Egypt', category: 'supplements', contactPerson: 'Hassan Khalil', email: 'hassan@on-egypt.com', phone: '010-888-222', status: 'active' },
  { id: 'SUP-02', name: 'Technogym Solutions', category: 'equipment', contactPerson: 'Sara Omar', email: 'sara@technogym.eg', phone: '010-555-999', status: 'active' },
  { id: 'SUP-03', name: 'Industrial Apparel Co.', category: 'apparel', contactPerson: 'Youssef Ali', email: 'youssef@ind-apparel.com', phone: '010-222-777', status: 'active' },
  { id: 'SUP-04', name: 'Global Maintenance Matrix', category: 'services', contactPerson: 'Ahmed Zaki', email: 'ahmed@gmm-services.com', phone: '010-444-333', status: 'inactive' },
];

export const Suppliers: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Supply Chain</h1>
          <p className="text-text-dim">Vendor network and external resource nodes.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Enlist Vendor
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
         {[
           { label: 'Active Vendors', value: '12', sub: 'Verified Sources', icon: ShieldCheck, color: 'text-accent' },
           { label: 'Supply Speed', value: '48h', sub: 'Avg Lead Time', icon: Zap, color: 'text-amber-400' },
           { label: 'Open Orders', value: '05', sub: 'Inbound Freight', icon: Truck, color: 'text-white' },
           { label: 'Quality Score', value: '9.8', sub: 'Vendor Rating', icon: PackageCheck, color: 'text-white/40' },
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
              placeholder="Scan Vendor ID or Sector..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Vendor Module</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Classification</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Tactical Liaison</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Contact Channel</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Node Status</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {suppliers.map((s) => (
                <tr key={s.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:border-accent/20 transition-all">
                          <Building2 className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="font-bold text-white text-base group-hover:neon-text transition-colors italic uppercase">{s.name}</p>
                          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{s.id}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest italic">{s.category}</span>
                  </td>
                  <td className="px-8 py-6 text-white font-bold italic">{s.contactPerson}</td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-center gap-2 text-[10px] font-bold text-text-dim">
                          <Mail className="h-3.5 w-3.5" />
                          {s.email}
                       </div>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-text-dim">
                          <Phone className="h-3.5 w-3.5" />
                          {s.phone}
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border",
                      s.status === 'active' ? "text-accent border-accent/20 bg-accent/5" : "text-white/20 border-white/5 bg-white/2"
                    )}>
                      <div className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        s.status === 'active' ? "bg-accent shadow-[0_0_8px_rgba(209,255,0,1)]" : "bg-white/20"
                      )}></div>
                      {s.status}
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
