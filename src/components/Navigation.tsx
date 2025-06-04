
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { href: "https://github.com/manojkumartechie", icon: Github },
    { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin },
    { 
      href: "https://leetcode.com/manojkumartechie/", 
      iconUrl: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000",
      name: "LeetCode"
    },
    { 
      href: "https://www.kaggle.com/manojkumartechie", 
      iconUrl: "https://img.icons8.com/?size=100&id=Omk4fWoSmCHm&format=png&color=000000",
      name: "Kaggle"
    },
    { href: "mailto:manojkumar9384@outlook.com", icon: Mail }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-card shadow-2xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Manoj Kumar K
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent px-2 lg:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 glass-effect hover:scale-105 hover:shadow-lg relative overflow-hidden group touch-target"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm" 
                  className="glossy-icon touch-target relative overflow-hidden group animate-pulse-glow"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.iconUrl ? (
                      <img 
                        src={social.iconUrl} 
                        alt={social.name || ""} 
                        className="h-4 w-4 lg:h-5 lg:w-5 relative z-10 transition-all duration-300"
                      />
                    ) : (
                      <social.icon className="h-4 w-4 lg:h-5 lg:w-5 text-accent group-hover:text-primary transition-colors duration-300" />
                    )}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="glass-effect touch-target"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card rounded-b-xl mt-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent block mobile-nav-item rounded-lg font-medium glass-effect transition-all duration-300 touch-target"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-wrap justify-center gap-3 px-3 py-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm" 
                      className="glossy-icon touch-target group animate-pulse-glow"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.iconUrl ? (
                          <img 
                            src={social.iconUrl} 
                            alt={social.name || ""} 
                            className="h-5 w-5 transition-all duration-300"
                          />
                        ) : (
                          <social.icon className="h-5 w-5 text-accent group-hover:text-primary transition-colors duration-300" />
                        )}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
