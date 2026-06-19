"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LogoCore() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.4;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group ref={groupRef}>

      {/* K Vertical */}
      <mesh position={[-0.4, 0, 0]}>
        <boxGeometry args={[0.22, 2.2, 0.22]} />
        <meshStandardMaterial
          color="#005A9C"
          emissive="#7EC8FF"
          emissiveIntensity={3}
        />
      </mesh>

      {/* K Upper */}
      <mesh
        position={[0.15, 0.55, 0]}
        rotation={[0, 0, -0.8]}
      >
        <boxGeometry args={[0.18, 1.2, 0.18]} />
        <meshStandardMaterial
          color="#005A9C"
          emissive="#7EC8FF"
          emissiveIntensity={3}
        />
      </mesh>

      {/* K Lower */}
      <mesh
        position={[0.15, -0.55, 0]}
        rotation={[0, 0, 0.8]}
      >
        <boxGeometry args={[0.18, 1.2, 0.18]} />
        <meshStandardMaterial
          color="#005A9C"
          emissive="#7EC8FF"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Arrow */}
      <mesh
        position={[0.95, 1.1, 0]}
        rotation={[0, 0, -0.8]}
      >
        <coneGeometry args={[0.18, 0.45, 6]} />
        <meshStandardMaterial
          color="#005A9C"
          emissive="#7EC8FF"
          emissiveIntensity={5}
        />
      </mesh>
    </group>
  );
}

function Rings() {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ring1.current.rotation.z += 0.002;
    ring2.current.rotation.z -= 0.003;
    ring3.current.rotation.z += 0.001;
  });

  return (
    <>
      <mesh
        ref={ring1}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[2.8, 0.03, 16, 200]} />
        <meshBasicMaterial color="#7EC8FF" />
      </mesh>

      <mesh
        ref={ring2}
        rotation={[Math.PI / 2, 0.5, 0]}
      >
        <torusGeometry args={[3.7, 0.03, 16, 200]} />
        <meshBasicMaterial color="#A9DDFF" />
      </mesh>

      <mesh
        ref={ring3}
        rotation={[Math.PI / 2, -0.5, 0]}
      >
        <torusGeometry args={[4.8, 0.03, 16, 200]} />
        <meshBasicMaterial color="#D8F1FF" />
      </mesh>
    </>
  );
}

function FloatingParticles() {
  const particles = [];

  for (let i = 0; i < 200; i++) {
    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ]}
      >
        <sphereGeometry args={[0.03]} />
        <meshBasicMaterial color="#7EC8FF" />
      </mesh>
    );
  }

  return <>{particles}</>;
}

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    state.camera.position.x =
      Math.sin(t * 0.25) * 1.5;

    state.camera.position.y =
      Math.cos(t * 0.2) * 0.5;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 50,
      }}
    >
      <color
        attach="background"
        args={["#F8FCFF"]}
      />

      <fog
        attach="fog"
        args={["#F8FCFF", 8, 30]}
      />

      <ambientLight intensity={4} />

      <pointLight
        position={[0, 0, 5]}
        intensity={120}
        color="#7EC8FF"
      />

      <pointLight
        position={[5, 5, 5]}
        intensity={80}
        color="#005A9C"
      />

      <Stars
        radius={100}
        depth={50}
        count={1500}
        factor={4}
        fade
      />

      <CameraRig />

      <FloatingParticles />

      <Rings />

      <LogoCore />
    </Canvas>
  );
}