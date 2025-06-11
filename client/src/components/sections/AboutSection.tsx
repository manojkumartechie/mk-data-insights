import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Calendar, Target, TrendingUp, Award, Users } from "lucide-react";

export const AboutSection = () => {
  const contactInfo = [
    { icon: Phone, text: "+91 7826807488", href: "tel:+917826807488" },
    { icon: Mail, text: "manojkumar9384@outlook.com", href: "mailto:manojkumar9384@outlook.com" },
    { icon: MapPin, text: "Dindigul, Tamil Nadu, India" },
  ];

  const coreStrengths = [
    { icon: TrendingUp, title: "Data Analytics", description: "Advanced statistical analysis and predictive modeling" },
    { icon: Target, title: "Machine Learning", description: "Deep learning, time series forecasting, and risk assessment" },
    { icon: Award, title: "Financial Analytics", description: "Portfolio optimization, fraud detection, and risk management" },
    { icon: Users, title: "Problem Solving", description: "Complex data challenges with innovative solutions" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      rotateY: 2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="about"
      className="responsive-spacing mobile-padding bg-muted/30 transition-colors duration-500"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="mobile-heading font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-8 sm:mb-12 mobile-text max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Passionate Data Analyst with expertise in machine learning, financial analytics, and big data technologies
        </motion.p>

        <div className="grid lg:grid-cols-2 responsive-gap">
          {/* Professional Summary */}
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="glass-card h-full transform-gpu">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground mobile-text">
                  <p>
                    Dedicated Data Analyst with extensive experience in developing predictive analytics platforms, 
                    fraud detection systems, and financial risk models. Specialized in leveraging Python, machine learning, 
                    and big data technologies to drive data-driven decision making.
                  </p>
                  <p>
                    Proven track record in implementing end-to-end data solutions from ETL pipelines to interactive 
                    dashboards, with expertise in cloud deployment and real-time analytics systems.
                  </p>
                  <p>
                    Committed to continuous learning and staying current with emerging technologies in data science, 
                    machine learning, and financial analytics through self-directed study and hands-on project implementation.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-6 sm:mt-8 space-y-3">
                  <h4 className="font-semibold text-foreground mobile-text">Contact Information</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 text-muted-foreground mobile-text"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          x: 8,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <contact.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        </motion.div>
                        {contact.href ? (
                          <a 
                            href={contact.href} 
                            className="hover:text-primary transition-colors duration-300 break-all"
                          >
                            {contact.text}
                          </a>
                        ) : (
                          <span className="break-all">{contact.text}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50, rotateY: 10 },
              visible: {
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              rotateY: -2,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
          >
            <Card className="glass-card h-full transform-gpu">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Core Strengths</h3>
                <div className="grid gap-4 sm:gap-6">
                  {coreStrengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.03,
                        x: 5,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                    >
                      <motion.div 
                        className="p-2 rounded-lg bg-primary/10 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          backgroundColor: "hsl(var(--primary) / 0.2)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        <strength.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground mobile-text">{strength.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1">{strength.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="font-semibold text-foreground mobile-text mb-3">Key Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Scikit-learn", "TensorFlow", "Tableau", "AWS", "SQL", "Apache Spark"].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -3,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge variant="secondary" className="glass-effect cursor-pointer touch-target">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};