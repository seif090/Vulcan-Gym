import React from 'react';
import { 
  Activity, 
  Search, 
  Plus, 
  TrendingUp, 
  Scale, 
  User, 
  ChevronRight, 
  MoreVertical,
  Camera,
  Calendar,
  Zap,
  Dumbbell
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Transformation } from '../types';

const mockTransformations: Partial<Transformation>[] = [
  { id: 'TR-001', memberId: 'MEM-101', date: '2024-03-15', weight: 85.5, bodyFat: 14.2, muscleMass: 42.5, notes: 'Significant vascularity improvement.' },
  { id: 'TR-002', memberId: 'MEM-102', date: '2024-03-10', weight: 92.0, bodyFat: 18.5, muscleMass: 40.0, notes: 'Strength peak reached in squat.' },
  { id: 'TR-003', memberId: 'MEM-103', date: '2024-03-01', weight: 78.2, bodyFat: 12.0, muscleMass: 38.5, notes: 'Hypertrophy phase effective.' },
];

export const Transformations: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Evolution Logs</h1>
          <p className="text-text-dim">Biometric progression and transformation telemetry for the athlete collective.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Log Evolution
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
         {[
           { label: 'Avg Weight Loss', value: '3.2kg', sub: 'Last 30 Days', icon: Scale, color: 'text-accent' },
           { label: 'Muscle Gain', value: '+1.5kg', sub: 'Cohort Delta', icon: Activity, color: 'text-blue-500' },
           { label: 'Fat Drop', value: '-2.4%', sub: 'Prime Phase', icon: TrendingUp, color: 'text-red-500' },
           { label: 'Active Logs', value: '1,240', sub: 'Total Records', icon: Zap, color: 'text-white' },
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
              placeholder="Filter by Athlete ID or Trainer..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Athlete Node</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Weight</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Body Fat</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Muscle Mass</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Log Date</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockTransformations.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                          <User className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="font-bold text-white text-base group-hover:neon-text transition-colors italic uppercase">{log.memberId}</p>
                          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Operational Record</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-3">
                       <Scale className="h-4 w-4 text-accent/50" />
                       <span className="text-xl font-black text-white italic">{log.weight}kg</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-3 text-red-500">
                       <TrendingUp className="h-4 w-4 opacity-40" />
                       <span className="text-xl font-black italic">{log.bodyFat}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-3 text-blue-500">
                       <Dumbbell className="h-4 w-4 opacity-40" />
                       <span className="text-xl font-black italic">{log.muscleMass}kg</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-3 text-text-dim font-bold">
                       <Calendar className="h-4 w-4 text-accent/40" />
                       {log.date}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-4">
                       <button className="p-3 rounded-2xl bg-white/2 hover:bg-white/5 hover:text-accent transition-all">
                         <Camera className="h-5 w-5" />
                       </button>
                       <button className="p-3 rounded-2xl bg-white/2 hover:bg-white/5 hover:text-accent transition-all">
                         <MoreVertical className="h-5 w-5" />
                       </button>
                    </div>
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
