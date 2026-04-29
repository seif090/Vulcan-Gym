import React from 'react';
import { 
  Scan, 
  Search, 
  LogIn, 
  LogOut, 
  Clock, 
  UserCircle 
} from 'lucide-react';
import { cn, formatDate } from '../lib/utils';

const attendanceHistory = [
  { id: '1', memberName: 'أحمد محمد علي', time: '10:15 ص', type: 'in', branch: 'فرع المعادي' },
  { id: '2', memberName: 'سارة محمود', time: '10:45 ص', type: 'in', branch: 'فرع المعادي' },
  { id: '3', memberName: 'محمود حسن', time: '11:20 ص', type: 'out', branch: 'فرع التجمع' },
  { id: '4', memberName: 'ليلى إبراهيم', time: '12:05 م', type: 'in', branch: 'فرع المعادي' },
  { id: '5', memberName: 'ياسين حسن', time: '12:30 م', type: 'out', branch: 'فرع أكتوبر' },
];

export const Attendance: React.FC = () => {
  const [memberId, setMemberId] = React.useState('');
  const [showStatus, setShowStatus] = React.useState<'success' | 'error' | null>(null);

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (memberId) {
      setShowStatus('success');
      setTimeout(() => setShowStatus(null), 3000);
      setMemberId('');
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-white tracking-tight uppercase italic neon-text">Attendance Portal</h1>
        <p className="text-text-dim max-w-md mx-auto">Scan Terminal QR or enter secure Identity ID to log session access.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="glass rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col items-center gap-8 relative z-10">
              <div className="relative group cursor-pointer">
                 <div className="h-64 w-64 rounded-[2rem] bg-white/[0.02] border-2 border-dashed border-accent/20 flex items-center justify-center transition-all group-hover:border-accent/40 group-hover:bg-white/[0.04]">
                    <Scan className="h-24 w-24 text-accent opacity-20 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Scanning Animation */}
                    <div className="absolute inset-4 border border-accent/30 rounded-[1.5rem] overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 bg-accent/60 shadow-[0_0_15px_rgba(209,255,0,0.8)] animate-scan-line"></div>
                    </div>
                    <div className="absolute inset-0 border-2 border-accent/10 rounded-[2rem] animate-pulse"></div>
                 </div>
                 <div className="absolute -top-4 -right-4 rounded-2xl bg-accent p-4 text-black shadow-xl neon-glow animate-bounce-slow">
                    <Scan className="h-6 w-6" />
                 </div>
              </div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] animate-pulse">Waiting for biometric pulse...</p>
            </div>
            
            <div className="mt-12 border-t border-white/5 pt-10">
              <form onSubmit={handleCheckIn} className="space-y-6">
                <div>
                  <label className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest mb-3 block px-1 italic">Manual Identity Entry</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      placeholder="IDENTITY-XXXXX"
                      className="flex-1 rounded-2xl border border-white/5 bg-white/2 px-6 py-4 text-sm font-medium text-white focus:border-accent/40 focus:outline-none transition-all placeholder:text-white/20"
                    />
                    <button type="submit" className="rounded-2xl bg-accent px-8 font-extrabold text-black transition-all hover:scale-105 active:scale-95 neon-glow text-xs uppercase tracking-widest">
                      Enter
                    </button>
                  </div>
                </div>
              </form>

              {showStatus === 'success' && (
                <div className="mt-6 rounded-2xl bg-accent/10 p-5 text-accent border border-accent/20 flex items-center gap-4 animate-in fade-in zoom-in-95 backdrop-blur-md">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-black shadow-lg">
                    <LogIn className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-sm uppercase tracking-tight">Access Granted</p>
                    <p className="text-[10px] font-bold opacity-70 italic tracking-wide">Session established. Welcome back, Athlete.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="glass rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/5 flex flex-col">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
            <h3 className="font-bold text-white flex items-center gap-4 text-lg">
              <Clock className="h-6 w-6 text-accent" />
              Terminal Access Logs
            </h3>
            <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">{formatDate(new Date())}</span>
          </div>
          <div className="divide-y divide-white/5 max-h-[550px] overflow-y-auto custom-scrollbar">
             {attendanceHistory.map((item) => (
               <div key={item.id} className="p-6 flex items-center justify-between hover:bg-white/[0.03] transition-all group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-text-dim group-hover:text-accent group-hover:border-accent/20 transition-all">
                      <UserCircle className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-white group-hover:neon-text transition-all">{item.memberName}</p>
                      <p className="text-[10px] uppercase text-text-dim font-bold tracking-tighter italic">{item.branch}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono font-bold text-white opacity-60 mb-1">{item.time}</p>
                    <div className={cn(
                      "inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md border",
                      item.type === 'in' ? "text-accent border-accent/20 bg-accent/5" : "text-red-400 border-red-500/20 bg-red-500/5"
                    )}>
                      {item.type === 'in' ? <LogIn className="h-3 w-3" /> : <LogOut className="h-3 w-3" />}
                      {item.type === 'in' ? 'Check In' : 'Check Out'}
                    </div>
                  </div>
               </div>
             ))}
          </div>
          <div className="p-6 bg-white/[0.02] mt-auto">
             <button className="w-full text-[10px] font-extrabold text-accent uppercase tracking-[0.2em] hover:brightness-125 transition-all text-center">
               View All Historical Records
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
