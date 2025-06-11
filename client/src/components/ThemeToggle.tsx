
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 glass-card hover:shadow-xl hover:animate-glow"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-md"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {theme === 'dark' ? (
            <Moon className="h-5 w-5 text-accent relative z-10" />
          ) : (
            <Sun className="h-5 w-5 text-primary relative z-10" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};
