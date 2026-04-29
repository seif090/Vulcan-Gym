import React from 'react';
import { 
  Package, 
  Search, 
  Plus, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Filter,
  MoreVertical,
  Activity,
  ShoppingCart
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Product } from '../types';

const products: Product[] = [
  { id: 'INV-001', name: 'Whey Isolate (Chocolate)', category: 'supplements', stock: 42, minStock: 10, price: 1850, status: 'in-stock' },
  { id: 'INV-002', name: 'Pre-Workout Matrix (V2)', category: 'supplements', stock: 5, minStock: 15, price: 950, status: 'low-stock' },
  { id: 'INV-003', name: 'Vulcan Performance Tee', category: 'merch', stock: 120, minStock: 20, price: 450, status: 'in-stock' },
  { id: 'INV-004', name: 'Identity Shaker Bottle', category: 'merch', stock: 0, minStock: 50, price: 250, status: 'out-of-stock' },
  { id: 'INV-005', name: 'Dura-Grip Dumbbells (20kg)', category: 'equipment', stock: 4, minStock: 2, price: 2200, status: 'in-stock' },
];

export const Inventory: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">Supplies & Assets</h1>
          <p className="text-text-dim">Logistics core for merchandise and gym hardware.</p>
        </div>
        <button className="bg-accent text-black px-8 py-4 rounded-2xl font-black text-xs hover:scale-105 transition-all neon-glow flex items-center gap-4 uppercase tracking-[0.2em]">
          <Plus className="h-5 w-5" />
          Provision Item
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
         <div className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
            <ShoppingCart className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Inventory Value</p>
            <h3 className="text-4xl font-black text-white italic tracking-tighter">184,500 <span className="text-sm opacity-40">EGP</span></h3>
         </div>
         <div className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
            <AlertTriangle className="absolute -bottom-4 -right-4 h-24 w-24 text-amber-500/[0.02] -rotate-12" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Critical Restock</p>
            <h3 className="text-4xl font-black text-amber-400 italic tracking-tighter">12 <span className="text-sm opacity-40">Units</span></h3>
         </div>
         <div className="glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
            <Activity className="absolute -bottom-4 -right-4 h-24 w-24 text-accent/[0.02] -rotate-12" />
            <p className="text-[10px] font-extrabold text-text-dim uppercase tracking-[0.2em] mb-2">Operational Assets</p>
            <h3 className="text-4xl font-black text-accent italic tracking-tighter">840 <span className="text-sm opacity-40">Hardware</span></h3>
         </div>
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.01]">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-dim" />
            <input 
              placeholder="Search via Asset ID or Category..." 
              className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pr-12 pl-6 text-sm text-white focus:outline-none focus:border-accent/40"
            />
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-text-dim uppercase tracking-widest hover:text-white transition-all">
                <Filter className="h-4 w-4" />
                Filter Hierarchy
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Asset Name</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Category</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Stock Delta</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Unit Price</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Status</th>
                <th className="px-8 py-6 font-bold text-text-dim text-xs uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-white/[0.03] transition-all group">
                  <td className="px-8 py-6">
                    <div>
                       <p className="font-bold text-white text-base group-hover:neon-text transition-colors italic uppercase">{product.name}</p>
                       <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{product.id}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                       {product.category}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                       <span className={cn(
                         "text-xl font-black italic",
                         product.stock === 0 ? "text-red-500" : product.stock <= product.minStock ? "text-amber-400" : "text-white"
                       )}>
                         {product.stock}
                       </span>
                       <div className="flex flex-col gap-0.5">
                          {product.stock > product.minStock ? (
                            <ArrowUpRight className="h-3 w-3 text-accent" />
                          ) : (
                            <ArrowDownLeft className="h-3 w-3 text-red-500" />
                          )}
                          <span className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">Min: {product.minStock}</span>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-black text-white italic">{product.price} <span className="text-[10px] text-text-dim font-bold not-italic">EGP</span></td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border",
                      product.status === 'in-stock' ? "text-accent border-accent/20 bg-accent/5" :
                      product.status === 'low-stock' ? "text-amber-400 border-amber-400/20 bg-amber-400/5" :
                      "text-red-500 border-red-500/20 bg-red-500/5"
                    )}>
                      <div className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        product.status === 'in-stock' ? "bg-accent shadow-[0_0_8px_rgba(209,255,0,1)]" :
                        product.status === 'low-stock' ? "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]" :
                        "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]"
                      )}></div>
                      {product.status.replace('-', ' ')}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <button className="p-3 rounded-2xl bg-white/2 hover:bg-white/5 hover:text-accent transition-all">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
