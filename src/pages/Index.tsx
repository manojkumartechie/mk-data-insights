import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, BarChart3, Database, FileText, Code, PieChart, Settings, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import { Project3DCard } from "@/components/Project3DCard";
import { PageTransition } from "@/components/PageTransition";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Interactive3DCTA } from "@/components/Interactive3DCTA";

const Index = () => {
  const interests = [
    { icon: BarChart3, title: "Data Visualization", color: "text-yellow-500" },
    { icon: Database, title: "Data Modeling", color: "text-blue-500" },
    { icon: FileText, title: "Statistical Analysis", color: "text-pink-500" },
    { icon: Code, title: "Data Mining", color: "text-green-500" },
    { icon: TestTube, title: "A/B Testing", color: "text-red-500" },
    { icon: PieChart, title: "Business Intelligence", color: "text-cyan-500" },
    { icon: Settings, title: "Data Governance", color: "text-amber-500" },
  ];

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

  const projects = [
    {
      title: "StockSage AI",
      description: "Predictive analytics platform for stock market forecasting",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "ARIMA/LSTM", "Tableau", "APIs", "VaR/Monte Carlo"],
      github: "https://github.com/manojkumartechie/StockSageAI"
    },
    {
      title: "BankGuard Analytics", 
      description: "Real-time fraud detection & customer analytics for banking",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Python", "SQL", "Scikit-learn", "Kafka", "Power BI", "ETL", "Churn/Segmentation"],
      github: "https://github.com/manojkumartechie/BankGuardAnalytics"
    },
    {
      title: "CreditScore Pro",
      description: "Credit risk assessment & loan default prediction model", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "AWS S3", "Airflow", "Risk Scoring"],
      github: "https://github.com/manojkumartechie/CreditScorePro"
    },
    {
      title: "PortfolioOptimizer AI",
      description: "Intelligent portfolio management platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "PyPortfolioOpt", "Apache Spark", "AWS EC2", "Tableau", "Markowitz", "Backtesting"],
      github: "https://github.com/manojkumartechie/PortfolioOptimizerAI"
    },
    {
      title: "FinRisk Monitor",
      description: "Real-time financial analytics & risk management dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Apache Spark", "Kafka", "MongoDB", "Python", "Scikit-learn", "TensorFlow", "Power BI"],
      github: "https://github.com/manojkumartechie/FinRiskMonitor"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navigation />
        <HeroSection />
        
        {/* New Interactive 3D CTA Section */}
        <Interactive3DCTA />

        {/* About Section with enhanced animations */}
        <motion.section 
          id="about"
          className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-500 relative overflow-hidden"
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
                className="absolute w-4 h-4 bg-blue-300 rounded-full opacity-10"
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
              className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 10 }}
            >
              About Me
              <motion.div
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 mx-auto"
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
                  className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
                  whileHover={{ scale: 1.02, rotateX: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
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
                      className="flex items-center space-x-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20"
                      initial={{ opacity: 0, y: 20, rotateX: -20 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <span className="dark:text-gray-300 font-medium"><strong>{item.label}:</strong> {item.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action in About Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring", bounce: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold shadow-2xl">
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
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover border-4 border-white/50"
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
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

        {/* Interests Section */}
        <motion.section 
          className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 text-center h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <interest.icon className={`h-12 w-12 mx-auto mb-4 ${interest.color}`} />
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{interest.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900 dark:text-blue-400">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Project Experience
            </motion.h2>
            
            <motion.p 
              className="text-center text-gray-600 dark:text-gray-400 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Self-Initiated Projects (2025 – Present)
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Project3DCard
                  key={index}
                  {...project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Mail, title: "Email", content: "manojkumar9384@outlook.com", color: "text-blue-400" },
                { icon: Phone, title: "Contact", content: "+91 7826807488", color: "text-green-400" },
                { 
                  icon: ExternalLink, 
                  title: "Social Profiles", 
                  content: "LinkedIn • GitHub • LeetCode • Kaggle", 
                  color: "text-purple-400",
                  links: [
                    { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin },
                    { href: "https://github.com/manojkumartechie", icon: Github },
                    { href: "https://leetcode.com/manojkumartechie/", icon: Code },
                    { href: "https://www.kaggle.com/manojkumartechie", icon: BarChart3 }
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white dark:bg-gray-900 border shadow-lg">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                      </motion.div>
                      <CardTitle className="text-gray-900 dark:text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      {item.links ? (
                        <div className="flex justify-center space-x-4">
                          {item.links.map((link, linkIndex) => (
                            <motion.div
                              key={linkIndex}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button asChild variant="ghost" size="sm">
                                <a href={link.href} target="_blank">
                                  <link.icon className="h-5 w-5" />
                                </a>
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Manoj Kumar K. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
