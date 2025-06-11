import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    checkMobile();
    handleScroll();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = isMobile ? 60 : 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const socialLinks = [
    { href: "https://github.com/manojkumartechie", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:manojkumar9384@outlook.com", icon: Mail, label: "Email" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <motion.nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
              ? 'glass-card border-b border-white/10' 
              : 'bg-transparent'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="max-w-7xl mx-auto mobile-padding">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Manoj Kumar K
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.label}
                      onClick={() => smoothScrollTo(item.id)}
                      className="text-muted-foreground hover:text-accent px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-muted-foreground hover:text-accent glossy-icon"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <IconComponent className="h-5 w-5" />
                          <span className="sr-only">{social.label}</span>
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.nav>
      )}

      {/* Mobile Floating Navigation */}
      {isMobile && (
        <>
          {/* Mobile Menu Button */}
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="glossy-button text-primary-foreground rounded-full p-4 shadow-lg touch-target"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <motion.div
                  className="absolute bottom-24 right-6 glass-card rounded-2xl p-6 shadow-2xl border border-white/10 min-w-[200px]"
                  initial={{ scale: 0, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        onClick={() => smoothScrollTo(item.id)}
                        className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-accent/20 transition-colors duration-200 touch-target"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                    
                    <div className="border-t border-white/10 pt-4 mt-4">
                      <div className="flex justify-center space-x-4">
                        {socialLinks.map((social) => {
                          const IconComponent = social.icon;
                          return (
                            <motion.a
                              key={social.href}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent p-2 glossy-icon touch-target"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <IconComponent className="h-5 w-5" />
                              <span className="sr-only">{social.label}</span>
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};