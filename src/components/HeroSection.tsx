
import { motion } from "framer-motion";
import { Hero3D } from "./Hero3D";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 2, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: -100, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 perspective-1000"
              whileHover={{ scale: 1.05, rotateX: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent bg-300% bg-left"
              >
                Manoj Kumar K
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.h2 
            className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.span
              animate={{ 
                color: ["#374151", "#3B82F6", "#8B5CF6", "#374151"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="dark:text-gray-300"
            >
              Data Analyst & Machine Learning Enthusiast
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
          >
            Transforming data into actionable insights through advanced analytics, 
            machine learning, and predictive modeling. Passionate about solving 
            complex business challenges with data-driven solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", bounce: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl">
                <a href="#projects">
                  🚀 View My Projects
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white shadow-xl">
                <a href="#contact">
                  💼 Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center lg:justify-end perspective-1000"
          initial={{ opacity: 0, x: 100, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* 3D glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <Hero3D />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
