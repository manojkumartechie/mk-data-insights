
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project3DCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  index: number;
}

export const Project3DCard: React.FC<Project3DCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transform-gpu">
        <motion.div 
          className="relative h-48 overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 dark:text-white">{title}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1 mb-4">
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="outline" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" className="w-full">
              <a href={github} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
