
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

  // Enhanced animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 md:glass-card md:shadow-2xl md:border-b md:border-white/10 backdrop-blur-md bg-transparent md:bg-black/20"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-accent to-white md:from-primary md:via-accent md:to-primary bg-clip-text text-transparent animate-shimmer drop-shadow-lg">
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
                  className="text-muted-foreground hover:text-accent px-2 lg:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 glass-effect hover:scale-105 hover:shadow-lg relative overflow-hidden group touch-target transform-gpu"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ 
                      scale: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.href}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm" 
                  className="glossy-icon touch-target relative overflow-hidden group animate-pulse-glow transform-gpu"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.iconUrl ? (
                      <img 
                        src={social.iconUrl} 
                        alt={social.name || ""} 
                        className="h-4 w-4 lg:h-5 lg:w-5 relative z-10 transition-all duration-300 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
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
                className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 touch-target transform-gpu shadow-lg"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-b-xl mt-2 shadow-xl">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-accent block mobile-nav-item rounded-lg font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 touch-target shadow-sm"
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-wrap justify-center gap-3 px-3 py-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.href}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm" 
                      className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 touch-target group animate-pulse-glow transform-gpu shadow-lg"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.iconUrl ? (
                          <img 
                            src={social.iconUrl} 
                            alt={social.name || ""} 
                            className="h-5 w-5 transition-all duration-300 filter brightness-0 invert"
                          />
                        ) : (
                          <social.icon className="h-5 w-5 text-white group-hover:text-accent transition-colors duration-300" />
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
