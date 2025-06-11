
import { useEffect, useRef } from 'react';

function SimpleFloatingShapes() {
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
        element.style.transform = `translateY(${Math.sin(time + offset) * 10}px) rotate(${time * 20 + offset * 45}deg)`;
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
      <div className="floating-shape absolute top-1/2 left-1/2 w-20 h-20 bg-blue-400 rounded-full opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="floating-shape absolute top-1/3 left-1/4 w-12 h-12 bg-green-400 rounded-full" />
      <div className="floating-shape absolute bottom-1/3 right-1/4 w-16 h-16 bg-yellow-400 rounded-full" />
    </div>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <SimpleFloatingShapes />
    </div>
  );
};
