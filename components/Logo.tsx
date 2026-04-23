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
    <div className={`flex items-baseline ${className}`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <span className={`font-black ${currentSize} tracking-tight text-[#6366F1]`}>
        পেজ
      </span>
      <span className={`font-black ${currentSize} tracking-tight text-[#FF5E00]`}>
        মামা
      </span>
    </div>
  );
}
