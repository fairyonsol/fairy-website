import React from 'react';

interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  className = '',
  variant = 'primary'
}) => {
  const baseClasses = `
    relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-300
    transform hover:scale-105 group cursor-pointer border
    text-white shadow-lg
  `;

  const variantClasses = variant === 'secondary' 
    ? 'bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-blue-500/20'
    : 'bg-gradient-to-r from-purple-600/80 to-pink-600/80 border-purple-500/50 hover:border-purple-400/70 hover:shadow-purple-500/30';

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GlowingButton;