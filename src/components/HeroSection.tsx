
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Code, BarChart3 } from "lucide-react";

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
        <div className="flex items-center justify-center">
          {/* Centered content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl"
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
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Resourceful and analytical Data Analyst with expertise in transforming complex data into actionable insights that drive business decisions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
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
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { href: "https://github.com/manojkumartechie", icon: Github },
                { href: "https://www.linkedin.com/in/manojkumartechie/", icon: Linkedin },
                { href: "https://leetcode.com/manojkumartechie/", icon: Code },
                { href: "https://www.kaggle.com/manojkumartechie", icon: BarChart3 }
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
        </div>
      </div>
    </section>
  );
};
