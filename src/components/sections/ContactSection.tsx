
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <motion.section 
      id="contact"
      className="py-12 sm:py-16 lg:py-20 mobile-padding bg-background/80 transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="mobile-heading font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="w-full"
            >
              <Card className="bg-secondary/80 border-primary/10 shadow-xl border h-full min-h-[200px] sm:min-h-[220px]">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                  >
                    <item.icon className={`h-6 w-6 sm:h-8 sm:w-8 mb-2 ${item.color}`} />
                  </motion.div>
                  <CardTitle className="text-foreground text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  {item.links ? (
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      {item.links.map((link, linkIndex) => (
                        <motion.div
                          key={linkIndex}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button 
                            asChild 
                            variant="ghost" 
                            size="sm" 
                            className="glossy-icon touch-target text-muted-foreground hover:text-accent animate-pulse-glow group"
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
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="glossy-button mt-2 w-full touch-target"
                          >
                            <a 
                              href={item.title === "Email" ? `mailto:${item.content}` : `tel:${item.content}`}
                              className="flex items-center justify-center gap-2"
                            >
                              <item.icon className="h-4 w-4" />
                              {item.title === "Email" ? "Send Email" : "Call Now"}
                            </a>
                          </Button>
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
