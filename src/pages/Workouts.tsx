import React from 'react';
import { 
  Zap, 
  Dumbbell, 
  Plus, 
  Search, 
  Clock, 
  User, 
  CheckCircle2, 
  PlayCircle,
  MoreVertical
} from 'lucide-react';
import { cn } from '../lib/utils';
import { SocialShare } from '../components/ui/SocialShare';

const workouts = [
  { 
    id: 'WP-001', 
    name: 'Hypertrophy Phase A', 
    member: 'أحمد السعدني', 
    trainer: 'كابتن محمود', 
    intensity: 'High', 
    exercises: 8, 
    status: 'Active',
    lastSession: '2 hours ago'
  },
  { 
    id: 'WP-002', 
    name: 'Fat Loss Protocol', 
    member: 'سارة محمود', 
    trainer: 'كابتن سارة', 
    intensity: 'Medium', 
    exercises: 12, 
    status: 'Active',
    lastSession: 'Yesterday'
  },
  { 
    id: 'WP-003', 
    name: 'Strength Foundation', 
    member: 'كريم عبد العزيز', 
    trainer: 'كابتن محمود', 
    intensity: 'Extreme', 
    exercises: 5, 
    status: 'Draft',
    lastSession: 'Never'
  },
];

export const Workouts: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Protocol Matrix</h1>
          <p className="text-text-dim">Deploy athlete programming and track mechanical overload.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Create New Protocol
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {workouts.map((workout) => (
          <div key={workout.id} className="group glass rounded-[2.5rem] p-10 shadow-2xl transition-all hover:-translate-y-2 hover:border-accent/40 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/15 transition-all"></div>
            
            <div className="flex items-center justify-between mb-10">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(209,255,0,0.2)]">
                <Dumbbell className="h-7 w-7" />
              </div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border",
                workout.status === 'Active' ? "text-accent border-accent/20 bg-accent/10" : "text-white/20 border-white/5 bg-white/2"
              )}>
                {workout.status}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white italic mb-2 group-hover:neon-text transition-all uppercase">{workout.name}</h3>
            <div className="flex items-center gap-3 mb-8">
               <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(209,255,0,0.8)]"></div>
               <p className="text-xs font-bold text-text-dim uppercase tracking-tighter">Assigned: {workout.member}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/5 py-8">
               <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest italic">Intensity</p>
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                     <Zap className="h-4 w-4 text-accent" />
                     {workout.intensity}
                  </p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest italic">Exercises</p>
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                     <CheckCircle2 className="h-4 w-4 text-white/40" />
                     {workout.exercises} Units
                  </p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest italic">Specialist</p>
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                     <User className="h-4 w-4 text-white/40" />
                     {workout.trainer}
                  </p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest italic">Telemetry</p>
                  <p className="text-xs font-bold text-text-dim flex items-center gap-2">
                     <Clock className="h-4 w-4 opacity-50" />
                     {workout.lastSession}
                  </p>
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
               <span className="text-[10px] font-black text-text-dim uppercase tracking-widest italic">Share Protocol</span>
               <SocialShare 
                 url={`${window.location.origin}/workouts/${workout.id}`} 
                 title={`Check out the ${workout.name} workout plan at Vulcan Gym!`} 
               />
            </div>

            <div className="mt-8 flex gap-4">
               <button className="flex-1 py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-white/5 hover:border-accent/20 transition-all flex items-center justify-center gap-3">
                  <PlayCircle className="h-5 w-5 text-accent" />
                  View Regimen
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
