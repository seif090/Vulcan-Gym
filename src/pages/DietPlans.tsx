import React from 'react';
import { 
  Apple, 
  Plus, 
  Search, 
  Flame, 
  Activity, 
  Clock, 
  User, 
  ChevronRight,
  MoreVertical,
  UtensilsCrossed
} from 'lucide-react';
import { cn } from '../lib/utils';
import { DietPlan } from '../types';

const diets: Partial<DietPlan>[] = [
  { id: 'DP-001', name: 'Elite Bulk Protocol', dailyCalories: 3500, status: 'active', createdAt: '2024-03-01', macros: { protein: 250, carbs: 450, fats: 80 } },
  { id: 'DP-002', name: 'Shred & Prime V3', dailyCalories: 2200, status: 'active', createdAt: '2024-03-10', macros: { protein: 200, carbs: 150, fats: 60 } },
  { id: 'DP-003', name: 'Maintenance Phase', dailyCalories: 2800, status: 'draft', createdAt: '2024-03-15', macros: { protein: 180, carbs: 320, fats: 70 } },
];

export const DietPlans: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Nutrition Terminal</h1>
          <p className="text-text-dim">Architect biometric fuel protocols for optimized performance.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Engine New Protocol
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
         {diets.map((diet) => (
           <div key={diet.id} className="group glass rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden flex flex-col hover:border-accent/30 transition-all border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/15 transition-all"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="h-14 w-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Apple className="h-7 w-7" />
                 </div>
                 <span className={cn(
                   "text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border",
                   diet.status === 'active' ? "text-accent border-accent/20 bg-accent/5" : "text-white/20 border-white/5 bg-white/2"
                 )}>
                   {diet.status}
                 </span>
              </div>

              <h3 className="text-2xl font-black text-white italic mb-2 uppercase group-hover:neon-text transition-all">{diet.name}</h3>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-8">{diet.id}</p>

              <div className="space-y-6 mb-10">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Flame className="h-4 w-4 text-red-500" />
                       <span className="text-xs font-bold text-text-dim uppercase">Energy Output</span>
                    </div>
                    <span className="text-xl font-black text-white italic">{diet.dailyCalories} <span className="text-[10px] font-bold not-italic text-text-dim">KCAL</span></span>
                 </div>

                 <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'PRO', val: diet.macros?.protein, color: 'bg-accent' },
                      { label: 'CHO', val: diet.macros?.carbs, color: 'bg-blue-500' },
                      { label: 'FAT', val: diet.macros?.fats, color: 'bg-amber-500' },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/2 border border-white/5 rounded-xl p-3 text-center group-hover:bg-white/5 transition-all">
                         <p className="text-[8px] font-black text-text-dim uppercase tracking-widest mb-1">{m.label}</p>
                         <p className="text-sm font-black text-white italic">{m.val}g</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-auto flex gap-4">
                 <button className="flex-1 py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-white/5 hover:border-accent/20 transition-all flex items-center justify-center gap-3 group/btn">
                    <UtensilsCrossed className="h-5 w-5 text-accent group-hover/btn:rotate-12 transition-transform" />
                    Expand Digest
                 </button>
                 <button className="p-4 glass rounded-2xl text-text-dim hover:text-white transition-all">
                    <MoreVertical className="h-5 w-5" />
                 </button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};
