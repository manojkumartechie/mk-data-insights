import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Enhanced3DShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const shapes = containerRef.current.querySelectorAll('.floating-shape');
    let animationId: number;
    
    const animate = () => {
      const time = Date.now() * 0.001;
      shapes.forEach((shape, index) => {
        const element = shape as HTMLElement;
        const offset = index * 0.5;
        const x = Math.sin(time * 0.5 + offset) * 20;
        const y = Math.sin(time + offset) * 15;
        const rotation = time * 20 + offset * 45;
        const scale = 1 + Math.sin(time * 2 + offset) * 0.1;
        
        element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
      });
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Main central shape */}
      <motion.div 
        className="floating-shape absolute top-1/2 left-1/2 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 -translate-x-1/2 -translate-y-1/2 shadow-2xl"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Secondary shapes */}
      <motion.div 
        className="floating-shape absolute top-1/4 left-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg opacity-50 shadow-xl"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
      
      <motion.div 
        className="floating-shape absolute bottom-1/3 right-1/4 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-50 shadow-xl"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
      />
      
      <motion.div 
        className="floating-shape absolute top-3/4 left-3/4 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg opacity-40 shadow-lg"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
      />
      
      <motion.div 
        className="floating-shape absolute top-1/6 right-1/3 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full opacity-30 shadow-md"
        initial={{ scale: 0, rotate: 270 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      />
      
      {/* Additional ambient shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`floating-shape absolute w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-gradient-to-br ${
            i % 4 === 0 ? 'from-purple-300 to-blue-400' :
            i % 4 === 1 ? 'from-cyan-300 to-green-400' :
            i % 4 === 2 ? 'from-yellow-300 to-orange-400' :
            'from-pink-300 to-red-400'
          } rounded-full opacity-20 shadow-sm`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.5 + i * 0.1, 
            ease: "easeOut" 
          }}
        />
      ))}
    </div>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0 bg-grid opacity-30"
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating shapes */}
      <Enhanced3DShapes />
      
      {/* Ambient light effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};