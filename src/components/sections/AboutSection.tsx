
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section 
      id="about"
      className="py-20 px-4 premium-gradient relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-foreground bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          About Me
          <motion.div
            className="h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto glass-effect"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p 
              className="text-xl text-foreground leading-relaxed glass-card p-6 rounded-2xl reflection-overlay"
              whileHover={{ scale: 1.02, y: -5 }}
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
                  className="flex items-center space-x-4 glass-card p-4 rounded-xl reflection-overlay group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
                    <item.icon className="h-6 w-6 text-accent relative z-10" />
                  </motion.div>
                  <span className="text-foreground font-medium">
                    <strong className="text-primary">{item.label}:</strong> {item.value}
                  </span>
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
              <Button asChild size="lg" className="w-full glossy-accent text-accent-foreground font-bold shadow-2xl animate-glow">
                <a href="#contact">
                  🚀 Ready to collaborate? Let's connect!
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img 
                src="/lovable-uploads/47058459-6f7e-4d39-bcf6-9b8b0209ffcb.png" 
                alt="Manoj Kumar K" 
                className="rounded-3xl w-full max-w-md mx-auto object-cover glass-card reflection-overlay relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
