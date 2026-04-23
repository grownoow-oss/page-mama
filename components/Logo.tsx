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
  const strokeColor = '#4A0E1B';
  const strokeWidth = '2px';
  
  // Create a thick bubbly stroke using multiple text shadows
  const bubblyStroke = `
    ${strokeWidth} ${strokeWidth} 0 ${strokeColor},
    -${strokeWidth} -${strokeWidth} 0 ${strokeColor},
    ${strokeWidth} -${strokeWidth} 0 ${strokeColor},
    -${strokeWidth} ${strokeWidth} 0 ${strokeColor},
    ${strokeWidth} 0 0 ${strokeColor},
    -${strokeWidth} 0 0 ${strokeColor},
    0 ${strokeWidth} 0 ${strokeColor},
    0 -${strokeWidth} 0 ${strokeColor},
    1px 1px 0 ${strokeColor},
    -1px -1px 0 ${strokeColor},
    1px -1px 0 ${strokeColor},
    -1px 1px 0 ${strokeColor}
  `;

  return (
    <div className={`flex items-baseline ${className}`} style={{ fontFamily: 'system-ui, sans-serif' }}>
      <span 
        className={`font-black ${currentSize} tracking-tighter text-white`} 
        style={{ textShadow: bubblyStroke }}
      >
        পেজ
      </span>
      <span 
        className={`font-black ${currentSize} tracking-tighter text-[#FFCE0B]`} 
        style={{ textShadow: bubblyStroke }}
      >
        মামা
      </span>
    </div>
  );
}
