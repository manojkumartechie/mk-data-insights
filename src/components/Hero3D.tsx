
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { PointsMaterial } from 'three';
import * as random from 'maath/random';

function Particles() {
  const ref = useRef<any>(null);
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={sphere.length / 3}
            array={sphere}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#12D640"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <group>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#12D640" />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[2, -1, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#60A5FA" />
        </mesh>
      </Float>
      
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, -1]}>
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
          <meshStandardMaterial color="#F59E0B" />
        </mesh>
      </Float>
    </group>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
        <FloatingShapes />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
