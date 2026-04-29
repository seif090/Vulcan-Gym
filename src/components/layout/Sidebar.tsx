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
  ShoppingCart,
  Trophy,
  Scale,
  Receipt,
  Truck,
  Settings as SettingsIcon,
  Globe
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const navItems = [
  { icon: LayoutDashboard, labelKey: 'nav.dashboard', path: '/' },
  { icon: MessageSquare, labelKey: 'nav.messages', path: '/messages' },
  { icon: Target, labelKey: 'nav.leads', path: '/leads' },
  { icon: Users, labelKey: 'nav.members', path: '/members' },
  { icon: CreditCard, labelKey: 'nav.subscriptions', path: '/subscriptions' },
  { icon: ShoppingCart, labelKey: 'nav.pos', path: '/pos' },
  { icon: Trophy, labelKey: 'nav.challenges', path: '/challenges' },
  { icon: Scale, labelKey: 'nav.transformations', path: '/transformations' },
  { icon: Dumbbell, labelKey: 'nav.workouts', path: '/workouts' },
  { icon: Apple, labelKey: 'nav.diet_plans', path: '/diet-plans' },
  { icon: Calendar, labelKey: 'nav.schedule', path: '/schedule' },
  { icon: CalendarCheck, labelKey: 'nav.attendance', path: '/attendance' },
  { icon: UserSquare2, labelKey: 'nav.trainers', path: '/trainers' },
  { icon: Building2, labelKey: 'nav.branches', path: '/branches' },
  { icon: Briefcase, labelKey: 'nav.employees', path: '/employees' },
  { icon: Package, labelKey: 'nav.inventory', path: '/inventory' },
  { icon: Wrench, labelKey: 'nav.maintenance', path: '/maintenance' },
  { icon: Megaphone, labelKey: 'nav.campaigns', path: '/campaigns' },
  { icon: Star, labelKey: 'nav.feedback', path: '/feedback' },
  { icon: DollarSign, labelKey: 'nav.payments', path: '/payments' },
  { icon: Receipt, labelKey: 'nav.expenses', path: '/expenses' },
  { icon: Truck, labelKey: 'nav.suppliers', path: '/suppliers' },
  { icon: BarChart3, labelKey: 'nav.reports', path: '/reports' },
  { icon: SettingsIcon, labelKey: 'nav.settings', path: '/settings' },
];

export const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const { t, language, setLanguage, isRTL } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={cn(
      "flex h-full w-72 flex-col bg-[#0d0d0f] shadow-2xl z-50 fixed top-0",
      isRTL ? "right-0 border-l border-white/5" : "left-0 border-r border-white/5"
    )}>
      <div className="flex h-24 items-center px-8 border-b border-white/5">
        <div className="flex items-center gap-4 group">
          <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
            <span className="text-black font-black text-2xl italic tracking-tighter">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white uppercase italic leading-none">Vulcan Gym</span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] font-mono mt-1">Operational</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1.5 px-4 py-8 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-4 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300',
                isActive
                  ? 'bg-accent text-black neon-glow translate-x-1 shadow-[0_0_20px_rgba(209,255,0,0.2)]'
                  : 'text-text-dim hover:bg-white/5 hover:text-white'
              )
            }
          >
            <item.icon className={cn("h-5 w-5", "transition-transform group-hover:scale-110")} />
            <span className="flex-1">{t(item.labelKey)}</span>
            <ChevronRight className={cn(
              "h-4 w-4 opacity-0 group-hover:opacity-100 transition-all",
              isRTL ? "rotate-180 -translate-x-2 group-hover:translate-x-0" : "translate-x-2 group-hover:translate-x-0"
            )} />
          </NavLink>
        ))}
      </nav>

      <div className="p-6 bg-white/[0.01] border-t border-white/5 space-y-4">
        <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl">
          <button 
            onClick={() => setLanguage('ar')}
            className={cn(
              "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              language === 'ar' ? "bg-accent text-black shadow-lg" : "text-white/40 hover:text-white"
            )}
          >
            العربية
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={cn(
              "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              language === 'en' ? "bg-accent text-black shadow-lg" : "text-white/40 hover:text-white"
            )}
          >
            English
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-red-500 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20 group"
        >
          <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>{t('nav.logout')}</span>
        </button>
      </div>
    </div>
  );
};
