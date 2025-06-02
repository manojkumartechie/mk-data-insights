
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as random from 'maath/random';
import * as THREE from 'three';

function AnimatedParticles() {
  const ref = useRef<any>(null);
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 2.5 }), []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  
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
          color="#60A5FA"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function FloatingShapes() {
  const meshRef1 = useRef<any>(null);
  const meshRef2 = useRef<any>(null);
  const meshRef3 = useRef<any>(null);
  const meshRef4 = useRef<any>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef1.current) {
      meshRef1.current.position.y = Math.sin(time) * 0.5;
      meshRef1.current.rotation.x = time * 0.2;
    }
    if (meshRef2.current) {
      meshRef2.current.position.y = Math.cos(time * 0.8) * 0.3;
      meshRef2.current.rotation.y = time * 0.3;
    }
    if (meshRef3.current) {
      meshRef3.current.position.y = Math.sin(time * 1.2) * 0.4;
      meshRef3.current.rotation.z = time * 0.1;
    }
    if (meshRef4.current) {
      meshRef4.current.position.y = Math.cos(time * 0.6) * 0.6;
      meshRef4.current.rotation.x = time * 0.15;
    }
  });
  
  return (
    <group>
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <mesh ref={meshRef1} position={[-3, 0, -1]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <MeshDistortMaterial
            color="#12D640"
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef2} position={[3, -0.5, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <MeshDistortMaterial
            color="#60A5FA"
            distort={0.4}
            speed={1.5}
          />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={1} floatIntensity={2.5}>
        <mesh ref={meshRef3} position={[0, 1.5, -2]}>
          <tetrahedronGeometry args={[0.6]} />
          <MeshDistortMaterial
            color="#F59E0B"
            distort={0.5}
            speed={3}
          />
        </mesh>
      </Float>
      
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh ref={meshRef4} position={[-1.5, -1, 1]}>
          <coneGeometry args={[0.7, 1.5, 8]} />
          <MeshDistortMaterial
            color="#EF4444"
            distort={0.2}
            speed={2.5}
          />
        </mesh>
      </Float>
      
      {/* Simplified floating elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={Math.random() * 2} floatIntensity={Math.random() * 3}>
          <Sphere
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 3
            ]}
            args={[0.1 + Math.random() * 0.2]}
          >
            <MeshDistortMaterial
              color={`hsl(${Math.random() * 360}, 70%, 60%)`}
              distort={0.1 + Math.random() * 0.2}
              speed={1 + Math.random() * 2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

function DynamicLighting() {
  const lightRef = useRef<any>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time) * 5;
      lightRef.current.position.z = Math.cos(time) * 5;
      lightRef.current.intensity = 0.5 + Math.sin(time * 2) * 0.3;
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight ref={lightRef} position={[5, 5, 5]} intensity={0.8} color="#60A5FA" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#F59E0B" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#12D640"
        castShadow
      />
    </>
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
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <DynamicLighting />
        <AnimatedParticles />
        <FloatingShapes />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  );
};
