import React from 'react';
import { 
  Trophy, 
  Target, 
  Users, 
  Calendar, 
  Plus, 
  ChevronRight, 
  Timer,
  Medal,
  Flag,
  Flame
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Challenge } from '../types';

const mockChallenges: Challenge[] = [
  { id: 'CH-001', title: 'Eid Shred 30-Day Blitz', description: 'Zero sugar, high intensity. The ultimate body fat reduction protocol.', startDate: '2024-04-01', endDate: '2024-05-01', participants: 156, status: 'active', prize: '1 Year VIP Membership' },
  { id: 'CH-002', title: 'Summer Powerlifting Open', description: 'Max out your squat, bench, and deadlift. Combined total determines the peak athlete.', startDate: '2024-06-15', endDate: '2024-06-16', participants: 48, status: 'upcoming', prize: 'Egyptian Pound 10,000 Cash' },
  { id: 'CH-003', title: 'Cereal Box Transformation', description: 'Beginner friendly muscle building phase.', startDate: '2024-01-01', endDate: '2024-02-01', participants: 320, status: 'completed', prize: '50% off Supplements' },
];

export const Challenges: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Arena Protocols</h1>
          <p className="text-text-dim">Competitive gamification matrices to push member performance boundaries.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Deploy Challenge
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
         <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <Medal className="absolute -bottom-4 -right-4 h-24 w-24 text-accent/[0.04] -rotate-12 group-hover:text-accent/[0.1] transition-all" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Total Participants</p>
            <h3 className="text-4xl font-black text-white italic tracking-tighter">524 <span className="text-sm opacity-40">Athletes</span></h3>
         </div>
         <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <Flame className="absolute -bottom-4 -right-4 h-24 w-24 text-red-500/[0.04] -rotate-12 group-hover:text-red-500/[0.1] transition-all" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Active Arena</p>
            <h3 className="text-4xl font-black text-white italic tracking-tighter">01 <span className="text-sm opacity-40">Protocol</span></h3>
         </div>
         <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <Trophy className="absolute -bottom-4 -right-4 h-24 w-24 text-amber-500/[0.04] -rotate-12 group-hover:text-amber-500/[0.1] transition-all" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Total Prize Pool</p>
            <h3 className="text-4xl font-black text-amber-400 italic tracking-tighter">25,000 <span className="text-sm opacity-40">EGP</span></h3>
         </div>
      </div>

      <div className="grid gap-10">
         {mockChallenges.map((challenge) => (
           <div key={challenge.id} className="group glass rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/5 hover:border-accent/40 transition-all">
              <div className="absolute top-0 right-0 w-64 h-full bg-accent/2 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/5 transition-all"></div>
              
              <div className="flex flex-col lg:flex-row gap-10">
                 <div className="lg:w-1/3 space-y-6">
                    <div className="flex items-center justify-between">
                       <span className={cn(
                         "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                         challenge.status === 'active' ? "text-accent border-accent/20 bg-accent/5" :
                         challenge.status === 'upcoming' ? "text-amber-400 border-amber-400/20 bg-amber-400/5" :
                         "text-white/20 border-white/5 bg-white/2"
                       )}>
                         {challenge.status}
                       </span>
                       <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{challenge.id}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white uppercase italic group-hover:neon-text transition-all leading-tight">{challenge.title}</h3>
                    <p className="text-sm text-text-dim leading-relaxed">{challenge.description}</p>
                 </div>

                 <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:border-l lg:border-white/5 lg:pl-10">
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 text-[10px] font-black text-text-dim uppercase tracking-widest">
                          <Users className="h-3 w-3 text-accent" />
                          Participation
                       </div>
                       <p className="text-xl font-black text-white italic">{challenge.participants} <span className="text-[10px] opacity-40 font-bold not-italic">Nodes</span></p>
                    </div>

                    <div className="space-y-2">
                       <div className="flex items-center gap-2 text-[10px] font-black text-text-dim uppercase tracking-widest">
                          <Calendar className="h-3 w-3 text-accent" />
                          Timeline
                       </div>
                       <p className="text-xs font-bold text-white uppercase">{challenge.startDate}</p>
                       <p className="text-[10px] font-bold text-white/20 uppercase">End: {challenge.endDate}</p>
                    </div>

                    <div className="space-y-2 col-span-2">
                       <div className="flex items-center gap-2 text-[10px] font-black text-text-dim uppercase tracking-widest">
                          <Medal className="h-3 w-3 text-accent" />
                          Apex Reward
                       </div>
                       <p className="text-xl font-black text-amber-400 italic">{challenge.prize}</p>
                    </div>
                 </div>

                 <div className="flex items-center lg:pl-10">
                    <button className={cn(
                      "w-full lg:w-auto px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 group/btn",
                      challenge.status === 'active' ? "bg-accent text-black neon-glow hover:scale-105" : "bg-white/5 text-white/40 cursor-not-allowed"
                    )}>
                       {challenge.status === 'active' ? (
                         <>
                           Engage Protocol
                           <ChevronRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                         </>
                       ) : (
                         'Locked'
                       )}
                    </button>
                 </div>
              </div>

              {challenge.status === 'active' && (
                <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between">
                   <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-white/10 flex items-center justify-center text-[10px] font-black text-white italic">
                           UA
                        </div>
                      ))}
                      <div className="h-10 w-10 rounded-full border-2 border-black bg-accent text-black flex items-center justify-center text-[10px] font-black italic">
                         +150
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <Timer className="h-4 w-4 text-red-500 animate-pulse" />
                      <span className="text-[10px] font-black text-red-500 uppercase tracking-widest italic">14 Days Remaining Until Lockdown</span>
                   </div>
                </div>
              )}
           </div>
         ))}
      </div>
    </div>
  );
};
