import React from 'react';
import { Facebook, Twitter, Instagram, Share2, Link2, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title, className }) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    // Instagram doesn't have a direct "share URL" intent like FB/Twitter, so we promote copying
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a 
        href={shareLinks.facebook} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:text-blue-500 transition-all border border-white/5"
        title="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a 
        href={shareLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-xl bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 transition-all border border-white/5"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <button 
        onClick={handleCopy}
        className="p-2 rounded-xl bg-white/5 hover:bg-accent/20 hover:text-accent transition-all border border-white/5"
        title="Copy Link"
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
      {navigator.share && (
        <button 
          onClick={handleNativeShare}
          className="p-2 rounded-xl bg-accent text-black hover:scale-110 transition-all border border-accent/20"
          title="More Options"
        >
          <Share2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
