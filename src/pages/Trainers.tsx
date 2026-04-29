import React from 'react';
import { UserSquare2, Plus, Star, Award, Mail, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const trainers = [
  { id: 't1', name: 'كابتن محمود', specialty: 'كمال أجسام', rating: 4.8, clients: 45, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 't2', name: 'كابتن ياسمين', specialty: 'يوغا وفيتنس', rating: 4.9, clients: 32, image: 'https://images.unsplash.com/photo-1518611012118-29a7d61689b7?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 't3', name: 'كابتن هاني', specialty: 'كروس فيت', rating: 4.7, clients: 28, image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=200&h=200' },
];

export const Trainers: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 uppercase italic tracking-tight">Elite Trainers</h1>
          <p className="text-text-dim max-w-sm">Manage our world-class trainers and coordinate athlete programming.</p>
        </div>
        <button className="flex items-center gap-3 rounded-2xl bg-accent px-8 py-3.5 text-sm font-extrabold text-black hover:scale-105 active:scale-95 transition-all neon-glow uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Assign New Elite
        </button>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="group glass rounded-[2.5rem] overflow-hidden transition-all hover:-translate-y-2 hover:border-accent/40 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-all"></div>
            
            <div className="h-40 bg-gradient-to-br from-accent/20 to-transparent relative overflow-hidden">
               <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]"></div>
               <div className="absolute -bottom-12 right-8 h-28 w-28 rounded-3xl border-4 border-bg overflow-hidden shadow-2xl transition-all group-hover:scale-110 group-hover:-rotate-3 group-hover:border-accent/40">
                  <img src={trainer.image} alt={trainer.name} className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
               </div>
               <div className="absolute top-6 left-8">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                    Level 04 Specialist
                  </span>
               </div>
            </div>
            
            <div className="p-8 pt-16 space-y-8">
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:neon-text transition-all italic uppercase">{trainer.name}</h3>
                <p className="text-xs font-bold text-accent uppercase tracking-widest">{trainer.specialty}</p>
              </div>
              
              <div className="flex gap-6 border-y border-white/5 py-6">
                <div className="flex-1 text-center">
                  <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest mb-1 italic">Rating</p>
                  <p className="flex items-center justify-center gap-1.5 font-extrabold text-white text-lg">
                    {trainer.rating}
                    <Star className="h-4 w-4 fill-accent text-accent shadow-[0_0_8px_rgba(209,255,0,0.5)]" />
                  </p>
                </div>
                <div className="flex-1 text-center border-x border-white/5">
                  <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest mb-1 italic">Athletes</p>
                  <p className="font-extrabold text-white text-lg">{trainer.clients}</p>
                </div>
                <div className="flex-1 text-center">
                   <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest mb-1 italic">Status</p>
                   <Award className="h-6 w-6 mx-auto text-accent animate-pulse" />
                </div>
              </div>
              
              <div className="flex gap-4">
                 <button className="flex-1 flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] py-4 text-[10px] font-extrabold text-white uppercase tracking-[0.2em] hover:bg-white/5 hover:border-accent/20 transition-all group/btn">
                   <Mail className="h-4 w-4 text-text-dim group-hover/btn:text-accent" />
                   Secure Mail
                 </button>
                 <button className="flex-1 flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] py-4 text-[10px] font-extrabold text-white uppercase tracking-[0.2em] hover:bg-white/5 hover:border-accent/20 transition-all group/btn">
                   <Phone className="h-4 w-4 text-text-dim group-hover/btn:text-accent" />
                   Priority Call
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
