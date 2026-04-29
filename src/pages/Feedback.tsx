import React from 'react';
import { 
  MessageSquare, 
  Star, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  User
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Feedback } from '../types';

const feedbackItems: Feedback[] = [
  { id: 'FB-001', memberName: 'كريم محمود', rating: 5, category: 'trainer', comment: 'Excellent sessions with Cap Mahmoud. Really pushing the limits of the hypertrophy protocol!', date: '2024-03-20', status: 'reviewed' },
  { id: 'FB-002', memberName: 'سارة خالد', rating: 2, category: 'facility', comment: 'A/C unit in the industrial zone is fluctuating during peak hours. Needs calibration.', date: '2024-03-19', status: 'pending' },
  { id: 'FB-003', memberName: 'أحمد السعدني', rating: 4, category: 'app', comment: 'Workout tracking is fluid, but could use more biometric integration in the dashboard.', date: '2024-03-18', status: 'resolved' },
  { id: 'FB-004', memberName: 'ياسين ابراهيم', rating: 5, category: 'staff', comment: 'Front desk operations are elite. Very welcoming environment.', date: '2024-03-15', status: 'reviewed' },
];

export const FeedbackPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Satisfaction Matrix</h1>
          <p className="text-text-dim">Monitor member feedback and cross-reference satisfaction metrics.</p>
        </div>
        <div className="flex gap-4">
           <button className="glass flex items-center gap-3 px-6 py-4 rounded-2xl text-xs font-black text-white hover:bg-white/5 transition-all uppercase tracking-widest border border-white/5">
              <Filter className="h-5 w-5 text-accent" />
              Categorize
           </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
         {[
           { label: 'Avg Sentiment', value: '4.8', sub: 'Elite Rating', icon: Star, color: 'text-accent' },
           { label: 'Pending Pulse', value: '12', sub: 'Awaiting Action', icon: AlertCircle, color: 'text-amber-400' },
           { label: 'Resolved Delta', value: '156', sub: 'All-time Fixes', icon: CheckCircle2, color: 'text-white' },
           { label: 'NPS Score', value: '92', sub: 'Promoter Peak', icon: ThumbsUp, color: 'text-white/40' },
         ].map((stat, i) => (
           <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
             <stat.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12" />
             <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">{stat.label}</p>
             <h3 className={cn("text-3xl font-black italic mb-2 tracking-tighter", stat.color)}>{stat.value}</h3>
             <p className="text-[10px] font-bold text-white/20 uppercase">{stat.sub}</p>
           </div>
         ))}
      </div>

      <div className="grid gap-10">
         {feedbackItems.map((item) => (
           <div key={item.id} className="group glass rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/5 hover:border-accent/40 transition-all">
              <div className="flex flex-col lg:flex-row gap-8">
                 <div className="flex-shrink-0 flex flex-col items-center gap-4 text-center border-b lg:border-b-0 lg:border-l border-white/5 lg:pl-10 order-2 lg:order-1">
                    <div className="h-20 w-20 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:border-accent/20 transition-all">
                       <User className="h-10 w-10" />
                    </div>
                    <div>
                       <p className="font-black text-white italic uppercase tracking-tighter text-lg">{item.memberName}</p>
                       <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{item.date}</p>
                    </div>
                 </div>

                 <div className="flex-1 space-y-6 order-1 lg:order-2">
                    <div className="flex items-center justify-between">
                       <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-5 w-5", 
                                i < item.rating ? "text-accent fill-accent" : "text-white/10"
                              )} 
                            />
                          ))}
                       </div>
                       <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] italic bg-accent/5 px-4 py-1.5 rounded-full border border-accent/20">
                         {item.category}
                       </span>
                    </div>

                    <p className="text-xl font-bold text-white leading-relaxed italic">
                       "{item.comment}"
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                       <div className={cn(
                         "flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em]",
                         item.status === 'resolved' ? "text-accent" : item.status === 'reviewed' ? "text-white/60" : "text-amber-400"
                       )}>
                          <Clock className="h-4 w-4" />
                          Protocol Status: {item.status}
                       </div>
                       <div className="flex gap-4">
                          <button className="px-6 py-3 rounded-xl bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-accent transition-all">
                             Mark Resolved
                          </button>
                          <button className="p-3 rounded-xl bg-white/2 hover:bg-white/5 text-text-dim transition-all">
                             <MoreVertical className="h-5 w-5" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};
