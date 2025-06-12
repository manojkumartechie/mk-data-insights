import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, ArrowRight, Sparkles, Zap, Brain, Code, Database, Rocket } from "lucide-react";
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
  const x = useSpring(0, springConfig);
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
        
        // Update spring values for 3D tilt effect
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

  const floatingElementVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              i % 4 === 0 ? 'w-3 h-3 bg-blue-400' : 
              i % 4 === 1 ? 'w-2 h-2 bg-purple-400' : 
              i % 4 === 2 ? 'w-1 h-1 bg-cyan-400' :
              'w-4 h-4 bg-pink-400'
            }`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-blue-50/90 via-purple-50/80 to-indigo-100/90 dark:from-gray-900/95 dark:via-blue-900/90 dark:to-gray-800/95"></div>
      
      <div className="relative z-30 max-w-7xl mx-auto mobile-padding">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 lg:space-y-8 max-w-5xl mx-auto"
        >
          {/* Enhanced Main Heading with responsive typography */}
          <motion.div
            variants={itemVariants}
            className="perspective-1000"
          >
            <motion.h1 
              className="mobile-heading font-black text-gray-900 dark:text-white transform-gpu"
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transform: "rotateX(10deg)",
              }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 0,
                textShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              Hi, I'm{" "}
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Manoj Kumar K
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Enhanced Animated Subtitle */}
          <motion.div
            variants={itemVariants}
            className="perspective-1000"
          >
            <motion.h2 
              className="mobile-subheading text-gray-700 dark:text-gray-200 transform-gpu"
              style={{ transform: "rotateX(5deg)" }}
              whileHover={{ rotateX: 0 }}
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                I'm a{" "}
              </motion.span>
              <span className="relative">
                <motion.span 
                  className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-bold"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {typedText}
                </motion.span>
                <motion.span 
                  className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.h2>
          </motion.div>
          
          {/* Enhanced Description with responsive design */}
          <motion.div
            variants={itemVariants}
            className="perspective-1000"
          >
            <motion.p 
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto glass-card p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20"
              style={{ transform: "rotateX(5deg)" }}
              whileHover={{ 
                rotateX: 0,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              🚀 Experienced in identifying and resolving complex data challenges, delivering <strong>actionable insights</strong>, and supporting data-driven decision-making with expertise in machine learning, big data technologies, and financial analytics.
            </motion.p>
          </motion.div>
          
          {/* Enhanced Call to Action Buttons with distinctive shadows */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap responsive-gap justify-center"
          >
            {/* Primary CTA - Download Resume */}
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button asChild size="lg" className="w-full sm:w-auto cta-button-primary text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg border-0 touch-target rounded-2xl">
                <a href="https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing" target="_blank">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Download className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.div>
                  Download My Resume
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </Button>
            </motion.div>
            
            {/* Secondary CTA - View Projects */}
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto cta-button-secondary text-green-100 font-bold px-6 sm:px-8 py-4 text-base sm:text-lg touch-target rounded-2xl">
                <a href="#projects">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.div>
                  View My Projects
                  <ExternalLink className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Tertiary CTA - Let's Work Together */}
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto cta-button-tertiary text-red-100 font-bold px-6 sm:px-8 py-4 text-base sm:text-lg touch-target rounded-2xl">
                <a href="#contact">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.div>
                  Let's Work Together!
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links with responsive design */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-3 sm:space-x-4 lg:space-x-6"
          >
            {[
              { href: "https://github.com/manojkumartechie", icon: Github, color: "hover:text-gray-900" },
              { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin, color: "hover:text-blue-600" },
              { 
                href: "https://leetcode.com/manojkumartechie/", 
                iconUrl: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000",
                name: "LeetCode",
                color: "hover:text-orange-500"
              },
              { 
                href: "https://www.kaggle.com/manojkumartechie", 
                iconUrl: "https://img.icons8.com/?size=100&id=Omk4fWoSmCHm&format=png&color=000000",
                name: "Kaggle",
                color: "hover:text-cyan-500"
              }
            ].map((social, index) => (
              <motion.div
                key={social.href}
                whileHover={{ 
                  scale: 1.3, 
                  y: -10,
                  rotateY: 360,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [0, -10, 0],
                  rotateX: [0, 10, 0],
                }}
                transition={{ 
                  duration: 3 + index * 0.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="perspective-1000"
              >
                <Button asChild variant="ghost" size="lg" className="glass-effect border border-white/30 shadow-xl p-3 sm:p-4 group touch-target">
                  <a href={social.href} target="_blank" className={`transition-colors duration-300 ${social.color}`}>
                    {social.iconUrl ? (
                      <img 
                        src={social.iconUrl} 
                        alt={social.name || ""} 
                        className="h-6 sm:h-8 w-6 sm:w-8 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
                      />
                    ) : (
                      <social.icon className="h-6 sm:h-8 w-6 sm:w-8" />
                    )}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};