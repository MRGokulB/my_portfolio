import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  iconEffect = 'none', // 'slide', 'scale', 'none'
  href,
  to,
  target,
  disabled = false
}) => {
  const baseStyles = "group inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-brand-blue to-brand-blue-2 text-white shadow-[0_8px_30px_rgba(13,110,253,0.12)] hover:shadow-[0_14px_40px_rgba(13,110,253,0.18)]",
    secondary: "bg-white text-gray-700 border border-gray-300 shadow-sm hover:border-blue-600 hover:text-blue-700 hover:shadow-md",
    outline: "border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-dark-100",
    ghost: "text-accent-blue hover:bg-accent-blue/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const iconStyles = {
    slide: "transition-transform duration-300 group-hover:translate-x-1",
    scale: "transition-transform duration-300 group-hover:scale-110",
    none: ""
  };

  const ButtonContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <span className={`flex items-center ${iconStyles[iconEffect]}`}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={`flex items-center ${iconStyles[iconEffect]}`}>{icon}</span>
      )}
    </>
  );

  const hoverAnimation = disabled ? {} : { y: -2 };
  const tapAnimation = disabled ? {} : { scale: 0.98 };

  if (to) {
    const MotionLink = motion.create(Link);
    return (
      <MotionLink
        to={to}
        target={target}
        className={buttonClasses}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <ButtonContent />
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={buttonClasses}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default Button;