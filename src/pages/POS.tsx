import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard, 
  DollarSign, 
  Package, 
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

import { useLanguage } from '../context/LanguageContext';

const inventory = [
  { id: 'PR-01', name: 'Whey Isolate', price: 1850, stock: 42, category: 'supplements' },
  { id: 'PR-02', name: 'Pre-Workout Matrix', price: 950, stock: 5, category: 'supplements' },
  { id: 'PR-03', name: 'Performance Tee', price: 450, stock: 120, category: 'merch' },
  { id: 'PR-04', name: 'BCAA Ultra', price: 750, stock: 15, category: 'supplements' },
  { id: 'PR-05', name: 'Creatine Monohydrate', price: 650, stock: 30, category: 'supplements' },
];

export const POS: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [cart, setCart] = useState<{id: string, name: string, price: number, qty: number}[]>([]);

  const addToCart = (product: typeof inventory[0]) => {
     setCart(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
           return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
        }
        return [...prev, { ...product, qty: 1 }];
     });
  };

  const removeFromCart = (id: string) => {
     setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id: string, delta: number) => {
     setCart(prev => prev.map(item => {
        if (item.id === id) {
           const newQty = Math.max(1, item.qty + delta);
           return { ...item, qty: newQty };
        }
        return item;
     }));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className={cn(
      "h-[calc(100vh-160px)] flex flex-col gap-10 animate-in fade-in duration-700",
      isRTL ? "flex-row-reverse" : "flex-row"
    )}>
      <div className="flex-1 flex flex-col gap-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className={cn(isRTL ? "text-right" : "text-left")}>
            <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">{t('pos.title')}</h1>
            <p className="text-text-dim uppercase font-black text-[10px] tracking-[0.2em]">{t('pos.subtitle')}</p>
          </div>
          <div className="flex gap-4">
             <button className="glass flex items-center gap-3 px-6 py-4 rounded-2xl text-xs font-black text-white hover:bg-white/5 transition-all uppercase tracking-widest border border-white/5">
                <Package className="h-5 w-5 text-accent" />
                {t('pos.inventory')}
             </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 overflow-hidden">
          <div className="relative">
            <Search className={cn("absolute top-1/2 -translate-y-1/2 h-6 w-6 text-text-dim", isRTL ? "right-6" : "left-6")} />
            <input 
              placeholder={t('common.search')}
              className={cn(
                "w-full bg-white/2 border border-white/5 rounded-[2rem] py-6 text-lg font-bold text-white focus:outline-none focus:border-accent/40 shadow-2xl",
                isRTL ? "pr-16 pl-8 text-right" : "pl-16 pr-8 text-left"
              )}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto custom-scrollbar pr-2">
            {inventory.map((product) => (
              <button 
                key={product.id}
                onClick={() => addToCart(product)}
                className={cn(
                  "glass p-8 rounded-[2.5rem] border border-white/5 transition-all hover:border-accent/40 hover:bg-white/[0.04] group relative overflow-hidden flex flex-col",
                  isRTL ? "text-right" : "text-left"
                )}
              >
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                 <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 italic">{product.category}</p>
                 <h3 className="text-xl font-black text-white uppercase italic mb-1 group-hover:neon-text transition-all leading-tight">{product.name}</h3>
                 <p className="text-xs font-bold text-text-dim mb-6 uppercase tracking-tighter">
                   {isRTL ? `المخزون: ${product.stock} وحدات` : `Stock: ${product.stock} Units`}
                 </p>
                 <div className={cn("flex items-center justify-between mt-auto", isRTL ? "flex-row-reverse" : "flex-row")}>
                    <span className="text-2xl font-black text-white italic">{product.price} <span className="text-[10px] not-italic opacity-40">EGP</span></span>
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                       <Plus className="h-5 w-5" />
                    </div>
                 </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction Manifest (Cart) */}
      <div className="w-[450px] glass rounded-[3rem] border border-white/5 flex flex-col shadow-2xl overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-32 bg-accent/2 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className={cn("p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.01]", isRTL ? "flex-row-reverse" : "flex-row")}>
            <div className={cn("flex items-center gap-4", isRTL ? "flex-row-reverse" : "flex-row")}>
               <ShoppingCart className="h-6 w-6 text-accent" />
               <h2 className="text-xl font-black text-white uppercase italic tracking-tight">{t('pos.cart')}</h2>
            </div>
            <span className="text-xs font-bold text-text-dim bg-white/5 px-3 py-1 rounded-full">{cart.length} {isRTL ? 'عناصر' : 'Items'}</span>
         </div>

         <div className="flex-1 overflow-y-auto custom-scrollbar p-10 space-y-8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center gap-6 opacity-20">
                 <Package className="h-20 w-20" />
                 <p className="text-xs font-black uppercase tracking-[0.3em]">{isRTL ? 'البيان فارغ' : 'Manifest Empty'}</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className={cn("flex gap-6 group", isRTL ? "flex-row-reverse text-right" : "flex-row text-left")}>
                   <div className="flex-1 space-y-1">
                      <h4 className="text-base font-black text-white uppercase italic">{item.name}</h4>
                      <p className="text-xs font-bold text-text-dim">{item.price} EGP <span className="opacity-40">x {item.qty}</span></p>
                   </div>
                   <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-3 bg-white/5 rounded-xl p-1">
                         <button onClick={() => updateQty(item.id, -1)} className="p-1.5 hover:bg-white/5 rounded-lg text-text-dim hover:text-white transition-all"><Minus className="h-3 w-3" /></button>
                         <span className="text-xs font-black text-white w-4 text-center">{item.qty}</span>
                         <button onClick={() => updateQty(item.id, 1)} className="p-1.5 hover:bg-white/5 rounded-lg text-text-dim hover:text-white transition-all"><Plus className="h-3 w-3" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-[10px] font-black text-red-500/40 uppercase tracking-widest hover:text-red-500 transition-all">
                        {isRTL ? 'إزالة العنصر' : 'Flush Item'}
                      </button>
                   </div>
                </div>
              ))
            )}
         </div>

         <div className="p-10 bg-white/[0.02] border-t border-white/5 space-y-8">
            <div className="space-y-4">
               <div className={cn("flex justify-between items-center text-xs font-bold text-text-dim uppercase tracking-widest", isRTL ? "flex-row-reverse" : "flex-row")}>
                  <span>Sub-Delta</span>
                  <span>{total} EGP</span>
               </div>
               <div className={cn("flex justify-between items-center text-xs font-bold text-text-dim uppercase tracking-widest", isRTL ? "flex-row-reverse" : "flex-row")}>
                  <span>Protocol Tax (0%)</span>
                  <span>0 EGP</span>
               </div>
               <div className={cn("flex justify-between items-center pt-4 border-t border-white/5", isRTL ? "flex-row-reverse" : "flex-row")}>
                  <span className="text-sm font-black text-white/40 uppercase italic tracking-[0.2em]">{t('common.total')} Payload</span>
                  <span className="text-3xl font-black text-accent italic">{total} <span className="text-[10px] not-italic opacity-40">EGP</span></span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
                  <DollarSign className="h-6 w-6 text-text-dim group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-black text-text-dim uppercase tracking-widest">{isRTL ? 'نقدي' : 'Liquid Cash'}</span>
               </button>
               <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all group">
                  <CreditCard className="h-6 w-6 text-accent" />
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest">{isRTL ? 'رقمي' : 'Digital Token'}</span>
               </button>
            </div>

            <button 
              disabled={cart.length === 0}
              className="w-full py-6 bg-accent text-black rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] neon-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-4"
            >
               <Zap className="h-5 w-5" />
               {t('pos.checkout')}
            </button>
         </div>
      </div>
    </div>
  );
};
