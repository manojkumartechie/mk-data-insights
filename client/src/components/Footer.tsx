
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary/80 border-t border-primary/20">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground">
          © 2025 Manoj Kumar K. All rights reserved.
        </p>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </footer>
  );
};
