
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, FileText, Code, PieChart, Settings, TestTube } from "lucide-react";

export const InterestsSection = () => {
  const interests = [
    { icon: BarChart3, title: "Data Visualization", color: "text-yellow-500" },
    { icon: Database, title: "Data Modeling", color: "text-blue-500" },
    { icon: FileText, title: "Statistical Analysis", color: "text-pink-500" },
    { icon: Code, title: "Data Mining", color: "text-green-500" },
    { icon: TestTube, title: "A/B Testing", color: "text-red-500" },
    { icon: PieChart, title: "Business Intelligence", color: "text-cyan-500" },
    { icon: Settings, title: "Data Governance", color: "text-amber-500" },
  ];

  // Enhanced animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.8,
      rotateY: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -15,
      rotateY: 10,
      rotateX: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [0, 1.5, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Interests
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="perspective-1000"
            >
              <Card className="hover:shadow-lg transition-all duration-300 text-center h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl transform-gpu">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2,
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <interest.icon className={`h-12 w-12 mx-auto mb-4 ${interest.color} relative z-10`} />
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-gray-900 dark:text-white"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {interest.title}
                  </motion.h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
