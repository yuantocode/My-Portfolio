import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

export const FloatingPlanet = () => {
  return (
    <div className="absolute -top-12 right-6 w-32 h-32 z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 64, 64]}>
            <MeshDistortMaterial
              color="#7f5af0"
              emissive="#c084fc"
              speed={2}
              distort={0.4}
              roughness={0.2}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
