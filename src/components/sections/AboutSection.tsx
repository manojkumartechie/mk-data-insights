
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section 
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Enhanced 3D animated background elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-15"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              z: Math.random() * 100,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              z: [null, Math.random() * 200, Math.random() * 100],
              scale: [1, 2, 1],
              rotate: [0, 360, 720],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${i % 4 === 0 ? 'w-12 h-12' : i % 4 === 1 ? 'w-8 h-8' : i % 4 === 2 ? 'w-16 h-4' : 'w-10 h-10'} bg-gradient-to-br from-cyan-400/10 to-purple-500/10 ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg' : 'rounded-none rotate-45'}`}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotateX: [0, 360],
              rotateY: [0, -360],
              rotateZ: [0, 180],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white perspective-1000"
          initial={{ opacity: 0, y: 100, scale: 0.5, rotateX: -45 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateX: 10, y: -15 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent bg-300%"
          >
            About Me
          </motion.span>
          <motion.div
            className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mt-6 mx-auto relative"
            initial={{ width: 0, scale: 0 }}
            whileInView={{ width: "150px", scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            viewport={{ once: true }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(59, 130, 246, 0.6)",
                "0 0 50px rgba(139, 92, 246, 0.6)",
                "0 0 30px rgba(6, 182, 212, 0.6)",
                "0 0 30px rgba(59, 130, 246, 0.6)"
              ]
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -150, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", damping: 15 }}
            viewport={{ once: true }}
            className="space-y-8 perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02, 
                rotateX: 5, 
                boxShadow: "0 35px 70px rgba(0,0,0,0.25)",
                y: -10
              }}
              transition={{ duration: 0.4, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
                    "linear-gradient(90deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05))",
                    "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <span className="relative z-10">
                🎯 Experienced in identifying and resolving complex data challenges, delivering actionable insights, and supporting data-driven decision-making. 
                <br/><br/>
                💡 Strong communicator and collaborative team player with proven abilities in Problem Solving, Teamwork, Communication, Time Management, and Continuous Learning.
              </span>
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: Calendar, label: "Birthday", value: "02 April 2004" },
                { icon: Phone, label: "Phone", value: "+91 7826807488" },
                { icon: MapPin, label: "City", value: "Dindigul, Tamil Nadu, India" },
                { icon: Mail, label: "Email", value: "manojkumar9384@outlook.com" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center space-x-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 relative overflow-hidden group perspective-1000"
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8, 
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    z: 20
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 180,
                      y: -5
                    }}
                    className="relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  
                  <motion.span 
                    className="dark:text-gray-300 font-medium text-lg relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <strong>{item.label}:</strong> {item.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", bounce: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold shadow-2xl text-lg py-6">
                  <a href="#contact">
                    🚀 Ready to collaborate? Let's connect!
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 150, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", delay: 0.3, damping: 15 }}
            viewport={{ once: true }}
            className="flex justify-center perspective-1000"
          >
            <motion.div
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced 3D glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-3xl blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Multiple layered glows */}
              <motion.div
                className="absolute inset-2 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-3xl blur-2xl opacity-30"
                animate={{
                  scale: [1.1, 1.4, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [360, 0, 360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <motion.img 
                src="/lovable-uploads/47058459-6f7e-4d39-bcf6-9b8b0209ffcb.png" 
                alt="Manoj Kumar K" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover border-4 border-white/50 relative z-10"
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 15,
                  rotateX: 5,
                  boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                  z: 50
                }}
                animate={{
                  y: [0, -25, 0],
                  rotateZ: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              />
              
              {/* Floating particles around image */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      x: [Math.cos(i * 30) * 150, Math.cos(i * 30 + 180) * 150],
                      y: [Math.sin(i * 30) * 150, Math.sin(i * 30 + 180) * 150],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
