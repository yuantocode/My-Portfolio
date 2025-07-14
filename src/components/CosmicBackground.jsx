import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const CosmicParticles = () => {
  const pointsRef = useRef();

  const sphere = useMemo(() => {
    const points = [];
    const particleCount = 1500;

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 120;
      points.push(x, y, z);
    }

    return new Float32Array(points);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008;
      pointsRef.current.rotation.x += 0.0004;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.3}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <CosmicParticles />
      </Canvas>
    </div>
  );
};
