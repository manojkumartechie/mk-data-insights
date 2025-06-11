import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, ArrowRight, Sparkles, Zap, Brain, Code, Database } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const words = ["Data Scientist", "AI Engineer", "ML Specialist", "Analytics Expert"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        
        setMousePosition({ x: mouseX, y: mouseY });
        
        const tiltX = (mouseY / rect.height) * -10;
        const tiltY = (mouseX / rect.width) * 10;
        
        rotateX.set(tiltX);
        rotateY.set(tiltY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
        duration: 1.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated particles"
      style={{ y, opacity }}
    >
      {/* Dynamic 3D Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ rotateX, rotateY }}
      >
        <Hero3D />
      </motion.div>
      
      {/* Floating Elements with 3D Effects */}
      <div className="absolute inset-0 z-10 perspective-1000">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute transform-3d ${
              i % 4 === 0 ? 'w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full glow' : 
              i % 4 === 1 ? 'w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full glow-accent' : 
              i % 4 === 2 ? 'w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full' :
              'w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full'
            }`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0,
              rotateZ: 0
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              rotateZ: [0, 360, 720],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            whileHover={{ scale: 2, opacity: 1 }}
          />
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 z-20 glass-subtle bg-grid"></div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 lg:space-y-12 perspective-2000"
        >
          {/* Main Heading */}
          <motion.div
            variants={textVariants}
            className="perspective-1000"
          >
            <motion.h1 
              className="text-responsive-4xl font-black text-gradient mb-4"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              Manoj Kumar K
            </motion.h1>
            
            <motion.div 
              className="text-responsive-2xl font-bold text-gradient-accent h-16 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="mono">
                {typedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-responsive-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Transforming complex data into actionable insights with cutting-edge AI and machine learning solutions. 
            Building the future of intelligent analytics, one algorithm at a time.
          </motion.p>

          {/* Floating Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 py-8"
          >
            {[
              { icon: Brain, color: "from-purple-400 to-pink-400", delay: 0 },
              { icon: Database, color: "from-blue-400 to-cyan-400", delay: 0.2 },
              { icon: Code, color: "from-emerald-400 to-teal-400", delay: 0.4 },
              { icon: Zap, color: "from-yellow-400 to-orange-400", delay: 0.6 }
            ].map(({ icon: Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className={`p-4 glass rounded-2xl bg-gradient-to-r ${color} hover-float`}
                initial={{ opacity: 0, y: 50, rotateY: -180 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay, duration: 0.8, type: "spring" }}
                whileHover={{ 
                  scale: 1.2, 
                  rotateY: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button
                size="lg"
                className="glass-strong text-white font-bold px-8 py-4 text-lg rounded-2xl bg-gradient-to-r from-primary to-accent hover-lift glow group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-2 border-primary/50 text-primary font-bold px-8 py-4 text-lg rounded-2xl hover-lift hover:glow group"
              >
                <span className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5" />
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { href: "https://github.com/manojkumartechie", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/manojkumartechie", icon: Linkedin, label: "LinkedIn" }
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl hover-float group"
                whileHover={{ 
                  scale: 1.2, 
                  rotateY: 360,
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto relative"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};