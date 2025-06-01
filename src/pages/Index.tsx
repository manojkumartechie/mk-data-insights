import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, BarChart3, Database, FileText, Code, PieChart, Settings, TestTube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero3D } from "@/components/Hero3D";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Project3DCard } from "@/components/Project3DCard";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Data Analyst", "Business Intelligence Expert", "Machine Learning Engineer"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500">
        <ThemeToggle />
        
        {/* Header with 3D Background */}
        <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <Hero3D />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
          
          <motion.div 
            className="relative z-10 text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="Manoj Kumar K" 
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Manoj Kumar K
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a <span className="text-green-400 font-semibold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Resourceful and analytical Data Analyst with expertise in transforming complex data into actionable insights that drive business decisions.
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-6 flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/manojkumartechie", icon: Github, label: "GitHub" },
                { href: "https://leetcode.com/manojkumartechie/", icon: Code, label: "LeetCode" },
                { href: "https://www.kaggle.com/manojkumartechie", icon: BarChart3, label: "Kaggle" },
                { href: "https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing", icon: ExternalLink, label: "Resume" }
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md">
                    <a href={link.href} target="_blank">
                      <link.icon className="mr-2 h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </header>

        {/* About Section */}
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
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                  alt="Manoj Kumar K" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Experienced in identifying and resolving complex data challenges, delivering actionable insights, and supporting data-driven decision-making. Strong communicator and collaborative team player with proven abilities in Problem Solving, Teamwork, Communication, Time Management, and Continuous Learning.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="dark:text-gray-300"><strong>{item.label}:</strong> {item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500"
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
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
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
                      <CardTitle className="text-xl text-blue-900">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
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
          className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500"
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
          className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black text-white transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
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
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-white/10 border-white/20 text-white backdrop-blur-md">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                      </motion.div>
                      <CardTitle>{item.title}</CardTitle>
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
                              <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                <a href={link.href} target="_blank">
                                  <link.icon className="h-5 w-5" />
                                </a>
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Index;
