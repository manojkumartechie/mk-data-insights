
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Data Analyst", "Business Intelligence Expert", "Machine Learning Engineer"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Manoj Kumar K
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {typedText}
              </span>
              <span className="animate-pulse text-blue-600">|</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Resourceful and analytical Data Analyst with expertise in transforming complex data into actionable insights that drive business decisions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Projects
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { href: "https://github.com/manojkumartechie", icon: Github },
                { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin }
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="ghost" size="lg">
                    <a href={social.href} target="_blank">
                      <social.icon className="h-6 w-6" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700">
                <img 
                  src="/lovable-uploads/47058459-6f7e-4d39-bcf6-9b8b0209ffcb.png" 
                  alt="Manoj Kumar K" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-600 rounded-full animate-pulse delay-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
