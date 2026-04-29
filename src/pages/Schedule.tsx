import React from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Zap, 
  Plus, 
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const scheduleData = [
  { time: '08:00 AM', name: 'Power Yoga', trainer: 'كابتن محمود', room: 'Studio Alpha', intensity: 'Medium', capacity: '12/20' },
  { time: '10:00 AM', name: 'HIIT Protocol', trainer: 'كابتن سارة', room: 'Industrial Zone', intensity: 'Extreme', capacity: '18/20' },
  { time: '04:00 PM', name: 'CrossFit Basics', trainer: 'كابتن ياسين', room: 'Main Arena', intensity: 'High', capacity: '15/25' },
  { time: '06:00 PM', name: 'Zumba Core', trainer: 'كابتن ليلى', room: 'Studio Beta', intensity: 'Low', capacity: '22/30' },
  { time: '08:00 PM', name: 'Boxing Alpha', trainer: 'كابتن محمود', room: 'The Ring', intensity: 'High', capacity: '8/10' },
];

const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const Schedule: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Arena Schedule</h1>
          <p className="text-text-dim">Synchronize group sessions across all tactical zones.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Manifest Session
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
         {days.map((day, i) => (
           <button 
             key={day} 
             className={cn(
               "flex-none px-8 py-4 rounded-2xl border transition-all text-xs font-black uppercase tracking-widest italic",
               i === 2 
                 ? "bg-accent border-accent text-black shadow-[0_0_20px_rgba(209,255,0,0.3)]" 
                 : "bg-white/2 border-white/5 text-text-dim hover:bg-white/5"
             )}
           >
             {day}
           </button>
         ))}
      </div>

      <div className="grid gap-8">
         {scheduleData.map((session, i) => (
           <div key={i} className="group glass rounded-[2.5rem] p-10 shadow-2xl transition-all hover:bg-white/[0.04] hover:border-accent/40 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8 border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-full bg-accent/2 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-all"></div>
              
              <div className="flex flex-col items-center gap-2 min-w-[120px] pb-6 md:pb-0 md:border-l md:border-white/5">
                 <span className="text-2xl font-black text-white italic group-hover:neon-text transition-all">{session.time.split(' ')[0]}</span>
                 <span className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em]">{session.time.split(' ')[1]}</span>
              </div>

              <div className="flex-1 space-y-4">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="text-3xl font-black text-white uppercase italic group-hover:text-accent transition-all">{session.name}</h3>
                    <div className="flex items-center gap-3">
                       <span className={cn(
                         "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border",
                         session.intensity === 'Extreme' ? "text-red-500 border-red-500/20 bg-red-500/10" :
                         session.intensity === 'High' ? "text-amber-500 border-amber-500/20 bg-amber-500/10" :
                         "text-accent border-accent/20 bg-accent/10"
                       )}>
                         {session.intensity} Load
                       </span>
                    </div>
                 </div>
                 
                 <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div className="flex items-center gap-3 text-xs font-bold text-text-dim uppercase tracking-tight italic">
                       <Users className="h-4 w-4 text-accent" />
                       Specialist: {session.trainer}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-text-dim uppercase tracking-tight italic">
                       <MapPin className="h-4 w-4 text-accent" />
                       Zone: {session.room}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-text-dim uppercase tracking-tight italic">
                       <Zap className="h-4 w-4 text-accent" />
                       Units: {session.capacity}
                    </div>
                 </div>
              </div>

              <button className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-accent hover:shadow-[0_0_20px_rgba(209,255,0,0.5)] transition-all">
                 Infiltrate
              </button>
           </div>
         ))}
      </div>
    </div>
  );
};
