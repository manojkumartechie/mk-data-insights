
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skills = {
    "Programming & DBs": [
      "Python", "R", "Java", "SQL (PL/SQL)", "MongoDB", "XML"
    ],
    "Data Analysis & ML": [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"
    ],
    "Visualization & BI": [
      "Tableau", "Power BI", "Excel (VBA)"
    ],
    "Big Data & Cloud": [
      "Apache Spark", "Hadoop", "AWS (S3, EC2)"
    ],
    "DevOps & Tools": [
      "GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow", "Kafka"
    ],
    "Data Handling": [
      "Data Cleaning", "Wrangling", "ETL", "Data Quality"
    ],
    "Statistics": [
      "Regression", "Hypothesis Testing", "A/B Testing", "Trend Analysis"
    ],
    "Soft Skills": [
      "Problem Solving", "Teamwork", "Communication", "Time Management", "Learning"
    ]
  };

  // Enhanced animation variants for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      rotateX: -15,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05
      }
    },
    hover: {
      scale: 1.02,
      y: -8,
      rotateX: 2,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-500 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Enhanced background particles with better performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [0, 1.5, 0],
              rotate: [0, 360],
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
          Technical Skills
        </motion.h2>
        
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="perspective-1000"
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl relative overflow-hidden transform-gpu">
                {/* Animated background gradient with better performance */}
                <motion.div
                  className="absolute inset-0 opacity-50"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.03), rgba(139, 92, 246, 0.03), rgba(6, 182, 212, 0.03))",
                      "linear-gradient(90deg, rgba(139, 92, 246, 0.03), rgba(6, 182, 212, 0.03), rgba(59, 130, 246, 0.03))",
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.03), rgba(59, 130, 246, 0.03), rgba(139, 92, 246, 0.03))"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      x: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <CardTitle className="text-xl text-blue-900 dark:text-blue-400 flex items-center gap-3">
                      <motion.div
                        className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
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
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.15,
                          y: -8,
                          rotate: Math.random() * 10 - 5,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                          transition: {
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }}
                        className="relative group cursor-pointer"
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 relative overflow-hidden transform-gpu"
                        >
                          {/* Enhanced shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.1,
                              ease: "linear"
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
