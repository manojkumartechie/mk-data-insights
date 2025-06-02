
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Code, BarChart3, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Data Scientist", "AI Engineer", "Business Intelligence Expert", "Machine Learning Specialist"];

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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              i % 3 === 0 ? 'w-3 h-3 bg-blue-400' : 
              i % 3 === 1 ? 'w-2 h-2 bg-purple-400' : 
              'w-1 h-1 bg-cyan-400'
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

      {/* Enhanced Gradient Overlay with better mobile support */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-blue-50/90 via-purple-50/80 to-indigo-100/90 dark:from-gray-900/95 dark:via-blue-900/90 dark:to-gray-800/95"></div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 lg:space-y-8 max-w-5xl mx-auto"
        >
          {/* Enhanced Main Heading with better mobile responsiveness */}
          <motion.div
            variants={itemVariants}
            className="perspective-1000"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white transform-gpu"
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
          
          {/* Enhanced Animated Subtitle with better mobile sizing */}
          <motion.div
            variants={itemVariants}
            className="perspective-1000"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-200 transform-gpu"
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
                  className="text-blue-600 text-3xl lg:text-4xl"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.h2>
          </motion.div>
          
          {/* Enhanced Description with better mobile padding */}
          <motion.div
            variants={itemVariants}
            className="perspective-1000"
          >
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20"
              style={{ transform: "rotateX(5deg)" }}
              whileHover={{ 
                rotateX: 0,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              🚀 Transforming complex data into <strong>actionable insights</strong> that drive business success. 
              Ready to unlock the power of your data and accelerate your growth!
            </motion.p>
          </motion.div>
          
          {/* Enhanced Call to Action Buttons with better mobile layout */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg shadow-2xl border-0">
                <a href="https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing" target="_blank">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Download className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.div>
                  Download My CV
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                borderColor: [
                  "rgba(34, 197, 94, 0.5)",
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-green-500 hover:bg-green-500 hover:text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg shadow-2xl">
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

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                backgroundColor: [
                  "rgba(239, 68, 68, 0.1)",
                  "rgba(239, 68, 68, 0.2)",
                  "rgba(239, 68, 68, 0.1)"
                ]
              }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-red-500 hover:bg-red-500 hover:text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg shadow-2xl">
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

          {/* Enhanced Social Links with better mobile spacing */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {[
              { href: "https://github.com/manojkumartechie", icon: Github, color: "hover:text-gray-900" },
              { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin, color: "hover:text-blue-600" },
              { href: "https://leetcode.com/manojkumartechie/", icon: Code, color: "hover:text-orange-500" },
              { href: "https://www.kaggle.com/manojkumartechie", icon: BarChart3, color: "hover:text-cyan-500" }
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
                <Button asChild variant="ghost" size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-3 sm:p-4">
                  <a href={social.href} target="_blank" className={`transition-colors duration-300 ${social.color}`}>
                    <social.icon className="h-6 sm:h-8 w-6 sm:w-8" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Floating Action Text with better mobile sizing */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="pt-6 sm:pt-8"
          >
            <p className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-300">
              ⬇️ Scroll down to discover my journey ⬇️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
