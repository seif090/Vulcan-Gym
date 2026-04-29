import React from 'react';
import { Building2, MapPin, Users, Phone, Plus } from 'lucide-react';

const branches = [
  { id: 'b1', name: 'فرع المعادي', address: 'شارع ٩، المعادي، القاهرة', members: 450, phone: '01011111111', manager: 'سيف طارق' },
  { id: 'b2', name: 'فرع التجمع', address: 'شارع التسعين، التجمع الخامس', members: 380, phone: '01022222222', manager: 'أحمد محمد' },
  { id: 'b3', name: 'فرع أكتوبر', address: 'ميدان الحصري، ٦ أكتوبر', members: 310, phone: '01033333333', manager: 'سارة حسن' },
];

export const Branches: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Regional Hubs</h1>
          <p className="text-text-dim max-w-sm">Global branch performance tracking and node management.</p>
        </div>
        <button className="flex items-center gap-3 rounded-2xl bg-accent px-8 py-3.5 text-sm font-extrabold text-black hover:scale-105 active:scale-95 transition-all neon-glow uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Initialize Node
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch) => (
          <div key={branch.id} className="glass rounded-[2.5rem] p-10 shadow-2xl transition-all hover:-translate-y-2 hover:border-accent/40 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-all"></div>
            
            <div className="flex items-center gap-5 mb-10 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center border border-accent/20 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(209,255,0,0.2)]">
                <Building2 className="h-9 w-9" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white uppercase italic">{branch.name}</h3>
                <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mt-1">Managed by: {branch.manager}</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-xs font-bold text-text-dim group-hover:text-white/70 transition-colors">
                <MapPin className="h-5 w-5 text-accent opacity-50" />
                <span className="truncate">{branch.address}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-text-dim group-hover:text-white/70 transition-colors">
                <Phone className="h-5 w-5 text-accent opacity-50" />
                {branch.phone}
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-text-dim group-hover:text-white/70 transition-colors">
                <Users className="h-5 w-5 text-accent opacity-50" />
                <span className="text-accent">{branch.members}</span> 
                <span className="uppercase tracking-widest">Active Units</span>
              </div>
            </div>

            <button className="w-full rounded-2xl border border-white/5 bg-white/[0.02] py-4 text-[10px] font-extrabold text-accent uppercase tracking-[0.3em] hover:bg-accent/5 hover:border-accent/20 transition-all italic">
              Access Financial Matrix
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
