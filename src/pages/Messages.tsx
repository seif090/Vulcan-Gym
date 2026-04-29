import React from 'react';
import { 
  Inbox, 
  Search, 
  Send, 
  Star, 
  Trash2, 
  AlertCircle,
  MoreVertical,
  Plus,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Message } from '../types';

const messages: Message[] = [
  { id: 'MSG-001', sender: 'Operations Node Alpha', subject: 'Equipment Calibration Required', preview: 'Treadmill units 04 and 07 in Giza branch are showing power variance...', timestamp: '14:20', isRead: false, priority: 'high' },
  { id: 'MSG-002', sender: 'Finance Dept', subject: 'Q2 Revenue Forecast Sync', preview: 'Preliminary data for the second quarter shows a 15% increase in VIP memberships...', timestamp: '12:45', isRead: true, priority: 'medium' },
  { id: 'MSG-003', sender: 'Head Trainer', subject: 'New Specialist Onboarding', preview: 'Assigned 3 new elite trainers to Giza Hub starting next Sunday...', timestamp: '09:15', isRead: false, priority: 'medium' },
  { id: 'MSG-004', sender: 'System Manifest', subject: 'Database Optimization Complete', preview: 'Member logs for the past 24 months have been archived for delta efficiency...', timestamp: 'Yesterday', isRead: true, priority: 'low' },
];

export const Messages: React.FC = () => {
  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Encrypted Inbox</h1>
          <p className="text-text-dim">Administrative communication channel for protocol updates.</p>
        </div>
        <button className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(209,255,0,0.4)] flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Broadcast Transmission
        </button>
      </div>

      <div className="flex-1 flex gap-10 overflow-hidden">
        {/* Sidebar Nav */}
        <div className="w-64 flex flex-col gap-8">
           <div className="glass rounded-[2rem] p-6 space-y-4">
              {[
                { icon: Inbox, label: 'Incoming', count: 42, active: true },
                { icon: ShieldCheck, label: 'Verified', count: 3 },
                { icon: Star, label: 'Flagged', count: 0 },
                { icon: Send, label: 'Transmitted', count: 156 },
                { icon: Trash2, label: 'Archives', count: 12 },
              ].map((item, i) => (
                <button 
                  key={i} 
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-xl transition-all group",
                    item.active ? "bg-accent/10 border border-accent/20 text-accent" : "hover:bg-white/5 text-text-dim hover:text-white"
                  )}
                >
                   <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest italic">
                      <item.icon className={cn("h-4 w-4", item.active ? "text-accent" : "text-text-dim group-hover:text-accent transition-colors")} />
                      {item.label}
                   </div>
                   <span className="text-[10px] font-black opacity-40">{item.count}</span>
                </button>
              ))}
           </div>
           
           <div className="glass rounded-[2rem] p-8 border border-white/5 space-y-6">
              <h3 className="text-[10px] font-black text-text-dim uppercase tracking-[0.3em] px-1 italic">Priority Nodes</h3>
              <div className="space-y-4">
                 {['Giza Hub', 'HQ Ops', 'Finance Server'].map((node) => (
                   <div key={node} className="flex items-center gap-3 cursor-pointer group">
                      <div className="h-2 w-2 rounded-full bg-accent group-hover:shadow-[0_0_8px_rgba(209,255,0,0.8)] transition-all"></div>
                      <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">{node}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 glass rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl border border-white/5">
           <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="relative w-96">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-dim" />
                <input 
                  placeholder="Scan communications matrix..." 
                  className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
                />
              </div>
              <div className="flex gap-4">
                 <button className="p-4 rounded-2xl bg-white/2 hover:bg-white/5 hover:text-accent transition-all">
                    <MoreVertical className="h-5 w-5" />
                 </button>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar divide-y divide-white/5">
              {messages.map((msg) => (
                <div key={msg.id} className={cn(
                  "p-8 flex items-start gap-8 cursor-pointer transition-all hover:bg-white/[0.03] group",
                  !msg.isRead && "bg-white/[0.01] border-r-2 border-accent"
                )}>
                   <div className="flex-shrink-0 mt-1">
                      <div className={cn(
                        "h-4 w-4 rounded-md border",
                        msg.priority === 'high' ? "border-red-500/40 bg-red-500/10" : "border-white/10 bg-white/5"
                      )}></div>
                   </div>
                   
                   <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                         <h4 className={cn("text-base font-black italic", !msg.isRead ? "text-white" : "text-text-dim")}>{msg.sender}</h4>
                         <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{msg.timestamp}</span>
                      </div>
                      <p className={cn("text-sm font-bold uppercase tracking-tight", !msg.isRead ? "text-accent" : "text-white/60")}>{msg.subject}</p>
                      <p className="text-xs text-text-dim line-clamp-1 leading-relaxed">{msg.preview}</p>
                   </div>
                   
                   <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-3 rounded-xl bg-white/2 hover:bg-red-500/10 hover:text-red-500 transition-all">
                         <Trash2 className="h-4 w-4" />
                      </button>
                      <ChevronRight className="h-5 w-5 text-accent" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
