import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  MapPin, 
  Search, 
  CheckCircle2, 
  XCircle,
  QrCode,
  Scan,
  RefreshCcw,
  Wifi,
  UserCircle,
  LogIn,
  LogOut
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

interface AttendanceRecord {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  checkInTime: string;
  checkOutTime: string | null;
  status: 'active' | 'completed';
  node: string;
}

const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    userId: 'u1',
    userName: 'سيف الدين طارق',
    userAvatar: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=256',
    checkInTime: '2:00 PM',
    checkOutTime: null,
    status: 'active',
    node: 'Maadi Node'
  },
  {
    id: '2',
    userId: 'u2',
    userName: 'Sarah Node',
    userAvatar: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=256',
    checkInTime: '1:30 PM',
    checkOutTime: '2:45 PM',
    status: 'completed',
    node: 'Tagamoa Node'
  }
];

export const Attendance: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { user } = useAuth();
  const [records, setRecords] = useState<AttendanceRecord[]>(mockAttendance);
  const [searchQuery, setSearchQuery] = useState('');

  const activeUnits = records.filter(r => r.status === 'active');
  const filteredRecords = records.filter(r => 
    r.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSync = () => {
    if (!user) return;
    
    const isCurrentlyActive = activeUnits.find(r => r.userId === user.id);
    
    if (isCurrentlyActive) {
      // Check out
      setRecords(records.map(r => 
        (r.userId === user.id && r.status === 'active') 
          ? { ...r, status: 'completed', checkOutTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) } 
          : r
      ));
    } else {
      // Check in
      const newRecord: AttendanceRecord = {
        id: Date.now().toString(),
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar || '',
        checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        checkOutTime: null,
        status: 'active',
        node: 'Central Hub'
      };
      setRecords([newRecord, ...records]);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className={cn(isRTL ? "text-right" : "text-left")}>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">{t('attendance.title')}</h1>
          <p className="text-text-dim uppercase font-black text-[10px] tracking-[0.2em]">{t('attendance.subtitle')}</p>
        </div>
        
        <div className="flex gap-4 w-full sm:w-auto">
           <button 
             onClick={handleSync}
             className={cn(
               "flex-1 sm:flex-initial px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3",
               activeUnits.find(r => r.userId === user?.id) 
                 ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" 
                 : "bg-accent text-black neon-glow hover:scale-105 active:scale-95"
             )}
           >
             {activeUnits.find(r => r.userId === user?.id) ? (
               <><XCircle className="h-4 w-4" /> {t('attendance.check_out')}</>
             ) : (
               <><Wifi className="h-4 w-4" /> {t('attendance.check_in')}</>
             )}
           </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
         <div className="glass rounded-[2rem] p-8 border border-white/5 space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><Users className="h-12 w-12" /></div>
            <p className="text-[10px] font-black uppercase text-text-dim tracking-widest">Active Units</p>
            <p className="text-4xl font-extrabold text-white italic neon-text">{activeUnits.length}</p>
         </div>
         <div className="glass rounded-[2rem] p-8 border border-white/5 space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><RefreshCcw className="h-12 w-12" /></div>
            <p className="text-[10px] font-black uppercase text-text-dim tracking-widest">Facility Load</p>
            <p className="text-4xl font-extrabold text-white italic">{Math.round((activeUnits.length/50)*100)}%</p>
         </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
         <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-lg font-black text-white uppercase italic">{t('attendance.recent')}</h3>
               <div className="relative w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-dim" />
                  <input 
                    type="text" 
                    placeholder="Filter records..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-accent/40",
                      isRTL ? "text-right" : "text-left"
                    )}
                  />
               </div>
            </div>

            <div className="space-y-4">
               {filteredRecords.map((record) => (
                 <div key={record.id} className="glass group rounded-[2.5rem] p-8 border border-white/5 hover:border-white/10 transition-all">
                    <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-6", isRTL ? "sm:flex-row-reverse" : "sm:flex-row")}>
                       <div className={cn("flex items-center gap-6", isRTL ? "flex-row-reverse" : "flex-row")}>
                          <div className="relative">
                             <img src={record.userAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(record.userName)}&background=1a1a1e&color=fff`} className="h-16 w-16 rounded-[1.5rem] object-cover border border-white/10" alt={record.userName} />
                             {record.status === 'active' && (
                               <div className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full border-[6px] border-[#0a0a0c] animate-pulse" />
                             )}
                          </div>
                          <div className={cn(isRTL ? "text-right" : "text-left")}>
                             <h4 className="text-xl font-black text-white italic uppercase tracking-tight group-hover:text-accent transition-colors">{record.userName}</h4>
                             <div className={cn("flex items-center gap-4 mt-2 text-[10px] font-bold text-text-dim uppercase tracking-widest", isRTL ? "flex-row-reverse" : "flex-row")}>
                                <div className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {record.node}</div>
                                <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {record.checkInTime}</div>
                             </div>
                          </div>
                       </div>
                       
                       <div className={cn("flex flex-col gap-2 w-full sm:w-auto", isRTL ? "sm:items-start" : "sm:items-end")}>
                          <div className={cn(
                             "px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2",
                             record.status === 'active' ? "bg-accent/10 text-accent ring-1 ring-accent/20" : "bg-white/5 text-text-dim ring-1 ring-white/10"
                          )}>
                             {record.status === 'active' ? <Wifi className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                             {record.status}
                          </div>
                          {record.checkOutTime && (
                            <p className="text-[10px] font-bold text-text-dim px-2 italic uppercase">Terminated @ {record.checkOutTime}</p>
                          )}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-8">
            <div className="glass rounded-[2.5rem] p-10 border border-white/5 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-accent/2 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="h-20 w-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 ring-1 ring-accent/20 rotate-3 group-hover:rotate-0 transition-transform">
                  <Scan className="h-10 w-10 text-accent" />
               </div>
               <h4 className="text-sm font-black text-white uppercase italic tracking-widest mb-4">Identity Sync Terminal</h4>
               <p className="text-xs text-text-dim leading-relaxed mb-8">Scan your biometric QR to sync your current session with the facility's local host.</p>
               
               <div className="aspect-square glass rounded-[2rem] p-12 border border-white/5 relative overflow-hidden mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <QrCode className="w-full h-full text-white/5" />
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-accent/30 animate-scan pointer-events-none" />
               </div>

               <button className="w-full bg-white/2 border border-white/10 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-text-dim hover:text-white hover:bg-white/5 transition-all">
                  Run Diagnostic
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

