import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Sparkles, Rocket } from 'lucide-react';

function Enhanced3DCTAElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const shapes = containerRef.current.querySelectorAll('.cta-shape');
    let animationId: number;
    
    const animate = () => {
      const time = Date.now() * 0.001;
      shapes.forEach((shape, index) => {
        const element = shape as HTMLElement;
        const offset = index * 0.8;
        const x = Math.sin(time * 0.3 + offset) * 25;
        const y = Math.sin(time + offset) * 20;
        const rotation = time * 15 + offset * 40;
        const scale = 1 + Math.sin(time * 1.5 + offset) * 0.15;
        
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <motion.div 
        className="cta-shape absolute top-1/2 left-1/2 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2 shadow-2xl"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div 
        className="cta-shape absolute top-1/3 left-1/4 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg opacity-60 shadow-xl"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
      <motion.div 
        className="cta-shape absolute bottom-1/3 right-1/4 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-60 shadow-xl"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
      />
      
      {/* Additional floating elements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className={`cta-shape absolute w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-gradient-to-br ${
            i % 3 === 0 ? 'from-purple-400 to-pink-500' :
            i % 3 === 1 ? 'from-cyan-400 to-blue-500' :
            'from-yellow-400 to-red-500'
          } rounded-full opacity-40 shadow-lg`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ 
            duration: 1, 
            delay: 1 + i * 0.2, 
            ease: "easeOut" 
          }}
        />
      ))}
    </div>
  );
}

export const Interactive3DCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Enhanced3DCTAElements />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main CTA Content */}
      <div className="relative z-30 max-w-6xl mx-auto mobile-padding text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Main CTA Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-white mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(45deg, #60A5FA, #F59E0B, #12D640, #EF4444)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Ready to Transform
            <br />
            Your Data?
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-blue-100 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Let's unlock powerful insights from your data and drive your business to new heights!
          </motion.p>
          
          {/* Interactive CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap responsive-gap justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 60px rgba(59, 130, 246, 0.8)",
                  "0 0 30px rgba(59, 130, 246, 0.5)"
                ],
                y: [0, -8, 0],
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto glossy-button text-white font-bold px-6 sm:px-8 lg:px-12 py-4 sm:py-6 text-base sm:text-lg lg:text-xl shadow-2xl border-0 rounded-2xl touch-target"
              >
                <a href="#contact">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="mr-2 sm:mr-3 lg:mr-4 h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8" />
                  </motion.div>
                  Start Your Data Journey
                  <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8" />
                </a>
              </Button>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: [
                  "rgba(34, 197, 94, 0.5)",
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.5)"
                ],
                y: [0, -5, 0],
              }}
              transition={{ 
                borderColor: { duration: 2.5, repeat: Infinity },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-4 border-green-400 glass-effect hover:bg-green-400 hover:text-gray-900 text-green-100 font-bold px-6 sm:px-8 lg:px-12 py-4 sm:py-6 text-base sm:text-lg lg:text-xl shadow-2xl rounded-2xl touch-target"
              >
                <a href="#projects">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="mr-2 sm:mr-3 lg:mr-4 h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8" />
                  </motion.div>
                  Explore My Work
                  <Zap className="ml-2 sm:ml-3 lg:ml-4 h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Floating Action Indicators */}
          <motion.div
            className="flex flex-wrap justify-center responsive-gap mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {[
              { icon: "📊", text: "Data Analytics" },
              { icon: "🤖", text: "AI Solutions" },
              { icon: "📈", text: "Business Growth" },
              { icon: "🚀", text: "Innovation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                whileHover={{ scale: 1.3, y: -20 }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">{item.icon}</div>
                <p className="text-blue-200 font-semibold text-xs sm:text-sm lg:text-base">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};