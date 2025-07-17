import React from "react";
import {
  useGLTF,
  Text,
  MeshTransmissionMaterial,
  Center,
  Text3D,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

export default function Model() {
  const mesh = useRef();
  const { nodes } = useGLTF("/tarous.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.x += 0.03;
  });
  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group scale={viewport.width / 8}>
      <Text fontSize={1} position={[0, 0, -0.5]}>
        hello world!
      </Text>


      <Text fontSize={0.09} position={[0, -2, -0.5]}>
        Our 3d designs are made with creativity and attention to details{"\n"}We are
        passionate about creating beautiful and functional products that enhance
        {"\n"}
        the user experience crfting stunning visuals and prototypes
      </Text>
      <mesh ref={mesh} geometry={nodes.Torus001.geometry}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
