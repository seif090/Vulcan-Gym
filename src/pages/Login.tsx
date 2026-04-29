import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Mail, Lock, Loader2, User, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { cn } from '../lib/utils';

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('admin@oxygym.com');
  const [password, setPassword] = React.useState('password');
  const [role, setRole] = React.useState<UserRole>(UserRole.RECEPTIONIST);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password, role);
      }
      navigate('/');
    } catch (err) {
      setError(isLogin ? 'خطأ في البريد الإلكتروني أو كلمة المرور' : 'فشل التسجيل. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 py-12 rtl overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md space-y-8 glass rounded-[2.5rem] p-12 shadow-2xl relative z-10 animate-in zoom-in-95 duration-500">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-black shadow-lg neon-glow animate-bounce-slow">
            <Dumbbell className="h-10 w-10" />
          </div>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white uppercase italic">Vulcan Gym</h2>
          <div className="mt-8 flex bg-white/5 p-1 rounded-xl">
             <button 
               onClick={() => setIsLogin(true)}
               className={cn(
                 "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                 isLogin ? "bg-accent text-black shadow-lg" : "text-text-dim hover:text-white"
               )}
             >
               Login
             </button>
             <button 
               onClick={() => setIsLogin(false)}
               className={cn(
                 "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                 !isLogin ? "bg-accent text-black shadow-lg" : "text-text-dim hover:text-white"
               )}
             >
               Register
             </button>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-xl bg-red-500/10 p-4 text-xs font-bold text-red-500 border border-red-500/20 animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-2 px-1">Full Identity Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <UserCircle className="h-5 w-5 text-text-dim" />
                  </div>
                  <input
                    type="text"
                    required={!isLogin}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-2xl border border-white/5 bg-white/2 py-4 pr-12 pl-4 text-sm font-medium text-white focus:border-accent/40 focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-2 px-1">Identity Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <Mail className="h-5 w-5 text-text-dim" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-2xl border border-white/5 bg-white/2 py-4 pr-12 pl-4 text-sm font-medium text-white focus:border-accent/40 focus:outline-none transition-all"
                  placeholder="admin@vulcan.com"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-2 px-1">Operational Role</label>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="block w-full rounded-2xl border border-white/5 bg-white/2 py-4 px-6 text-sm font-bold text-white focus:border-accent/40 focus:outline-none transition-all appearance-none uppercase"
                >
                  <option value={UserRole.ADMIN}>Administrator</option>
                  <option value={UserRole.BRANCH_MANAGER}>Branch Manager</option>
                  <option value={UserRole.RECEPTIONIST}>Receptionist</option>
                  <option value={UserRole.TRAINER}>Tactical Trainer</option>
                  <option value={UserRole.MEMBER}>Athlete / Member</option>
                </select>
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-2 px-1">Secure Key</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <Lock className="h-5 w-5 text-text-dim" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-2xl border border-white/5 bg-white/2 py-4 pr-12 pl-4 text-sm font-medium text-white focus:border-accent/40 focus:outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex w-full justify-center rounded-2xl bg-accent py-4 px-4 text-xs font-extrabold text-black transition-all hover:scale-[1.02] active:scale-[0.98] neon-glow disabled:opacity-50 uppercase tracking-[0.2em]"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              isLogin ? 'Enter Terminal' : 'Initialize Protocol'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
