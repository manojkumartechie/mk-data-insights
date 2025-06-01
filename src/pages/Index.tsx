
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, BarChart3, Database, FileText, Code, PieChart, Settings, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import { Project3DCard } from "@/components/Project3DCard";
import { PageTransition } from "@/components/PageTransition";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";

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

        {/* About Section */}
        <motion.section 
          id="about"
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
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Experienced in identifying and resolving complex data challenges, delivering actionable insights, and supporting data-driven decision-making. Strong communicator and collaborative team player with proven abilities in Problem Solving, Teamwork, Communication, Time Management, and Continuous Learning.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Calendar, label: "Birthday", value: "02 April 2004" },
                    { icon: Phone, label: "Phone", value: "+91 7826807488" },
                    { icon: MapPin, label: "City", value: "Dindigul, Tamil Nadu, India" },
                    { icon: Mail, label: "Email", value: "manojkumar9384@outlook.com" }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="dark:text-gray-300"><strong>{item.label}:</strong> {item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.img 
                  src="/lovable-uploads/47058459-6f7e-4d39-bcf6-9b8b0209ffcb.png" 
                  alt="Manoj Kumar K" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
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
