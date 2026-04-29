import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.messages': 'Messages',
    'nav.leads': 'Leads',
    'nav.members': 'Members',
    'nav.subscriptions': 'Subscriptions',
    'nav.pos': 'Retail POS',
    'nav.workouts': 'Workout Plans',
    'nav.diet_plans': 'Diet Plans',
    'nav.schedule': 'Schedule',
    'nav.inventory': 'Inventory',
    'nav.maintenance': 'Maintenance',
    'nav.campaigns': 'Marketing',
    'nav.feedback': 'Feedback',
    'nav.payments': 'Payments',
    'nav.expenses': 'Expenses',
    'nav.suppliers': 'Suppliers',
    'nav.challenges': 'Challenges',
    'nav.transformations': 'Transformations',
    'nav.reports': 'Reports',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',
    
    'dashboard.title': 'Industrial Matrix',
    'dashboard.subtitle': 'Operational telemetry for Vulcan Gym infrastructure.',
    'dashboard.total_members': 'Total Members',
    'dashboard.active_now': 'Active Now',
    'dashboard.revenue': 'Monthly Revenue',
    'dashboard.attendance_rate': 'Attendance Rate',
    
    'members.title': 'Athlete Registry',
    'members.subtitle': 'Database of registered tactical nodes.',
    'members.add': 'Enlist Athlete',
    'members.name': 'Athlete Name',
    'members.id': 'Identity',
    'members.status': 'Cycle Status',
    
    'leads.title': 'Intelligence Pipeline',
    'leads.subtitle': 'Tracking athlete acquisition and conversion telemetry.',
    'leads.add': 'Acquire Lead',
    
    'pos.title': 'Retail Hub (POS)',
    'pos.subtitle': 'Operational node for direct supply-to-athlete distribution.',
    'pos.cart': 'Active Loadout',
    'pos.inventory': 'Inventory Logs',
    'pos.checkout': 'Initialize Transaction',
    
    'challenges.title': 'Arena Protocols',
    'challenges.subtitle': 'Competitive gamification matrices to push member performance boundaries.',
    'challenges.deploy': 'Deploy Challenge',
    
    'transformations.title': 'Evolution Logs',
    'transformations.subtitle': 'Biometric progression and transformation telemetry.',
    
    'expenses.title': 'Capital Outflow',
    'expenses.subtitle': 'Tracking operational burn rates and fiscal expenditures.',
    
    'suppliers.title': 'Supply Chain',
    'suppliers.subtitle': 'Vendor network and external resource nodes.',
    
    'community.title': 'Athlete Nexus',
    'community.subtitle': 'Real-time feed of collective progress and tactical updates.',
    'community.post_placeholder': 'Log your progress to the matrix...',
    'community.post_action': 'Broadcast Update',
    'community.channels': 'Active Channels',
    'community.trending': 'Trending Protocols',
    'community.likes': 'Likes',
    'community.comments': 'Comments',
    'community.share': 'Share',
    'community.reply': 'Reply',
    'community.no_posts': 'No tactical updates in this channel.',
    
    'nav.community': 'Community',
    'common.add': 'Add',
    'common.search': 'Search',
    'common.status': 'Status',
    'common.actions': 'Actions',
    'common.save': 'Save Changes',
    'common.cancel': 'Cancel',
    'common.total': 'Total',
    'common.date': 'Date',
    'common.loading': 'Connecting to Matrix...',
    
    'profile.title': 'Athlete Identity',
    'profile.subtitle': 'Manage your tactical metadata and access protocols.',
    'settings.language': 'Interface Language',
    'settings.theme': 'Visual Mode',
    'settings.notifications': 'Protocol Alerts'
  },
  ar: {
    'nav.dashboard': 'لوحة التحكم',
    'nav.messages': 'الرسائل',
    'nav.leads': 'العملاء المحتملين',
    'nav.members': 'الأعضاء',
    'nav.subscriptions': 'الاشتراكات',
    'nav.pos': 'نقطة البيع',
    'nav.workouts': 'خطط التدريب',
    'nav.diet_plans': 'خطط التغذية',
    'nav.schedule': 'الجدول الزمني',
    'nav.inventory': 'المخزون',
    'nav.maintenance': 'الصيانة',
    'nav.campaigns': 'التسويق',
    'nav.feedback': 'الآراء',
    'nav.payments': 'المدفوعات',
    'nav.expenses': 'المصاريف',
    'nav.suppliers': 'الموردين',
    'nav.challenges': 'التحديات',
    'nav.transformations': 'التحويلات',
    'nav.reports': 'التقارير',
    'nav.settings': 'الإعدادات',
    'nav.logout': 'تسجيل الخروج',
    
    'dashboard.title': 'المصفوفة الصناعية',
    'dashboard.subtitle': 'بيانات القياس التشغيلية للبنية التحتية لـ Vulcan Gym.',
    'dashboard.total_members': 'إجمالي الأعضاء',
    'dashboard.active_now': 'نشط الآن',
    'dashboard.revenue': 'الإيرادات الشهرية',
    'dashboard.attendance_rate': 'معدل الحضور',
    
    'members.title': 'سجل الرياضيين',
    'members.subtitle': 'قاعدة بيانات العقد التكتيكية المسجلة.',
    'members.add': 'تسجيل رياضي',
    'members.name': 'اسم الرياضي',
    'members.id': 'الهوية',
    'members.status': 'حالة الدورة',
    
    'leads.title': 'خط أنابيب الاستخبارات',
    'leads.subtitle': 'تتبع استقطاب الرياضيين وقياسات التحويل.',
    'leads.add': 'اكتساب عميل محتمل',
    
    'pos.title': 'مركز التجزئة (POS)',
    'pos.subtitle': 'عقدة تشغيلية للتوزيع المباشر من التوريد إلى الرياضي.',
    'pos.cart': 'العتاد النشط',
    'pos.inventory': 'سجلات المخزون',
    'pos.checkout': 'بدء المعاملة',
    
    'challenges.title': 'بروتوكولات الساحة',
    'challenges.subtitle': 'مصفوفات المنافسة لدفع حدود أداء الأعضاء.',
    'challenges.deploy': 'نشر التحدي',
    
    'transformations.title': 'سجلات التطور',
    'transformations.subtitle': 'التقدم البيومتري وقياسات التحول.',
    
    'expenses.title': 'تدفق رأس المال الخارجي',
    'expenses.subtitle': 'تتبع معدلات الحرق التشغيلي والنفقات المالية.',
    
    'suppliers.title': 'سلسلة التوريد',
    'suppliers.subtitle': 'شبكة البائعين وعقد الموارد الخارجية.',
    
    'community.title': 'رابطة الرياضيين',
    'community.subtitle': 'خلاصة فورية للتقدم الجماعي والتحديثات التكتيكية.',
    'community.post_placeholder': 'سجل تقدمك في المصفوفة...',
    'community.post_action': 'بث التحديث',
    'community.channels': 'القنوات النشطة',
    'community.trending': 'البروتوكولات الشائعة',
    'community.likes': 'الإعجابات',
    'community.comments': 'التعليقات',
    'community.share': 'مشاركة',
    'community.reply': 'رد',
    'community.no_posts': 'لا توجد تحديثات تكتيكية في هذه القناة.',
    
    'nav.community': 'المجتمع',
    'common.add': 'إضافة',
    'common.search': 'بحث',
    'common.status': 'الحالة',
    'common.actions': 'الإجراءات',
    'common.save': 'حفظ التغييرات',
    'common.cancel': 'إلغاء',
    'common.total': 'الإجمالي',
    'common.date': 'التاريخ',
    'common.loading': 'الاتصال بالمصفوفة...',
    
    'profile.title': 'هوية الرياضي',
    'profile.subtitle': 'إدارة البيانات الوصفية التكتيكية وبروتوكولات الوصول الخاصة بك.',
    'settings.language': 'لغة الواجهة',
    'settings.theme': 'الوضع البصري',
    'settings.notifications': 'تنبيهات البروتوكول'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved as Language) || 'ar';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
