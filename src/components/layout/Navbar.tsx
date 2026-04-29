import React from 'react';
import { Bell, Search, Moon, Sun, ChevronDown, Building2, Plus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { t, isRTL } = useLanguage();

  return (
    <header className="h-20 border-b border-white/5 bg-transparent px-8 backdrop-blur-md sticky top-0 z-40">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/5 flex items-center gap-3">
             <Building2 className="h-4 w-4 text-accent" />
             <span className="text-[10px] font-black uppercase tracking-widest text-white italic">
               {isRTL ? 'فرع النخيل - الرئيسي' : 'Nakhil Node - Primary'}
             </span>
          </div>
          <div className="relative w-64 lg:w-96">
            <span className={cn(
              "absolute inset-y-0 flex items-center pointer-events-none",
              isRTL ? "right-4" : "left-4"
            )}>
              <Search className="h-4 w-4 text-text-dim" />
            </span>
            <input
              type="text"
              placeholder={t('common.search')}
              className={cn(
                "w-full rounded-2xl border border-white/5 bg-white/2 py-3 text-xs font-bold focus:border-accent/40 focus:outline-none transition-all placeholder:text-white/10",
                isRTL ? "pr-12 pl-6" : "pl-12 pr-6"
              )}
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative w-11 h-11 glass rounded-2xl flex items-center justify-center text-text-dim hover:text-white transition-all hover:scale-105 active:scale-95">
            <Bell className="h-5 w-5" />
            <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)] animate-pulse"></span>
          </button>

          <div className="h-8 w-px bg-white/5"></div>

          <div className="flex items-center gap-4">
            <div className={cn(
              "flex flex-col hidden sm:flex",
              isRTL ? "text-right" : "text-left"
            )}>
              <p className="text-sm font-black text-white italic leading-none">{user?.name}</p>
              <p className="text-[9px] text-accent font-black uppercase tracking-[0.2em] mt-1.5 opacity-60">System Admin</p>
            </div>
            <div className="h-11 w-11 rounded-2xl glass p-0.5 animate-in zoom-in duration-500 border border-white/10">
              <img 
                src={user?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} 
                alt="Profile" 
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          <button className="hidden lg:flex bg-white text-black px-8 py-3 rounded-2xl font-black text-[10px] hover:scale-105 transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(209,255,0,0.4)] uppercase tracking-[0.2em] items-center gap-3 italic">
            <Plus className="h-4 w-4" />
            {t('common.add')}
          </button>
        </div>
      </div>
    </header>
  );
};
