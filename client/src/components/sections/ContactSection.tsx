import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      rotateY: 3,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="contact"
      className="responsive-spacing mobile-padding bg-background/80 transition-colors duration-500"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="mobile-heading font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        
        <div className="mobile-grid">
          {[
            { 
              icon: Mail, 
              title: "Email", 
              content: "manojkumar9384@outlook.com", 
              color: "text-primary",
              isMobile: true 
            },
            { 
              icon: Phone, 
              title: "Contact", 
              content: "+91 7826807488", 
              color: "text-accent",
              isMobile: true 
            },
            { 
              icon: ExternalLink, 
              title: "Social Profiles", 
              content: "LinkedIn • GitHub • LeetCode • Kaggle", 
              color: "text-purple-400",
              links: [
                { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin },
                { href: "https://github.com/manojkumartechie", icon: Github },
                { 
                  href: "https://leetcode.com/manojkumartechie/", 
                  iconUrl: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000",
                  name: "LeetCode"
                },
                { 
                  href: "https://www.kaggle.com/manojkumartechie", 
                  iconUrl: "https://img.icons8.com/?size=100&id=Omk4fWoSmCHm&format=png&color=000000",
                  name: "Kaggle"
                }
              ]
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="w-full perspective-1000"
            >
              <Card className="glass-card border-primary/10 shadow-xl border h-full min-h-[200px] sm:min-h-[220px] transform-gpu">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    className="flex justify-center"
                  >
                    <item.icon className={`h-6 w-6 sm:h-8 sm:w-8 mb-2 ${item.color}`} />
                  </motion.div>
                  <CardTitle className="text-foreground text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  {item.links ? (
                    <div className="flex flex-wrap justify-center responsive-gap">
                      {item.links.map((link, linkIndex) => (
                        <motion.div
                          key={linkIndex}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.5,
                            delay: linkIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ 
                            scale: 1.2,
                            y: -3,
                            rotate: 5,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.9 }}
                          viewport={{ once: true }}
                        >
                          <Button 
                            asChild 
                            variant="ghost" 
                            size="sm" 
                            className="glossy-icon touch-target text-muted-foreground hover:text-accent animate-pulse-glow group transform-gpu"
                          >
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                              {link.iconUrl ? (
                                <img 
                                  src={link.iconUrl} 
                                  alt={link.name || ""} 
                                  className="h-5 w-5 sm:h-6 sm:w-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
                                />
                              ) : (
                                <link.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                              )}
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-muted-foreground mobile-text break-words">{item.content}</p>
                      {item.isMobile && (
                        <div className="sm:hidden">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="glossy-button mt-2 w-full touch-target transform-gpu"
                            >
                              <a 
                                href={item.title === "Email" ? `mailto:${item.content}` : `tel:${item.content}`}
                                className="flex items-center justify-center gap-2"
                              >
                                <item.icon className="h-4 w-4" />
                                {item.title === "Email" ? "Send Email" : "Call Now"}
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};