import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  external = false,
  icon
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-primary/50',
    secondary: 'bg-secondary hover:bg-secondary-light text-white focus:ring-2 focus:ring-offset-2 focus:ring-secondary/50',
    outline: 'border-2 border-gray-300 hover:border-primary hover:bg-primary/10 text-gray-800 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-60 cursor-not-allowed' 
    : 'transform hover:-translate-y-1 active:translate-y-0';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  // Use motion for animation
  const MotionButton = motion.button;
  const MotionLink = motion.a;
  
  // External link
  if (href && external) {
    return (
      <MotionLink
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        {content}
      </MotionLink>
    );
  }
  
  // Internal link
  if (href) {
    return (
      <Link to={href}>
        <motion.span
          className={buttonClasses}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }
  
  // Button
  return (
    <MotionButton
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -3 }}
      whileTap={disabled ? {} : { y: 0 }}
    >
      {content}
    </MotionButton>
  );
}