
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink, Linkedin, Github, Code, BarChart3 } from "lucide-react";

export const ContactSection = () => {
  return (
    <motion.section 
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Mail, title: "Email", content: "manojkumar9384@outlook.com", color: "text-cyan-400" },
            { icon: Phone, title: "Contact", content: "+91 7826807488", color: "text-blue-400" },
            { 
              icon: ExternalLink, 
              title: "Social Profiles", 
              content: "LinkedIn • GitHub • LeetCode • Kaggle", 
              color: "text-teal-400",
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
              <Card className="bg-gray-800 border border-cyan-500/30 shadow-lg">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                  </motion.div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
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
                          <Button asChild variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/30">
                            <a href={link.href} target="_blank">
                              <link.icon className="h-5 w-5" />
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300">{item.content}</p>
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
