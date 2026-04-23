import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl',
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-baseline ${className}`} style={{ fontFamily: 'system-ui, sans-serif' }}>
      <span 
        className={`font-black ${currentSize} tracking-tighter text-white drop-shadow-sm`} 
        style={{ 
          WebkitTextStroke: '3px #4A0E1B', 
          paintOrder: 'stroke fill',
        }}
      >
        পেজ
      </span>
      <span 
        className={`font-black ${currentSize} tracking-tighter text-[#FFC107] drop-shadow-sm`} 
        style={{ 
          WebkitTextStroke: '3px #4A0E1B', 
          paintOrder: 'stroke fill',
        }}
      >
        মামা
      </span>
    </div>
  );
}
