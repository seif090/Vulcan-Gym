import React from 'react';
import { 
  Megaphone, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  Plus, 
  Calendar,
  MoreHorizontal,
  Mail,
  Smartphone
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Campaign } from '../types';

const campaigns: Campaign[] = [
  { id: 'CAMP-01', name: 'Summer Shred Blitz', type: 'discount', status: 'active', reach: 12450, conversion: 3.2, startDate: '2024-05-01', endDate: '2024-08-31' },
  { id: 'CAMP-02', name: 'Identity Re-engagement', type: 're-engagement', status: 'scheduled', reach: 5000, conversion: 0, startDate: '2024-06-15', endDate: '2024-07-01' },
  { id: 'CAMP-03', name: 'Founder VIP Offer', type: 'special-offer', status: 'expired', reach: 8900, conversion: 5.8, startDate: '2024-01-01', endDate: '2024-03-31' },
];

export const Campaigns: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Marketing Matrix</h1>
          <p className="text-text-dim">Deploy growth protocols and monitor conversion telemetry.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Deploy Campaign
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
         <div className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
            <Target className="absolute -bottom-4 -right-4 h-24 w-24 text-accent/[0.02] -rotate-12" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Total Reach</p>
            <h3 className="text-4xl font-black text-white italic tracking-tighter">26,350 <span className="text-sm opacity-40">Athletes</span></h3>
         </div>
         <div className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
            <TrendingUp className="absolute -bottom-4 -right-4 h-24 w-24 text-accent/[0.02] -rotate-12" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Avg. Conversion</p>
            <h3 className="text-4xl font-black text-accent italic tracking-tighter">4.5% <span className="text-sm opacity-40">Rate</span></h3>
         </div>
         <div className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
            <Megaphone className="absolute -bottom-4 -right-4 h-24 w-24 text-accent/[0.02] -rotate-12" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Active Protocols</p>
            <h3 className="text-4xl font-black text-white italic tracking-tighter">02 <span className="text-sm opacity-40">Live</span></h3>
         </div>
      </div>

      <div className="grid gap-10">
         {campaigns.map((camp) => (
           <div key={camp.id} className="group glass rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/5 hover:border-accent/40 transition-all">
              <div className="absolute top-0 right-0 w-64 h-full bg-accent/2 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-all"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 relative z-10">
                 <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] italic">{camp.type.replace('-', ' ')}</span>
                       <div className={cn(
                         "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                         camp.status === 'active' ? "text-accent border-accent/20 bg-accent/10" :
                         camp.status === 'scheduled' ? "text-amber-400 border-amber-400/20 bg-amber-400/10" :
                         "text-text-dim border-white/5 bg-white/2"
                       )}>
                         {camp.status}
                       </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white uppercase italic group-hover:neon-text transition-all">{camp.name}</h3>
                    
                    <div className="flex flex-wrap gap-x-10 gap-y-4">
                       <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-accent/50" />
                          <span className="text-xs font-bold text-text-dim uppercase tracking-tighter italic">Timeline: {camp.startDate} // {camp.endDate}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Zap className="h-4 w-4 text-accent" />
                          <span className="text-xs font-bold text-white uppercase tracking-tighter italic">Total Yield: {(camp.reach * (camp.conversion/100)).toFixed(0)} Conversions</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-8 lg:border-l lg:border-white/5 lg:pl-10">
                    <div className="text-center space-y-1">
                       <p className="text-[10px] font-black text-text-dim uppercase tracking-widest">Reach</p>
                       <p className="text-2xl font-black text-white italic">{camp.reach.toLocaleString()}</p>
                    </div>
                    <div className="text-center space-y-1">
                       <p className="text-[10px] font-black text-text-dim uppercase tracking-widest">Conversion</p>
                       <p className="text-2xl font-black text-accent italic">{camp.conversion}%</p>
                    </div>
                    <div className="flex items-center">
                       <button className="p-4 rounded-2xl bg-white text-black hover:bg-accent transition-all group/btn">
                          <MoreHorizontal className="h-6 w-6 group-hover/btn:scale-110 transition-transform" />
                       </button>
                    </div>
                 </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex gap-6">
                 <div className="flex items-center gap-3 text-[10px] font-bold text-text-dim uppercase tracking-widest bg-white/2 px-4 py-2 rounded-xl">
                    <Mail className="h-3.5 w-3.5" />
                    Email Protocol
                 </div>
                 <div className="flex items-center gap-3 text-[10px] font-bold text-text-dim uppercase tracking-widest bg-white/2 px-4 py-2 rounded-xl">
                    <Smartphone className="h-3.5 w-3.5" />
                    SMS Transmission
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};
