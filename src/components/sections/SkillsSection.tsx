
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skills = {
    "Programming & Databases": [
      "Python", "R", "C++", "Java", "SQL", "Oracle PL/SQL", "MongoDB", "XML"
    ],
    "Data Analysis & Machine Learning": [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"
    ],
    "Data Visualization & BI": [
      "Tableau", "Power BI", "Excel/VBA", "Matplotlib", "Seaborn"
    ],
    "Big Data & Cloud": [
      "Apache Spark", "Hadoop", "AWS S3/EC2", "Kafka"
    ],
    "DevOps & Tools": [
      "GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow"
    ]
  };

  return (
    <motion.section 
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced background particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-20"
            animate={{
              x: [0, window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
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
          Skills
        </motion.h2>
        
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)"
              }}
              className="perspective-1000"
            >
              <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur-xl relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05), rgba(20, 184, 166, 0.05))",
                      "linear-gradient(90deg, rgba(59, 130, 246, 0.05), rgba(20, 184, 166, 0.05), rgba(6, 182, 212, 0.05))",
                      "linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardTitle className="text-xl text-cyan-400 flex items-center gap-3">
                      <motion.div
                        className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      {category}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: skillIndex * 0.1,
                          type: "spring",
                          damping: 15
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          y: -8,
                          rotate: Math.random() * 10 - 5,
                          boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)"
                        }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-300 hover:from-cyan-900/30 hover:to-blue-900/30 transition-all duration-300 border border-cyan-500/50 relative overflow-hidden"
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.1
                            }}
                          />
                          <span className="relative z-10">{skill}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
