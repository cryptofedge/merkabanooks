"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { ProductShape, type ShapeKind, type ShapeVariant } from "@/components/product-shapes";

interface ProductScene3DProps {
  shape: ShapeKind;
  color: string;
  variant?: ShapeVariant;
}

export function ProductScene3D({ shape, color, variant }: ProductScene3DProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [1.8, 1.3, 2.4], fov: 38 }}
    >
      <color attach="background" args={["#12151a"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.3} castShadow />

      <Suspense fallback={null}>
        <ProductShape kind={shape} color={color} variant={variant} />
        <Environment preset="apartment" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.5} scale={4} blur={2.2} far={1.5} />
      </Suspense>

      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        enablePan={false}
        minDistance={1.4}
        maxDistance={4}
        autoRotate={false}
      />
    </Canvas>
  );
}
