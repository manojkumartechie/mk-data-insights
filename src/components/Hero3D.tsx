
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function SimpleFloatingShapes() {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere position={[0, 0, 0]} args={[1]}>
          <MeshDistortMaterial
            color="#60A5FA"
            distort={0.3}
            speed={2}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere position={[-2, 1, -1]} args={[0.5]}>
          <MeshDistortMaterial
            color="#12D640"
            distort={0.2}
            speed={1.5}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <Sphere position={[2, -0.5, 0]} args={[0.7]}>
          <MeshDistortMaterial
            color="#F59E0B"
            distort={0.25}
            speed={1.8}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "default"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#60A5FA" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#F59E0B" />
        <SimpleFloatingShapes />
      </Canvas>
    </div>
  );
};
