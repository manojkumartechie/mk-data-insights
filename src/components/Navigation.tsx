
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Manoj Kumar K
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/manojkumartechie" target="_blank">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="https://www.linkedin.com/in/manojkumartechie/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="mailto:manojkumar9384@outlook.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-2 px-3 py-2">
                <Button asChild variant="ghost" size="sm">
                  <a href="https://github.com/manojkumartechie" target="_blank">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href="https://www.linkedin.com/in/manojkumartechie/" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href="mailto:manojkumar9384@outlook.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
