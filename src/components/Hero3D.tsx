
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SimpleFloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1]} />
        <meshStandardMaterial
          color="#60A5FA"
          transparent
          opacity={0.6}
        />
      </mesh>
      
      <mesh position={[-2, 1, -1]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial
          color="#12D640"
        />
      </mesh>
      
      <mesh position={[2, -0.5, 0]}>
        <sphereGeometry args={[0.7]} />
        <meshStandardMaterial
          color="#F59E0B"
        />
      </mesh>
    </group>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
        fallback={<div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100" />}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#60A5FA" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#F59E0B" />
        <SimpleFloatingShapes />
      </Canvas>
    </div>
  );
};
