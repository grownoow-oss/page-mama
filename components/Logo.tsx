import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'inline';
  textOnly?: boolean;
}

export default function Logo({ className = '', size = 'md', textOnly = false }: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    inline: 'text-[inherit]',
  };

  const currentSize = sizeClasses[size];
  
  return (
    <div className={`${!textOnly ? 'flex items-center gap-2.5' : 'inline-block'} ${className}`}>
      {/* Sleek Icon Mark */}
      {!textOnly && (
        <div className="relative group shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#0F172A] rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6 shadow-xl shadow-black/5">
            <div className="w-6 h-6 bg-[#FF5E00] rounded-lg rotate-12" />
          </div>
        </div>
      )}

      {/* Modern Bengali Typography */}
      <div className={`font-black ${currentSize} tracking-tighter text-[#0F172A] leading-none pt-1`}>
        পেজ<span className="text-[#FF5E00]">মামা</span>
      </div>
    </div>
  );
}
