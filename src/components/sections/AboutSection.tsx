
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section 
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-cyan-400 rounded-full opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateX: 10 }}
        >
          About Me
          <motion.div
            className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-6 perspective-1000"
          >
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-cyan-500/20"
              whileHover={{ scale: 1.02, rotateX: 5, boxShadow: "0 25px 50px rgba(6, 182, 212, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              🎯 Experienced in identifying and resolving complex data challenges, delivering actionable insights, and supporting data-driven decision-making. 
              <br/><br/>
              💡 Strong communicator and collaborative team player with proven abilities in Problem Solving, Teamwork, Communication, Time Management, and Continuous Learning.
            </motion.p>
            
            <div className="space-y-4">
              {[
                { icon: Calendar, label: "Birthday", value: "02 April 2004" },
                { icon: Phone, label: "Phone", value: "+91 7826807488" },
                { icon: MapPin, label: "City", value: "Dindigul, Tamil Nadu, India" },
                { icon: Mail, label: "Email", value: "manojkumar9384@outlook.com" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center space-x-4 bg-gray-800/60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-cyan-500/20"
                  initial={{ opacity: 0, y: 20, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(6, 182, 212, 0.15)" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </motion.div>
                  <span className="text-gray-300 font-medium"><strong className="text-cyan-400">{item.label}:</strong> {item.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", bounce: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold shadow-2xl">
                <a href="#contact">
                  🚀 Ready to collaborate? Let's connect!
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center perspective-1000"
          >
            <motion.img 
              src="/lovable-uploads/47058459-6f7e-4d39-bcf6-9b8b0209ffcb.png" 
              alt="Manoj Kumar K" 
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover border-4 border-cyan-500/50"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)"
              }}
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
