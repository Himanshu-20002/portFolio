"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html, useAnimations, Stage } from "@react-three/drei";
// {{change 1}}
const Model2 = () => {
  const { scene, animations } = useGLTF("/glb.glb");
  // ✅ React Three Fiber-managed animation controller
  const { actions } = useAnimations(animations, scene);

  //  const animatedMesh = React.useMemo(() => {
  //   let found = null
  //   scene.traverse((child) => {
  //     if (child.isSkinnedMesh && child.skeleton && child.animations?.length > 0) {
  //       found = child
  //     }
  //   })
  //   return found
  // }, [scene])

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]]; // play the first animation
      action?.play();
    }
  }, [actions]);
  return (
    <primitive
      object={scene}
      scale={5}
      position={[0, 3.7, 0]}
      rotation={[-Math.PI, 0, 0]}
    />
  );
};
// {{change 1}}
// Wrap ModelCanvas to prevent hydration
export const ModelCanvas = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted ? (
    <Canvas
    shadows
      dpr={[1, 2]}
      camera={{ position: [0, 3, 8], fov: 35 }}
      style={{ height: "100%", width: "100%" }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[5, 2, 2]} // 🌞 Point from right side
        intensity={5} // 🔦 Brighter for stronger shadows
        castShadow // ✅ Enable shadow casting
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color="#ffddcc" // 🌈 Colored light (warm white)
      />
      <Suspense fallback={null}>
        <Model2 />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  ) : (
    <div style={{ width: "100%", height: "100%" }}></div>
  );
};
