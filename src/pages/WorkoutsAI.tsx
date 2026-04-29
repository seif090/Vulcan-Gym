import React, { useState } from 'react';
import { 
  Zap, 
  Bot, 
  Terminal, 
  Shield, 
  Activity, 
  ChevronRight,
  ClipboardList,
  Loader2,
  Trash2,
  Save
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

interface Protocol {
  id: string;
  prompt: string;
  content: string;
  timestamp: string;
}

export const WorkoutsAI: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentProtocol, setCurrentProtocol] = useState<string | null>(null);
  const [history, setHistory] = useState<Protocol[]>(() => {
    const saved = localStorage.getItem('tactical_protocols');
    return saved ? JSON.parse(saved) : [];
  });

  const saveToHistory = (content: string) => {
    const newProtocol: Protocol = {
      id: Date.now().toString(),
      prompt,
      content,
      timestamp: new Date().toLocaleString()
    };
    const updatedHistory = [newProtocol, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem('tactical_protocols', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('tactical_protocols');
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setCurrentProtocol(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are the Vulcan Gym AI Tactician. Synthesize a detailed, highly technical training protocol for an elite athlete based on this objective: "${prompt}". 
        Use industrial/tactical terminology. Include exercises, sets, reps, rest periods, and a "Tactical Advisory" section at the end. 
        Format your response clearly using Markdown. Use Arabic if the prompt is in Arabic, otherwise English.`,
      });

      const text = response.text || '';
      setCurrentProtocol(text);
      saveToHistory(text);
    } catch (error) {
      console.error('AI Generation Error:', error);
      setCurrentProtocol('### ERROR: SYNC TERMINATED\nUnable to establish uplink with Tactical Matrix. Check network status.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className={cn(isRTL ? "text-right" : "text-left")}>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight flex items-center gap-4">
             <Bot className="h-8 w-8 text-accent animate-pulse" />
             {t('workouts_ai.title')}
          </h1>
          <p className="text-text-dim uppercase font-black text-[10px] tracking-[0.2em]">{t('workouts_ai.subtitle')}</p>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Input & Generation Area */}
        <div className="lg:col-span-2 space-y-8">
           <div className="glass rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <Terminal className="h-24 w-24" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={t('workouts_ai.prompt_placeholder')}
                  className={cn(
                    "w-full bg-white/2 border border-white/5 rounded-2xl p-6 text-white placeholder:text-text-dim focus:outline-none focus:border-accent/40 transition-all min-h-[160px] text-lg font-bold leading-relaxed",
                    isRTL ? "text-right" : "text-left shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                  )}
                />

                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full bg-accent text-black p-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] neon-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t('workouts_ai.generating')}
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5" />
                      {t('workouts_ai.generate')}
                    </>
                  )}
                </button>
              </div>
           </div>

           {/* Result Protocol */}
           {currentProtocol && (
             <div className="glass rounded-[2.5rem] p-12 border border-accent/20 animate-in slide-in-from-bottom-5 duration-500 relative">
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
               <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                     <Shield className="h-5 w-5 text-accent" />
                     <span className="text-xs font-black uppercase tracking-widest text-accent">Active Protocol Verified</span>
                  </div>
                  <button className="text-text-dim hover:text-white transition-colors">
                     <Save className="h-5 w-5" />
                  </button>
               </div>
               <div className={cn(
                 "markdown-body prose prose-invert max-w-none prose-p:text-text-dim prose-headings:text-white prose-strong:text-accent prose-code:text-accent prose-code:bg-white/5 prose-code:px-1 prose-code:rounded",
                 isRTL ? "text-right" : "text-left"
               )}>
                 <Markdown>{currentProtocol}</Markdown>
               </div>
             </div>
           )}
        </div>

        {/* Archives Sidebar */}
        <div className="space-y-10">
           <div className="glass rounded-[2.5rem] p-8 border border-white/5">
              <div className={cn("flex items-center justify-between mb-8", isRTL ? "flex-row-reverse" : "flex-row")}>
                 <div className="flex items-center gap-3">
                    <ClipboardList className="h-5 w-5 text-blue-400" />
                    <h3 className="text-sm font-black text-white uppercase italic tracking-widest">{t('workouts_ai.history')}</h3>
                 </div>
                 <button onClick={clearHistory} className="text-text-dim hover:text-red-500 transition-colors">
                    <Trash2 className="h-4 w-4" />
                 </button>
              </div>
              
              <div className="space-y-4">
                 {history.length === 0 ? (
                   <div className="text-center py-10 opacity-30">
                      <Zap className="h-10 w-10 mx-auto mb-4" />
                      <p className="text-[10px] font-bold uppercase">No archived sequences</p>
                   </div>
                 ) : (
                   history.map((item) => (
                     <button 
                       key={item.id}
                       onClick={() => {
                         setCurrentProtocol(item.content);
                         setPrompt(item.prompt);
                       }}
                       className={cn(
                         "w-full p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all text-left group",
                         isRTL ? "text-right" : "text-left"
                       )}
                     >
                        <p className="text-[10px] font-bold text-text-dim uppercase tracking-tighter mb-2">{item.timestamp}</p>
                        <p className="text-xs font-black text-white line-clamp-1 italic group-hover:text-accent transition-colors">{item.prompt}</p>
                        <div className="mt-4 flex items-center gap-2 text-[8px] font-black uppercase text-accent/50 group-hover:text-accent">
                           Re-initialize <ChevronRight className="h-3 w-3" />
                        </div>
                     </button>
                   ))
                 )}
              </div>
           </div>

           {/* Metrics Grid */}
           <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-3xl p-6 text-center border border-white/5">
                 <Activity className="h-5 w-5 text-red-500 mx-auto mb-3" />
                 <p className="text-[8px] font-black uppercase text-text-dim tracking-widest">CPU LOAD</p>
                 <p className="text-xl font-black text-white italic">4.2%</p>
              </div>
              <div className="glass rounded-3xl p-6 text-center border border-white/5">
                 <Shield className="h-5 w-5 text-accent mx-auto mb-3" />
                 <p className="text-[8px] font-black uppercase text-text-dim tracking-widest">ENCRYPTION</p>
                 <p className="text-xl font-black text-white italic">AES-256</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
