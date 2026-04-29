import React from 'react';
import { 
  Users, 
  UserCheck, 
  UserMinus, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { cn, formatCurrency } from '../lib/utils';

const stats = [
  { label: 'إجمالي الأعضاء', value: '1,284', icon: Users, change: '+12%', trend: 'up' },
  { label: 'اشتراكات نشطة', value: '842', icon: UserCheck, change: '+5%', trend: 'up' },
  { label: 'اشتراكات منتهية', value: '124', icon: UserMinus, change: '-2%', trend: 'down' },
  { label: 'إيرادات الشهر', value: '245,000 ج.م', icon: TrendingUp, change: '+18%', trend: 'up' },
];

const revenueData = [
  { name: 'يناير', value: 180000 },
  { name: 'فبراير', value: 210000 },
  { name: 'مارس', value: 195000 },
  { name: 'أبريل', value: 245000 },
  { name: 'مايو', value: 220000 },
  { name: 'يونيو', value: 250000 },
];

const branchesData = [
  { name: 'فرع المعادي', value: 450 },
  { name: 'فرع التجمع', value: 380 },
  { name: 'فرع أكتوبر', value: 310 },
  { name: 'فرع المهندسين', value: 144 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">لوحة القيادة</h1>
        <p className="text-text-dim max-w-2xl">نظرة شاملة على أداء الصالة الرياضية لهذا اليوم.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass group rounded-2xl p-6 transition-all hover:-translate-y-2 hover:border-accent">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-xl bg-white/5 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={cn(
                "text-[10px] font-bold px-2 py-1 rounded-lg border",
                stat.trend === 'up' ? "text-accent border-accent/20 bg-accent/5" : "text-red-400 border-red-500/20 bg-red-500/5"
              )}>
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-text-dim uppercase tracking-widest">{stat.label}</p>
              <p className={cn(
                "text-3xl font-bold mt-1",
                stat.label === 'إجمالي الأعضاء' ? "neon-text text-accent" : "text-white"
              )}>
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 glass rounded-3xl p-8">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-lg font-bold">تحليل الإيرادات الشهري</h3>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent"></span>
                  <span className="text-xs text-text-dim">الإجمالي</span>
               </div>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d1ff00" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#d1ff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#a1a1aa' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#a1a1aa' }} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121215', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#d1ff00' }}
                />
                <Area type="monotone" dataKey="value" stroke="#d1ff00" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 flex flex-col">
          <h3 className="text-lg font-bold mb-8">نشاط الفروع</h3>
          <div className="space-y-6 flex-1 overflow-y-auto">
             {branchesData.map((branch, i) => (
               <div key={i} className="group relative">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">{branch.name}</span>
                     <span className="text-xs font-mono text-text-dim">{branch.value} عضو</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div 
                        className="h-full bg-accent transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(209,255,0,0.5)]" 
                        style={{ width: `${(branch.value/500)*100}%` }}
                     ></div>
                  </div>
               </div>
             ))}
          </div>
          <button className="w-full mt-8 rounded-xl border border-white/10 py-3 text-xs font-bold text-text-dim hover:text-white hover:bg-white/5 transition-all">
            عرض التقارير الكاملة
          </button>
        </div>
      </div>
    </div>
  );
};
