import React from 'react';
import { 
  Target, 
  Search, 
  Plus, 
  Filter, 
  Phone, 
  MessageSquare, 
  UserPlus, 
  MoreVertical,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Lead } from '../types';

const leads: Lead[] = [
  { id: 'LD-001', name: 'يوسف شريف', phone: '010-123-456', source: 'social', interest: 'personal-training', status: 'new', createdAt: '2024-03-25' },
  { id: 'LD-002', name: 'مريم علي', phone: '010-987-654', source: 'referral', interest: 'group-classes', status: 'trial', createdAt: '2024-03-24' },
  { id: 'LD-003', name: 'كريم حسن', phone: '010-444-555', source: 'walk-in', interest: 'standard-membership', status: 'contacted', createdAt: '2024-03-23' },
  { id: 'LD-004', name: 'دينا سمير', phone: '010-777-888', source: 'social', interest: 'personal-training', status: 'converted', createdAt: '2024-03-20' },
];

export const Leads: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Intelligence Pipeline</h1>
          <p className="text-text-dim">Tracking athlete acquisition and conversion telemetry.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <UserPlus className="h-5 w-5" />
          Acquire Lead
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
         {[
           { label: 'New Nodes', value: '14', sub: 'Last 72 hours', icon: Target, color: 'text-accent' },
           { label: 'Trial active', value: '08', sub: 'Tactical sessions', icon: Zap, color: 'text-amber-400' },
           { label: 'Conv. Rate', value: '18%', sub: '+2% growth', icon: TrendingUp, color: 'text-white' },
           { label: 'Avg Cycle', value: '4.2d', sub: 'Speed to close', icon: Clock, color: 'text-white/40' },
         ].map((stat, i) => (
           <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
             <stat.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12" />
             <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">{stat.label}</p>
             <h3 className={cn("text-3xl font-black italic mb-2 tracking-tighter", stat.color)}>{stat.value}</h3>
             <p className="text-[10px] font-bold text-white/20 uppercase">{stat.sub}</p>
           </div>
         ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
         {['new', 'contacted', 'trial'].map((col) => (
           <div key={col} className="space-y-6">
              <div className="flex items-center justify-between px-4">
                 <h3 className="text-sm font-black text-white uppercase tracking-widest italic">{col} Matrix</h3>
                 <span className="text-[10px] font-bold text-text-dim bg-white/5 px-2 py-0.5 rounded-md">
                    {leads.filter(l => l.status === col).length}
                 </span>
              </div>
              
              <div className="space-y-4">
                 {leads.filter(l => l.status === col).map((lead) => (
                   <div key={lead.id} className="glass p-6 rounded-3xl border border-white/5 hover:border-accent/40 transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-full bg-accent/2 rounded-full blur-2xl pointer-events-none"></div>
                      
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <h4 className="text-lg font-black text-white italic uppercase group-hover:neon-text transition-all">{lead.name}</h4>
                            <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{lead.id}</p>
                         </div>
                         <button className="p-2 rounded-xl bg-white/2 hover:bg-white/5 text-text-dim hover:text-white transition-all">
                            <MoreVertical className="h-4 w-4" />
                         </button>
                      </div>

                      <div className="space-y-3 mb-6">
                         <div className="flex items-center gap-3 text-xs font-bold text-text-dim">
                            <Phone className="h-3.5 w-3.5 text-accent/50" />
                            {lead.phone}
                         </div>
                         <div className="flex items-center gap-3 text-xs font-bold text-text-dim uppercase tracking-tighter">
                            <Target className="h-3.5 w-3.5 text-accent/50" />
                            {lead.interest.replace('-', ' ')}
                         </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                         <span className="text-[9px] font-black text-text-dim uppercase tracking-widest">{lead.source} SOURCE</span>
                         <div className="flex gap-2">
                            <button className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all">
                               <MessageSquare className="h-4 w-4" />
                            </button>
                            <button className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all">
                               <Phone className="h-4 w-4" />
                            </button>
                         </div>
                      </div>
                   </div>
                 ))}
                 
                 <button className="w-full py-4 border-2 border-dashed border-white/5 rounded-3xl text-[10px] font-black text-text-dim uppercase tracking-widest hover:border-accent/20 hover:text-white transition-all">
                    + Add Protocol to Channel
                 </button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};
