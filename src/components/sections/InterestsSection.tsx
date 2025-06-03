
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, FileText, Code, PieChart, Settings, TestTube } from "lucide-react";

export const InterestsSection = () => {
  const interests = [
    { icon: BarChart3, title: "Data Visualization", color: "text-cyan-400" },
    { icon: Database, title: "Data Modeling", color: "text-blue-400" },
    { icon: FileText, title: "Statistical Analysis", color: "text-teal-400" },
    { icon: Code, title: "Data Mining", color: "text-green-400" },
    { icon: TestTube, title: "A/B Testing", color: "text-cyan-500" },
    { icon: PieChart, title: "Business Intelligence", color: "text-blue-500" },
    { icon: Settings, title: "Data Governance", color: "text-teal-500" },
  ];

  return (
    <motion.section 
      className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Interests
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
              }}
              className="perspective-1000"
            >
              <Card className="hover:shadow-lg transition-all duration-300 text-center h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 shadow-xl">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <interest.icon className={`h-12 w-12 mx-auto mb-4 ${interest.color} relative z-10`} />
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-white"
                    whileHover={{ scale: 1.05 }}
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
