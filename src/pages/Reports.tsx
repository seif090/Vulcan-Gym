import React from 'react';
import { 
  BarChart3, 
  Download, 
  TrendingUp, 
  DollarSign, 
  Users,
  Calendar
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'السبت', value: 45 },
  { name: 'الأحد', value: 52 },
  { name: 'الاثنين', value: 61 },
  { name: 'الثلاثاء', value: 48 },
  { name: 'الأربعاء', value: 55 },
  { name: 'الخميس', value: 67 },
  { name: 'الجمعة', value: 39 },
];

const subTypeData = [
  { name: 'شهري', value: 400 },
  { name: 'ربع سنوي', value: 300 },
  { name: 'سنوي', value: 300 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

export const Reports: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Intelligence Matrix</h1>
          <p className="text-text-dim max-w-sm">Advanced analytics on revenue streams, athlete retention, and node activity.</p>
        </div>
        <button className="flex items-center gap-3 rounded-2xl bg-white text-black px-8 py-3.5 text-sm font-extrabold hover:bg-accent hover:shadow-[0_0_20px_rgba(209,255,0,0.4)] transition-all uppercase tracking-[0.2em]">
          <Download className="h-5 w-5" />
          Export Data Core
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
         <div className="bg-accent rounded-[2rem] p-8 text-black shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl transition-all group-hover:scale-150"></div>
            <p className="text-[10px] font-extrabold opacity-60 mb-2 uppercase tracking-[0.2em] italic">Consolidated Revenue (Q2)</p>
            <h2 className="text-4xl font-black mb-6 tracking-tighter">742,000 <span className="text-lg opacity-40 font-bold">EGP</span></h2>
            <div className="flex items-center gap-2 text-[10px] font-black bg-black text-accent w-fit px-4 py-2 rounded-full uppercase tracking-tighter italic">
               <TrendingUp className="h-3 w-3" />
               +24% Delta Yield
            </div>
         </div>
         
         <div className="glass rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="flex items-center justify-between mb-6">
               <div className="h-12 w-12 rounded-2xl bg-white/5 text-accent flex items-center justify-center border border-white/5 group-hover:scale-110 transition-all">
                  <DollarSign className="h-6 w-6" />
               </div>
               <Calendar className="h-5 w-5 text-text-dim" />
            </div>
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] italic mb-1">Operational Overhead</p>
            <h2 className="text-3xl font-extrabold text-white italic">12,450 <span className="text-xs text-text-dim">EGP</span></h2>
         </div>

         <div className="glass rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="flex items-center justify-between mb-6">
               <div className="h-12 w-12 rounded-2xl bg-white/5 text-accent flex items-center justify-center border border-white/5 group-hover:scale-110 transition-all">
                  <Users className="h-6 w-6" />
               </div>
               <Calendar className="h-5 w-5 text-text-dim" />
            </div>
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] italic mb-1">Retention Index</p>
            <h2 className="text-3xl font-extrabold text-accent neon-text italic">88.5%</h2>
         </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
         <div className="glass rounded-[2.5rem] p-10 shadow-2xl border border-white/5">
            <h3 className="text-lg font-extrabold text-white mb-10 uppercase tracking-widest italic flex items-center gap-4">
               <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
               Daily Athlete Load
            </h3>
            <div className="h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }} 
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.03)' }} 
                      contentStyle={{ 
                        backgroundColor: '#121215', 
                        borderRadius: '20px', 
                        border: '1px solid rgba(255,255,255,0.05)', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                        color: '#fff'
                      }} 
                    />
                    <Bar dataKey="value" fill="#d1ff00" radius={[10, 10, 4, 4]} barSize={45}>
                       {data.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={index === 5 ? '#d1ff00' : 'rgba(209,255,0,0.4)'} />
                       ))}
                    </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="glass rounded-[2.5rem] p-10 shadow-2xl border border-white/5">
            <h3 className="text-lg font-extrabold text-white mb-10 uppercase tracking-widest italic flex items-center gap-4">
               <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
               Subscription Architecture
            </h3>
            <div className="h-[350px] relative">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={subTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {subTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#121215', 
                        borderRadius: '20px', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)' 
                      }} 
                    />
                  </PieChart>
               </ResponsiveContainer>
               
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[10px] font-black text-text-dim uppercase tracking-[0.3em]">Total</span>
                  <span className="text-3xl font-black text-white italic">1000</span>
               </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-6">
               {subTypeData.map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: COLORS[i], color: COLORS[i] }}></div>
                    <span className="text-[10px] font-extrabold text-text-dim uppercase tracking-widest italic">{item.name}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};
