import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Image as ImageIcon, 
  Hash, 
  TrendingUp, 
  MoreHorizontal,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { CommunityPost } from '../types';

const mockPosts: CommunityPost[] = [
  {
    id: '1',
    authorId: 'u1',
    authorName: 'سيف الدين طارق',
    authorAvatar: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=256',
    content: 'اليوم أكملت أول 100 كجم في تمرين الرفعة المميتة! التقدم مستمر بفضل توجيهات المدربين في Vulcan Gym. #لياقة #قوة',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    likes: 24,
    comments: [
      { id: 'c1', authorName: 'كريم هاني', content: 'عمل رائع يا بطل! استمر', createdAt: '2024-03-29' }
    ],
    createdAt: '2024-03-29',
    tags: ['training', 'deadlift']
  },
  {
    id: '2',
    authorId: 'u2',
    authorName: 'Sarah Node',
    authorAvatar: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=256',
    content: 'Just analyzed my heart rate telemetry from this mornings HIIT session. The Vulcan Matrix really helps tracking progress.',
    likes: 12,
    comments: [],
    createdAt: '2024-03-29',
    tags: ['hiit', 'telemetry']
  }
];

export const Community: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [posts, setPosts] = useState<CommunityPost[]>(mockPosts);
  const [newPost, setNewPost] = useState('');
  const [activeChannel, setActiveChannel] = useState('general');
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post: CommunityPost = {
      id: Date.now().toString(),
      authorId: 'me',
      authorName: language === 'ar' ? 'المستخدم الحالي' : 'Current User',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: newPost,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString().split('T')[0],
      tags: [activeChannel]
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const toggleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const toggleComments = (id: string) => {
    setExpandedComments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  const handleComment = (postId: string) => {
    const content = commentInputs[postId];
    if (!content?.trim()) return;

    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: Date.now().toString(),
              authorName: language === 'ar' ? 'أنت' : 'You',
              content,
              createdAt: new Date().toISOString().split('T')[0]
            }
          ]
        };
      }
      return p;
    }));
    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  };

  const filteredPosts = activeChannel === 'general' 
    ? posts 
    : posts.filter(p => p.tags?.includes(activeChannel));

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className={cn(isRTL ? "text-right" : "text-left")}>
          <h1 className="text-3xl font-extrabold text-white uppercase italic tracking-tight">{t('community.title')}</h1>
          <p className="text-text-dim uppercase font-black text-[10px] tracking-[0.2em]">{t('community.subtitle')}</p>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-4">
        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-8">
           {/* Post Creator */}
           <div className="glass rounded-[2.5rem] p-8 border border-white/5 space-y-6">
              <div className={cn("flex gap-4", isRTL ? "flex-row-reverse" : "flex-row")}>
                 <div className="h-12 w-12 rounded-2xl glass p-0.5 border border-white/10 shrink-0">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Me" className="h-full w-full object-cover rounded-xl" />
                 </div>
                 <textarea 
                   placeholder={t('community.post_placeholder')}
                   value={newPost}
                   onChange={(e) => setNewPost(e.target.value)}
                   className={cn(
                     "flex-1 bg-white/2 border border-white/5 rounded-2xl p-4 text-white placeholder:text-text-dim focus:outline-none focus:border-accent/40 transition-all resize-none h-24",
                     isRTL ? "text-right" : "text-left"
                   )}
                 />
              </div>
              <div className={cn("flex items-center justify-between", isRTL ? "flex-row-reverse" : "flex-row")}>
                 <div className="flex gap-4">
                    <button className="p-3 rounded-xl bg-white/5 text-text-dim hover:text-white transition-all">
                       <ImageIcon className="h-5 w-5" />
                    </button>
                    <button className="p-3 rounded-xl bg-white/5 text-text-dim hover:text-white transition-all">
                       <Hash className="h-5 w-5" />
                    </button>
                 </div>
                 <button 
                   onClick={handlePost}
                   className="bg-accent text-black px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.2em] neon-glow hover:scale-105 transition-all flex items-center gap-3">
                   <Send className="h-4 w-4" />
                   {t('community.post_action')}
                 </button>
              </div>
           </div>

           {/* Feed */}
           <div className="space-y-8">
              {filteredPosts.length === 0 ? (
                <div className="glass rounded-[2.5rem] p-20 border border-white/5 flex flex-col items-center justify-center gap-6 opacity-30">
                  <Hash className="h-16 w-16" />
                  <p className="text-sm font-black uppercase tracking-[0.3em]">{t('community.no_posts')}</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div key={post.id} className="glass rounded-[2.5rem] p-10 border border-white/5 space-y-8 relative overflow-hidden group">
                    <div className={cn("absolute top-0 w-32 h-32 bg-accent/2 blur-3xl pointer-events-none", isRTL ? "left-0" : "right-0")}></div>
                    
                    <div className={cn("flex items-center justify-between", isRTL ? "flex-row-reverse" : "flex-row")}>
                        <div className={cn("flex items-center gap-4", isRTL ? "flex-row-reverse" : "flex-row")}>
                          <img src={post.authorAvatar} className="h-12 w-12 rounded-2xl object-cover border border-white/10" alt={post.authorName} />
                          <div className={cn(isRTL ? "text-right" : "text-left")}>
                              <h4 className="font-black text-white italic uppercase tracking-tight">{post.authorName}</h4>
                              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{post.createdAt}</p>
                          </div>
                        </div>
                        <button className="p-2 text-text-dim hover:text-white transition-colors">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>

                    <p className={cn(
                      "text-lg text-white/90 leading-relaxed",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {post.content}
                    </p>

                    {post.image && (
                      <div className="rounded-[2rem] overflow-hidden border border-white/10">
                          <img src={post.image} className="w-full h-96 object-cover" alt="Post content" />
                      </div>
                    )}

                    <div className={cn("flex items-center gap-8 pt-6 border-t border-white/5", isRTL ? "flex-row-reverse" : "flex-row")}>
                        <button 
                          onClick={() => toggleLike(post.id)}
                          className="flex items-center gap-3 text-text-dim hover:text-red-500 transition-all group">
                          <Heart className="h-5 w-5 group-hover:fill-current" />
                          <span className="text-xs font-black">{post.likes}</span>
                        </button>
                        <button 
                          onClick={() => toggleComments(post.id)}
                          className="flex items-center gap-3 text-text-dim hover:text-accent transition-all">
                          <MessageSquare className="h-5 w-5" />
                          <span className="text-xs font-black">{post.comments.length}</span>
                        </button>
                        <button className="flex items-center gap-3 text-text-dim hover:text-blue-400 transition-all">
                          <Share2 className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Comments Section */}
                    {expandedComments[post.id] && (
                      <div className="space-y-4 pt-6 border-t border-white/5">
                        <div className={cn("flex gap-4 mb-6", isRTL ? "flex-row-reverse" : "flex-row")}>
                           <input 
                              placeholder={t('community.reply')}
                              value={commentInputs[post.id] || ''}
                              onChange={(e) => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                              onKeyDown={(e) => e.key === 'Enter' && handleComment(post.id)}
                              className={cn(
                                "flex-1 bg-white/2 border border-white/5 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-accent/40",
                                isRTL ? "text-right" : "text-left"
                              )}
                           />
                           <button 
                             onClick={() => handleComment(post.id)}
                             className="p-2 rounded-xl bg-accent text-black hover:scale-105 transition-all">
                              <Send className="h-4 w-4" />
                           </button>
                        </div>
                        {post.comments.map((comment) => (
                          <div key={comment.id} className={cn("flex gap-4 p-4 rounded-2xl bg-white/2", isRTL ? "flex-row-reverse" : "flex-row")}>
                            <div className="h-8 w-8 rounded-lg glass p-0.5 border border-white/10 shrink-0">
                               <div className="w-full h-full bg-accent/20 rounded-md flex items-center justify-center text-[10px] font-black">{comment.authorName[0]}</div>
                            </div>
                            <div className={cn("flex-1", isRTL ? "text-right" : "text-left")}>
                               <p className="text-xs font-black text-white italic uppercase tracking-tighter mb-1">{comment.authorName}</p>
                               <p className="text-xs text-text-dim">{comment.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
           </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
           {/* Channels */}
           <div className="glass rounded-[2rem] p-8 border border-white/5 space-y-6">
              <div className={cn("flex items-center gap-3 mb-2", isRTL ? "flex-row-reverse" : "flex-row")}>
                 <Hash className="h-5 w-5 text-accent" />
                 <h3 className="text-sm font-black text-white uppercase italic tracking-widest">{t('community.channels')}</h3>
              </div>
              <div className="space-y-2">
                 {['general', 'training-intel', 'nutrition-logs', 'announcements'].map((channel) => (
                   <button 
                    key={channel} 
                    onClick={() => setActiveChannel(channel)}
                    className={cn(
                     "w-full p-4 rounded-2xl text-left bg-white/2 border border-transparent hover:border-white/10 transition-all flex items-center gap-3",
                     activeChannel === channel ? "bg-white/10 border-accent/40" : "hover:bg-white/5",
                     isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                   )}>
                      <div className={cn("h-2 w-2 rounded-full", activeChannel === channel ? "bg-accent scale-125 shadow-[0_0_8px_rgba(209,255,0,0.8)]" : "bg-white/20")} />
                      <span className={cn(
                        "text-xs font-bold uppercase tracking-tighter",
                        activeChannel === channel ? "text-accent" : "text-white"
                      )}>#{channel}</span>
                   </button>
                 ))}
              </div>
           </div>

           {/* Trending */}
           <div className="glass rounded-[2rem] p-8 border border-white/5 space-y-6">
              <div className={cn("flex items-center gap-3 mb-2", isRTL ? "flex-row-reverse" : "flex-row")}>
                 <TrendingUp className="h-5 w-5 text-blue-400" />
                 <h3 className="text-sm font-black text-white uppercase italic tracking-widest">{t('community.trending')}</h3>
              </div>
              <div className="space-y-4">
                 {[
                   { tag: 'MaxEffort', reach: '2.4k' },
                   { tag: 'VulcanChallenge', reach: '1.8k' },
                   { tag: 'CleanEats', reach: '942' },
                 ].map((trend) => (
                    <div key={trend.tag} className={cn("flex justify-between items-center px-2", isRTL ? "flex-row-reverse" : "flex-row")}>
                       <span className="text-xs font-black text-white italic">#{trend.tag}</span>
                       <span className="text-[10px] font-bold text-text-dim">{trend.reach} nodes</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
