import React from 'react';
import { Bell, Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="h-20 border-b border-white/5 bg-transparent px-8 backdrop-blur-md">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5 flex items-center gap-3">
             <Building2 className="h-4 w-4 text-accent" />
             <span className="text-sm font-medium">فرع النخيل - الرئيسي</span>
          </div>
          <div className="relative w-64">
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-4 w-4 text-text-dim" />
            </span>
            <input
              type="text"
              placeholder="بحث سريع..."
              className="w-full rounded-xl border border-white/5 bg-white/2 py-2 pr-10 pl-4 text-xs focus:border-accent/40 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative w-10 h-10 glass rounded-full flex items-center justify-center text-text-dim hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
          </button>

          <div className="h-8 w-px bg-white/5"></div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white leading-tight">{user?.name}</p>
              <p className="text-[10px] text-accent font-bold uppercase tracking-widest mt-0.5">Admin</p>
            </div>
            <div className="h-10 w-10 rounded-xl glass p-0.5 animate-in zoom-in duration-300">
              <img 
                src={user?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} 
                alt="Profile" 
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <button className="bg-accent text-black px-6 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-all neon-glow flex items-center gap-2">
            <Plus className="h-4 w-4" />
            تسجيل سريع
          </button>
        </div>
      </div>
    </header>
  );
};
