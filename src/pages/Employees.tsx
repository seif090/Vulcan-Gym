import React from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  Mail, 
  Phone, 
  Building2, 
  MoreVertical,
  Shield,
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Employee } from '../types';

const staff: Employee[] = [
  { id: 'ST-101', name: 'ليلى حاتم', role: 'Front Desk Manager', email: 'layla@vulcan.com', phone: '010-888-777', branch: 'Giza Hub', status: 'active', joinDate: '2023-01-15' },
  { id: 'ST-102', name: 'ياسين محمود', role: 'Security Supervisor', email: 'yassin@vulcan.com', phone: '010-555-444', branch: 'New Cairo', status: 'active', joinDate: '2023-03-20' },
  { id: 'ST-103', name: 'سارة خالد', role: 'Guest Relations', email: 'sara@vulcan.com', phone: '010-999-333', branch: 'Alexandria', status: 'on-leave', joinDate: '2022-11-05' },
  { id: 'ST-104', name: 'عمر علي', role: 'Maintenance Feed', email: 'omar@vulcan.com', phone: '010-222-111', branch: 'Giza Hub', status: 'active', joinDate: '2023-06-12' },
];

export const Employees: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Staff Directorate</h1>
          <p className="text-text-dim">Administrative node for non-trainer personnel and operational units.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Enlist Personnel
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
         {[
           { label: 'Active Staff', value: '24', sub: 'Tactical Units', icon: Users, color: 'text-accent' },
           { label: 'Leave Status', value: '3', sub: 'Temporary Absence', icon: ExternalLink, color: 'text-amber-400' },
           { label: 'Access Tokens', value: '48', sub: 'Secure Clearances', icon: Shield, color: 'text-white' },
           { label: 'Head Count', value: '18', sub: 'Non-Combatants', icon: Briefcase, color: 'text-white/40' },
         ].map((stat, i) => (
           <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
             <stat.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12" />
             <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">{stat.label}</p>
             <h3 className={cn("text-3xl font-black italic mb-2 tracking-tighter", stat.color)}>{stat.value}</h3>
             <p className="text-[10px] font-bold text-white/20 uppercase">{stat.sub}</p>
           </div>
         ))}
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-dim" />
            <input 
              placeholder="Search via Personnel ID or Role..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Personnel</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Classification</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Sector</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Contact Protocol</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Status</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {staff.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:border-accent/20 transition-all">
                          <Users className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="font-bold text-white text-base group-hover:neon-text transition-colors italic uppercase">{p.name}</p>
                          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{p.id}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest italic">{p.role}</span>
                  </td>
                  <td className="px-8 py-6 flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-accent/40" />
                    <span className="text-xs font-bold text-white/80">{p.branch}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-center gap-2 text-[10px] font-bold text-text-dim">
                          <Mail className="h-3 w-3" />
                          {p.email}
                       </div>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-text-dim">
                          <Phone className="h-3 w-3" />
                          {p.phone}
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border",
                      p.status === 'active' ? "text-accent border-accent/20 bg-accent/5" :
                      p.status === 'on-leave' ? "text-amber-400 border-amber-400/20 bg-amber-400/5" :
                      "text-red-500 border-red-500/20 bg-red-500/5"
                    )}>
                      <div className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        p.status === 'active' ? "bg-accent shadow-[0_0_8px_rgba(209,255,0,1)]" :
                        p.status === 'on-leave' ? "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]" :
                        "bg-red-500"
                      )}></div>
                      {p.status}
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
