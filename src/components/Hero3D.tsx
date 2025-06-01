
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Points, PointMaterial } from 'three';
import * as random from 'maath/random';

function Particles() {
  const ref = useRef<Points>(null);
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

function FloatingIcons() {
  return (
    <group>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[-2, 1, 0]}
          >
            DATA
            <meshStandardMaterial color="#12D640" />
          </Text3D>
        </Center>
      </Float>
      
      <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.4}
            height={0.15}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[2, -1, 0]}
          >
            AI
            <meshStandardMaterial color="#60A5FA" />
          </Text3D>
        </Center>
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
        <FloatingIcons />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
