import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false,
  delay = 0 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      className={`
        glass-effect rounded-xl p-6 
        ${glow ? 'glow-effect' : ''} 
        ${hover ? 'cursor-pointer' : ''} 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;