import React from 'react';
import { cn } from '../utils/cn';

interface CalcButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'operator' | 'secondary' | 'submit';
  children: React.ReactNode;
}

export function CalcButton({
  variant = 'default',
  className,
  children,
  ...props
}: CalcButtonProps) {
  return (
    <button
      className={cn(
        'h-16 text-2xl font-medium rounded-full transition-all duration-200 active:scale-95',
        variant === 'default' && 'bg-gray-800 text-white hover:bg-gray-700',
        variant === 'operator' && 'bg-orange-500 text-white hover:bg-orange-400',
        variant === 'secondary' && 'bg-gray-600 text-white hover:bg-gray-500',
        variant === 'submit' && 'bg-green-600 text-white hover:bg-green-500 disabled:opacity-50 disabled:hover:bg-green-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}