
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Sparkles, Rocket } from 'lucide-react';

function FloatingCTAElements() {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Central floating sphere with pulsing effect */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere position={[0, 0, 0]} args={[0.8]}>
          <MeshDistortMaterial
            color="#3B82F6"
            distort={0.6}
            speed={3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
      
      {/* Orbiting elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={1} floatIntensity={1.5}>
          <Sphere
            position={[
              Math.cos((i * Math.PI) / 4) * 3,
              Math.sin((i * Math.PI) / 4) * 0.5,
              Math.sin((i * Math.PI) / 4) * 3
            ]}
            args={[0.2]}
          >
            <MeshDistortMaterial
              color={`hsl(${210 + i * 15}, 80%, 60%)`}
              distort={0.3}
              speed={2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export const Interactive3DCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#60A5FA" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#F59E0B" />
          <FloatingCTAElements />
        </Canvas>
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main CTA Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="space-y-12"
        >
          {/* Main CTA Heading */}
          <motion.h2
            className="text-6xl lg:text-8xl font-black text-white mb-8"
            style={{
              background: "linear-gradient(45deg, #60A5FA, #F59E0B, #12D640, #EF4444)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Ready to Transform
            <br />
            Your Data?
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            className="text-2xl lg:text-3xl text-blue-100 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Let's unlock powerful insights from your data and drive your business to new heights!
          </motion.p>
          
          {/* Interactive CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-8 justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 60px rgba(59, 130, 246, 0.8)",
                  "0 0 30px rgba(59, 130, 246, 0.5)"
                ],
                y: [0, -8, 0],
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold px-12 py-6 text-xl shadow-2xl border-0 rounded-2xl"
              >
                <a href="#contact">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="mr-4 h-8 w-8" />
                  </motion.div>
                  Start Your Data Journey
                  <ArrowRight className="ml-4 h-8 w-8" />
                </a>
              </Button>
            </motion.div>
            
            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: [
                  "rgba(34, 197, 94, 0.5)",
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.5)"
                ],
                y: [0, -5, 0],
              }}
              transition={{ 
                borderColor: { duration: 2.5, repeat: Infinity },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-4 border-green-400 bg-green-400/10 hover:bg-green-400 hover:text-gray-900 text-green-100 font-bold px-12 py-6 text-xl shadow-2xl rounded-2xl backdrop-blur-md"
              >
                <a href="#projects">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="mr-4 h-8 w-8" />
                  </motion.div>
                  Explore My Work
                  <Zap className="ml-4 h-8 w-8" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Floating Action Indicators */}
          <motion.div
            className="flex justify-center space-x-16 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {[
              { icon: "📊", text: "Data Analytics" },
              { icon: "🤖", text: "AI Solutions" },
              { icon: "📈", text: "Business Growth" },
              { icon: "🚀", text: "Innovation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                whileHover={{ scale: 1.3, y: -20 }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-blue-200 font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
