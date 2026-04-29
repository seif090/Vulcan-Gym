import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  CalendarCheck, 
  UserSquare2, 
  Building2, 
  BarChart3, 
  LogOut,
  ChevronRight,
  TrendingUp,
  Dumbbell,
  DollarSign,
  Calendar,
  Package,
  MessageSquare,
  Briefcase,
  Megaphone,
  Apple,
  Wrench,
  Star,
  Target,
  ShoppingCart
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { icon: LayoutDashboard, label: 'لوحة التحكم', path: '/' },
  { icon: MessageSquare, label: 'الرسائل', path: '/messages' },
  { icon: Target, label: 'العملاء المحتملين', path: '/leads' },
  { icon: Users, label: 'الأعضاء', path: '/members' },
  { icon: CreditCard, label: 'الاشتراكات', path: '/subscriptions' },
  { icon: ShoppingCart, label: 'نقطة البيع', path: '/pos' },
  { icon: Dumbbell, label: 'خطط التدريب', path: '/workouts' },
  { icon: Apple, label: 'خطط التغذية', path: '/diet-plans' },
  { icon: Calendar, label: 'الجدول الزمني', path: '/schedule' },
  { icon: CalendarCheck, label: 'الحضور', path: '/attendance' },
  { icon: UserSquare2, label: 'المدربين', path: '/trainers' },
  { icon: Building2, label: 'الفروع', path: '/branches' },
  { icon: Briefcase, label: 'الموظفين', path: '/employees' },
  { icon: Package, label: 'المخزون', path: '/inventory' },
  { icon: Wrench, label: 'الصيانة', path: '/maintenance' },
  { icon: Megaphone, label: 'التسويق', path: '/campaigns' },
  { icon: Star, label: 'الآراء', path: '/feedback' },
  { icon: DollarSign, label: 'المدفوعات', path: '/payments' },
  { icon: BarChart3, label: 'التقارير', path: '/reports' },
];

export const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-full w-64 flex-col bg-[#0d0d0f] border-l border-white/5 shadow-2xl">
      <div className="flex h-20 items-center px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center neon-glow">
            <span className="text-black font-extrabold text-xl">V</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">Vulcan Gym</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-6 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300',
                isActive
                  ? 'bg-gradient-to-l from-accent/10 to-transparent border-r-4 border-accent text-accent'
                  : 'text-text-dim hover:bg-white/5 hover:text-white'
              )
            }
          >
            <item.icon className={cn("h-5 w-5", "transition-transform group-hover:scale-110")} />
            <span className="flex-1">{item.label}</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/5 p-4 bg-white/2">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>الخروج</span>
        </button>
      </div>
    </div>
  );
};
