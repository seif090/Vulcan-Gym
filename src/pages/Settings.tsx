import React from 'react';
import { 
  Settings as SettingsIcon, 
  Globe, 
  Bell, 
  Lock, 
  Database, 
  Layout, 
  Save,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Settings: React.FC = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div>
        <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">{t('nav.settings')}</h1>
        <p className="text-text-dim uppercase font-black text-[10px] tracking-[0.2em]">{t('profile.subtitle')}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
           {/* Language Settings */}
           <div className="glass rounded-[2.5rem] p-10 shadow-2xl border border-white/5 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <Globe className="h-6 w-6 text-accent" />
                 <h2 className="text-xl font-bold text-white uppercase italic">{t('settings.language')}</h2>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { id: 'ar', label: 'العربية (Arabic)', desc: 'Native Right-to-Left Interface' },
                  { id: 'en', label: 'English (US)', desc: 'Standard Left-to-Right Interface' },
                ].map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setLanguage(lang.id as 'en' | 'ar')}
                    className={cn(
                      "p-6 rounded-3xl border transition-all group relative overflow-hidden",
                      isRTL ? "text-right" : "text-left",
                      language === lang.id 
                        ? "bg-accent/10 border-accent shadow-[0_0_20px_rgba(209,255,0,0.1)]" 
                        : "bg-white/2 border-white/5 hover:bg-white/5"
                    )}
                  >
                    {language === lang.id && (
                      <CheckCircle2 className={cn(
                        "absolute top-4 h-5 w-5 text-accent",
                        isRTL ? "left-4" : "right-4"
                      )} />
                    )}
                    <p className={cn(
                      "text-sm font-black uppercase tracking-widest italic mb-2",
                      language === lang.id ? "text-accent" : "text-white"
                    )}>{lang.label}</p>
                    <p className="text-[10px] font-bold text-text-dim uppercase tracking-tight">{lang.desc}</p>
                  </button>
                ))}
              </div>
           </div>

           {/* General Settings */}
           <div className="glass rounded-[2.5rem] p-10 shadow-2xl border border-white/5 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <Layout className="h-6 w-6 text-blue-400" />
                 <h2 className="text-xl font-bold text-white uppercase italic">Interface Modulation</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-text-dim uppercase tracking-widest px-1">Organization Node</label>
                    <input defaultValue="Vulcan Gym" className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 px-6 text-sm text-white focus:border-accent/40 outline-none font-bold" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-text-dim uppercase tracking-widest px-1">Primary Uplink</label>
                    <input defaultValue="ops@vulcan.com" className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 px-6 text-sm text-white focus:border-accent/40 outline-none font-bold" />
                 </div>
              </div>

              <div className="space-y-2">
                  <label className="text-[10px] font-black text-text-dim uppercase tracking-widest px-1">Branding Header</label>
                  <div className="h-32 rounded-2xl border-2 border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/[0.03] transition-all">
                     <ImageIcon className="h-8 w-8 text-white/10" />
                     <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Upload High-Res Vector Logo</span>
                  </div>
              </div>
           </div>

           {/* Notification Config */}
           <div className="glass rounded-[2.5rem] p-10 shadow-2xl border border-white/5 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                 <Bell className="h-6 w-6 text-amber-400" />
                 <h2 className="text-xl font-bold text-white uppercase italic">Alert Thresholds</h2>
              </div>
              
              <div className="space-y-6">
                 {[
                   { label: 'Subscription Expiry Warnings', desc: 'Notify members 7 days prior to lockout.' },
                   { label: 'Trainer Slot Alerts', desc: 'Sync alerts when 1-to-1 sessions are full.' },
                   { label: 'Payment Failure Matrix', desc: 'Immediate notification on failed ledger entry.' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                      <div>
                         <p className="text-sm font-bold text-white mb-1 uppercase italic tracking-tight">{item.label}</p>
                         <p className="text-[10px] text-text-dim font-bold">{item.desc}</p>
                      </div>
                      <div className="h-6 w-12 bg-accent/20 rounded-full relative cursor-pointer group">
                        <div className={cn(
                          "absolute top-1 h-4 w-4 bg-accent rounded-full transition-all group-hover:scale-110 shadow-[0_0_8px_rgba(209,255,0,0.5)]",
                          isRTL ? "left-1" : "right-1"
                        )}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="glass rounded-[2.5rem] p-10 shadow-2xl border border-white/5 space-y-8 h-fit sticky top-8">
              <div className="flex items-center gap-4 mb-2">
                 <Lock className="h-6 w-6 text-red-400" />
                 <h2 className="text-xl font-bold text-white uppercase italic">Admin Access</h2>
              </div>
              <p className="text-xs text-text-dim font-bold leading-relaxed">Modify credentials and node access tokens for the primary terminal.</p>
              
              <button className="w-full bg-accent text-black py-4 rounded-2xl font-black text-xs hover:scale-[1.02] active:scale-[0.98] transition-all neon-glow uppercase tracking-[0.2em] flex items-center justify-center gap-4">
                 <Save className="h-5 w-5" />
                 Commit Changes
              </button>
              
              <div className="pt-6 border-t border-white/5 space-y-4">
                 <div className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl bg-white/2 hover:bg-white/5 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                       <Database className="h-5 w-5 text-text-dim" />
                       <span className="text-[10px] font-bold text-white uppercase tracking-widest">Backup Database</span>
                    </div>
                 </div>
                 <div className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl bg-white/2 hover:bg-white/5 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                       <Layout className="h-5 w-5 text-text-dim" />
                       <span className="text-[10px] font-bold text-white uppercase tracking-widest">Terminal Style</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
