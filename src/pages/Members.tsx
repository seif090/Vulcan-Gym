import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  FileText, 
  UserX, 
  QrCode,
  Download
} from 'lucide-react';
import { Member } from '../types';
import { cn, formatDate } from '../lib/utils';
import { QRCodeSVG } from 'qrcode.react';
import { SocialShare } from '../components/ui/SocialShare';

const mockMembers: Member[] = [
  { id: '101', name: 'أحمد محمد علي', email: 'ahmed@email.com', phone: '01012345678', registrationDate: '2024-01-15', status: 'active', branchId: 'b1', qrCode: 'MEM-101' },
  { id: '102', name: 'سارة محمود', email: 'sara@email.com', phone: '01122334455', registrationDate: '2024-02-10', status: 'active', branchId: 'b1', qrCode: 'MEM-102' },
  { id: '103', name: 'ياسين حسن', email: 'yassin@email.com', phone: '01234567890', registrationDate: '2023-11-20', status: 'expired', branchId: 'b2', qrCode: 'MEM-103' },
  { id: '104', name: 'ليلى إبراهيم', email: 'layla@email.com', phone: '01555667788', registrationDate: '2024-03-05', status: 'pending', branchId: 'b1', qrCode: 'MEM-104' },
  { id: '105', name: 'محمود حسن', email: 'm@hassan.com', phone: '01099887766', registrationDate: '2024-01-20', status: 'active', branchId: 'b3', qrCode: 'MEM-105' },
];

export const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedMember, setSelectedMember] = React.useState<Member | null>(null);

  const filteredMembers = mockMembers.filter(m => 
    m.name.includes(searchTerm) || m.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">إدارة الأعضاء</h1>
          <p className="text-text-dim">تتبع الاشتراكات، بيانات التواصل، وبطاقات الدخول.</p>
        </div>
        <button className="bg-accent text-black px-8 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all neon-glow flex items-center gap-3">
          <Plus className="h-5 w-5" />
          إضافة عضو جديد
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-dim" />
          <input
            type="text"
            placeholder="البحث بالاسم، الرقم، أو الكود..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full glass rounded-2xl py-3 pr-12 pl-4 text-sm focus:border-accent/40 focus:outline-none transition-all"
          />
        </div>
        <button className="glass flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/5 transition-all">
          <Filter className="h-5 w-5" />
          تصفية النتائج
        </button>
      </div>

      <div className="glass rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2">
                <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">العضو</th>
                <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">رقم التواصل</th>
                <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">تاريخ الانضمام</th>
                <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest">الحالة</th>
                <th className="px-8 py-5 font-bold text-text-dim text-xs uppercase tracking-widest text-left">التفاعل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-white/[0.03] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-lg group-hover:scale-110 transition-transform">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-white text-base">{member.name}</p>
                        <p className="text-[10px] text-text-dim font-medium">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="font-mono text-white/80 group-hover:text-accent transition-colors">{member.phone}</span>
                  </td>
                  <td className="px-8 py-5 text-text-dim font-medium">{formatDate(member.registrationDate)}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "inline-flex rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                      member.status === 'active' ? "bg-accent/10 text-accent border border-accent/20" :
                      member.status === 'expired' ? "bg-red-500/10 text-red-500 border border-red-500/20" :
                      "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                    )}>
                      {member.status === 'active' ? 'نشط' : member.status === 'expired' ? 'منتهي' : 'قيد المراجعة'}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-left">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => setSelectedMember(member)} className="w-9 h-9 flex items-center justify-center glass rounded-lg text-text-dim hover:text-accent transition-all">
                        <QrCode className="h-4 w-4" />
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center glass rounded-lg text-text-dim hover:text-white transition-all">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center glass rounded-lg text-text-dim hover:text-red-500 transition-all">
                        <UserX className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Immersive Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6 rtl">
          <div className="w-full max-w-sm glass rounded-[2.5rem] p-10 animate-in zoom-in-95 duration-300 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="text-center">
              <div className="h-24 w-24 rounded-3xl bg-accent/20 border border-accent/30 mx-auto flex items-center justify-center mb-6">
                <span className="text-accent text-4xl font-extrabold">{selectedMember.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
              <p className="text-xs text-text-dim font-bold uppercase tracking-[0.2em] mb-10">Member Identity: {selectedMember.id}</p>
              
              <div className="bg-white p-6 rounded-3xl mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block transform hover:scale-105 transition-transform">
                <QRCodeSVG value={selectedMember.qrCode} size={180} />
              </div>

              <div className="flex flex-col items-center gap-4 mb-10">
                <p className="text-[10px] font-black text-text-dim uppercase tracking-widest">Share Athlete Passport</p>
                <SocialShare 
                  url={`${window.location.origin}/members/${selectedMember.id}`} 
                  title={`Check out ${selectedMember.name}'s athlete profile at Vulcan Gym!`} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="rounded-2xl bg-white/5 py-4 text-xs font-bold text-white hover:bg-white/10 transition-all uppercase tracking-widest"
                >
                  إغلاق
                </button>
                <button className="rounded-2xl bg-accent py-4 text-xs font-bold text-black neon-glow hover:scale-[1.02] transition-all uppercase tracking-widest">
                  حفظ الكود
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
