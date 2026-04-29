import React from 'react';
import { 
  Wrench, 
  Search, 
  Plus, 
  AlertOctagon, 
  CheckCircle2, 
  Clock, 
  ShieldAlert,
  MoreVertical,
  Activity,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { MaintenanceLog } from '../types';

const logs: MaintenanceLog[] = [
  { id: 'MT-001', equipmentName: 'Treadmill Unit 04', category: 'cardio', lastService: '2024-02-15', nextService: '2024-05-15', status: 'operational', priority: 'medium' },
  { id: 'MT-002', equipmentName: 'Hammer Strength Press', category: 'strength', lastService: '2024-01-10', nextService: '2024-04-10', status: 'under-repair', priority: 'high' },
  { id: 'MT-003', equipmentName: 'HVAC Air Purification', category: 'infrastructure', lastService: '2023-12-01', nextService: '2024-03-01', status: 'needs-service', priority: 'high' },
  { id: 'MT-004', equipmentName: 'Spin Bike Cluster B', category: 'cardio', lastService: '2024-03-05', nextService: '2024-06-05', status: 'operational', priority: 'low' },
];

export const Maintenance: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Hardware Integrity</h1>
          <p className="text-text-dim">Monitor tactical health and service cycles of all facility assets.</p>
        </div>
        <button className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(209,255,0,0.4)] flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Schedule Maintenance
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
         <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <Activity className="absolute -bottom-4 -right-4 h-24 w-24 text-accent/[0.04] -rotate-12 group-hover:text-accent/[0.08] transition-all" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Fleet Operational</p>
            <h3 className="text-4xl font-black text-white italic tracking-tighter">94.2% <span className="text-sm opacity-40">Uptime</span></h3>
         </div>
         <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <ShieldAlert className="absolute -bottom-4 -right-4 h-24 w-24 text-red-500/[0.04] -rotate-12 group-hover:text-red-500/[0.08] transition-all" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Active Repairs</p>
            <h3 className="text-4xl font-black text-red-500 italic tracking-tighter">03 <span className="text-sm opacity-40">Criticals</span></h3>
         </div>
         <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <Zap className="absolute -bottom-4 -right-4 h-24 w-24 text-amber-500/[0.04] -rotate-12 group-hover:text-amber-500/[0.08] transition-all" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Next 30 Days</p>
            <h3 className="text-4xl font-black text-amber-500 italic tracking-tighter">18 <span className="text-sm opacity-40">Sessions</span></h3>
         </div>
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-dim" />
            <input 
              placeholder="Scan Asset ID or Zone..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Hardware Asset</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Classification</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Last Transmission</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Next Cycle</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Health Status</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6">
                    <div>
                       <p className="font-bold text-white text-base group-hover:neon-text transition-colors italic uppercase">{log.equipmentName}</p>
                       <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{log.id}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                       {log.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-white/60 font-bold">{log.lastService}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-3 text-white font-bold italic">
                       <Clock className="h-4 w-4 text-accent/50" />
                       {log.nextService}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border",
                      log.status === 'operational' ? "text-accent border-accent/20 bg-accent/5" :
                      log.status === 'under-repair' ? "text-red-500 border-red-500/20 bg-red-500/5" :
                      "text-amber-400 border-amber-400/20 bg-amber-400/5"
                    )}>
                      <div className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        log.status === 'operational' ? "bg-accent shadow-[0_0_8px_rgba(209,255,0,1)]" :
                        log.status === 'under-repair' ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]" :
                        "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]"
                      )}></div>
                      {log.status.replace('-', ' ')}
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
