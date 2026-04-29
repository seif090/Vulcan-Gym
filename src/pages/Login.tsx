import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState('admin@oxygym.com');
  const [password, setPassword] = React.useState('password');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('خطأ في البريد الإلكتروني أو كلمة المرور');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 py-12 rtl overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md space-y-10 glass rounded-[2.5rem] p-12 shadow-2xl relative z-10 animate-in zoom-in-95 duration-500">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent text-black shadow-lg neon-glow animate-bounce-slow">
            <Dumbbell className="h-12 w-12" />
          </div>
          <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-white uppercase italic">Vulcan Gym</h2>
          <p className="mt-3 text-sm text-text-dim font-bold tracking-widest uppercase">Admin Terminal Access</p>
        </div>

        <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-xl bg-red-500/10 p-4 text-xs font-bold text-red-500 border border-red-500/20 animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-text-dim uppercase tracking-widest mb-2 px-1">Identity Email</label>
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

            <div>
              <label htmlFor="password" className="block text-xs font-bold text-text-dim uppercase tracking-widest mb-2 px-1">Secure Key</label>
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

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-white/10 bg-white/5 text-accent focus:ring-accent/40" />
              <label htmlFor="remember-me" className="mr-2 block text-xs font-bold text-text-dim uppercase tracking-widest">Keep Session</label>
            </div>
            <div className="text-xs">
              <a href="#" className="font-bold text-accent uppercase tracking-widest hover:underline px-1">Forgot Access?</a>
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
              'Enter Terminal'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
