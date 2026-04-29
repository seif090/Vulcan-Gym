import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { Navigate, Outlet } from 'react-router-dom';
import { cn } from '../../lib/utils';

export const MainLayout: React.FC = () => {
  const { user, isLoading } = useAuth();
  const { isRTL } = useLanguage();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#050505]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent neon-glow"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#050505] text-white">
      <Sidebar />
      <div className={cn(
        "flex flex-1 flex-col overflow-hidden transition-all duration-300",
        isRTL ? "mr-72" : "ml-72"
      )}>
        <Navbar />
        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
