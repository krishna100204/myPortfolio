import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Laptop() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.2, 0.5, 0]}>
      {/* Base/Bottom of laptop */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#2563eb" />
        
        {/* Keyboard area */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[2.8, 0.05, 1.8]} />
          <meshStandardMaterial color="#1d4ed8" />
        </mesh>
        
        {/* Touchpad */}
        <mesh position={[0, 0.11, 0.4]}>
          <boxGeometry args={[1, 0.02, 0.6]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
      </mesh>

      {/* Screen */}
      <group position={[0, 0.8, -0.9]} rotation={[-0.5, 0, 0]}>
        {/* Screen frame */}
        <mesh>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        
        {/* Screen display */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.8, 1.8, 0.01]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#60a5fa"
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Laptop />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}