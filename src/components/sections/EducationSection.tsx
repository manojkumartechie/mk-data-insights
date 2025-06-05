
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe, Heart, TrendingUp, Brain, BarChart3 } from "lucide-react";

export const EducationSection = () => {
  const learningAreas = [
    { 
      icon: BarChart3, 
      title: "Data Analysis & Machine Learning", 
      description: "Advanced statistical methods, predictive modeling, and deep learning algorithms"
    },
    { 
      icon: TrendingUp, 
      title: "Big Data & Cloud Technologies", 
      description: "Apache Spark, Hadoop, AWS services, and scalable data processing"
    },
    { 
      icon: Brain, 
      title: "Financial Analytics", 
      description: "Risk assessment, portfolio optimization, and fraud detection systems"
    },
  ];

  const languages = [
    { name: "English", level: "Professional", flag: "🇬🇧" },
    { name: "Tamil", level: "Native", flag: "🇮🇳" },
  ];

  const interests = [
    { icon: BarChart3, name: "Data Science", color: "text-blue-500" },
    { icon: Brain, name: "Machine Learning", color: "text-purple-500" },
    { icon: TrendingUp, name: "Financial Analytics", color: "text-green-500" },
    { icon: Heart, name: "Continuous Learning", color: "text-red-500" },
  ];

  return (
    <motion.section 
      id="education"
      className="py-12 sm:py-16 lg:py-20 mobile-padding bg-muted/50 transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="mobile-heading font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education & Learning
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-8 sm:mb-12 mobile-text max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Self-Learner in Data Science & Analytics • YouTube, Online Courses, Internet • 2021–Present
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Self-Learning Journey */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Self-Learning Journey</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground mobile-text mb-6">
                  <p>
                    Committed to continuous learning and professional development through self-directed study 
                    and hands-on project implementation since 2021.
                  </p>
                  <p>
                    Extensively studied and implemented concepts in data analysis, machine learning, big data 
                    technologies, cloud computing (AWS), database management, DevOps practices, and advanced 
                    statistical methods.
                  </p>
                  <p>
                    Engaged in practical application through real-world projects, staying current with 
                    industry trends and emerging technologies in the data science ecosystem.
                  </p>
                </div>

                <div className="grid gap-4">
                  <h4 className="font-semibold text-foreground mobile-text">Learning Areas</h4>
                  {learningAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/30"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        <area.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground text-sm">{area.title}</h5>
                        <p className="text-muted-foreground text-xs mt-1">{area.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages & Interests */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Languages */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{language.flag}</span>
                        <span className="font-medium text-foreground text-sm">{language.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {language.level}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Interests</h3>
                </div>
                <div className="grid gap-2">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <interest.icon className={`h-4 w-4 ${interest.color}`} />
                      <span className="text-foreground text-sm font-medium">{interest.name}</span>
                    </motion.div>
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
