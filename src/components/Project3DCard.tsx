
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";
import { useState } from 'react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateY: -30 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        damping: 15,
        stiffness: 100
      }}
      whileHover={{ 
        y: -20,
        scale: 1.05,
        transition: { duration: 0.4, type: "spring", damping: 10 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="perspective-1000 relative group w-full h-full"
    >
      <motion.div
        style={{
          rotateX: isHovered ? mousePosition.y * 15 : 0,
          rotateY: isHovered ? mousePosition.x * 15 : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="relative h-full"
      >
        <Card className="overflow-hidden border-0 glass-card shadow-2xl transform-gpu relative h-full flex flex-col min-h-[600px]">
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ padding: '2px' }}
            animate={isHovered ? {
              background: [
                "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))",
                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full bg-background rounded-xl" />
          </motion.div>

          {/* Floating particles */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  initial={{ 
                    x: Math.random() * 100 + '%',
                    y: '100%',
                    opacity: 0 
                  }}
                  animate={{ 
                    y: '-20%',
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity 
                  }}
                />
              ))}
            </div>
          )}

          <motion.div 
            className="relative h-56 overflow-hidden group flex-shrink-0"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-all duration-700"
              whileHover={{ scale: 1.1 }}
              animate={isHovered ? { 
                filter: "brightness(1.1) contrast(1.1)",
                scale: 1.05
              } : {
                filter: "brightness(1) contrast(1)",
                scale: 1
              }}
            />
            
            {/* 3D overlay effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating preview button */}
            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 360 : 0
              }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <Button size="sm" className="glass-effect border border-primary/30 hover:bg-primary/20">
                <Eye className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <div className="flex flex-col flex-grow">
            <CardHeader style={{ transform: "translateZ(20px)" }} className="flex-shrink-0">
              <motion.div
                animate={isHovered ? { y: -5 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <motion.span
                    animate={isHovered ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {title}
                  </motion.span>
                  <motion.div
                    animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-2 h-2 bg-accent rounded-full"
                  />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {description}
                </CardDescription>
              </motion.div>
            </CardHeader>

            <CardContent style={{ transform: "translateZ(15px)" }} className="flex flex-col flex-grow">
              <motion.div 
                className="flex flex-wrap gap-2 mb-6 flex-grow"
                animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: techIndex * 0.1 + 0.2 }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -3,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                    }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-xs glass-effect border-primary/20 text-foreground hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-3 mt-auto"
                animate={isHovered ? { y: -3 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button asChild className="w-full glossy-button text-primary-foreground shadow-lg">
                    <a href={github} target="_blank" className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                      </motion.div>
                      GitHub
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="default" className="glass-effect border-primary text-primary hover:bg-primary/20 shadow-lg">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
