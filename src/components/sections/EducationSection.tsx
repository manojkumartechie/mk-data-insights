
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, Brain, Target } from "lucide-react";

export const EducationSection = () => {
  const educationItems = [
    {
      icon: BookOpen,
      title: "Self-Learning Journey",
      period: "2021 – Present",
      description: "Continuous learning through YouTube, online courses, and internet resources focusing on data science, machine learning, and analytics.",
      skills: ["Data Analysis", "Machine Learning", "Big Data", "Cloud (AWS)", "Database Management", "DevOps", "Statistical Methods"]
    },
    {
      icon: Brain,
      title: "Hands-on Projects",
      period: "2021 – Present",
      description: "Practical application of learned concepts through self-initiated projects in financial analytics, fraud detection, and portfolio optimization.",
      skills: ["Project Management", "Problem Solving", "Real-world Application", "Industry Best Practices"]
    },
    {
      icon: Globe,
      title: "Open Source Contributions",
      period: "Ongoing",
      description: "Active participation in open-source projects and continuous learning to stay current with emerging technologies.",
      skills: ["Collaboration", "Code Review", "Version Control", "Community Engagement"]
    },
    {
      icon: Target,
      title: "Professional Development",
      period: "Continuous",
      description: "Focused on developing both technical and soft skills essential for data science and analytics roles.",
      skills: ["Communication", "Teamwork", "Time Management", "Continuous Learning"]
    }
  ];

  const languages = [
    { language: "English", level: "Professional" },
    { language: "Tamil", level: "Native" }
  ];

  const interests = [
    "Data Science", "Machine Learning", "Financial Analytics", "Open Source", "Continuous Learning"
  ];

  return (
    <motion.section 
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 transition-colors duration-500 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education & Development
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full"
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl text-purple-900 dark:text-purple-300">
                        {item.title}
                      </CardTitle>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-900 dark:text-purple-300 flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {lang.language}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">
                        {lang.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-900 dark:text-purple-300 flex items-center gap-3">
                  <Target className="h-6 w-6" />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium shadow-lg"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
