
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
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced 3D background particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-10"
            animate={{
              x: [0, window.innerWidth, -100],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotate: [0, 360, 720],
              scale: [0.5, 2, 0.5],
              z: [0, 100, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className={`absolute ${i % 3 === 0 ? 'w-8 h-8' : i % 3 === 1 ? 'w-6 h-6' : 'w-10 h-10'} bg-gradient-to-br from-cyan-400/20 to-blue-500/20 ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'}`}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white perspective-1000"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateX: 10, y: -10 }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent bg-300%"
          >
            Skills & Technologies
          </motion.span>
          <motion.div
            className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mt-4 mx-auto"
            initial={{ width: 0, scale: 0 }}
            whileInView={{ width: "200px", scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
          />
        </motion.h2>
        
        <div className="space-y-10">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                type: "spring",
                damping: 12,
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                rotateX: 5,
                boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                z: 50
              }}
              className="perspective-1000 transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl relative overflow-hidden group">
                {/* Dynamic 3D background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
                      "linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                      "linear-gradient(180deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))"
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Floating mini particles inside cards */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      animate={{
                        x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity
                      }}
                    />
                  ))}
                </div>
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ x: 15, scale: 1.05 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <CardTitle className="text-2xl text-blue-900 dark:text-blue-400 flex items-center gap-4">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          rotate: [0, 180, 360],
                          boxShadow: [
                            "0 0 10px rgba(59, 130, 246, 0.5)",
                            "0 0 20px rgba(139, 92, 246, 0.5)",
                            "0 0 10px rgba(6, 182, 212, 0.5)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        whileHover={{ scale: 1.5, rotate: 180 }}
                      >
                        <motion.div
                          className="absolute inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      <motion.span
                        whileHover={{ letterSpacing: "0.05em" }}
                        transition={{ duration: 0.3 }}
                      >
                        {category}
                      </motion.span>
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-4">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ 
                          delay: skillIndex * 0.1,
                          type: "spring",
                          damping: 15,
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          y: -12,
                          rotateY: 15,
                          rotateX: 10,
                          z: 30,
                          boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
                        }}
                        viewport={{ once: true }}
                        className="relative group/skill perspective-1000"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-cyan-900/40 text-blue-800 dark:text-blue-200 border-2 border-blue-200/50 dark:border-blue-700/50 relative overflow-hidden cursor-pointer transition-all duration-300 text-sm px-4 py-2"
                        >
                          {/* 3D shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                            initial={{ x: '-200%' }}
                            whileHover={{ x: '200%' }}
                            transition={{ 
                              duration: 0.8,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Pulsing glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded opacity-0 group-hover/skill:opacity-100"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0, 0.3, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.1
                            }}
                          />
                          
                          <span className="relative z-10 font-semibold">{skill}</span>
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
