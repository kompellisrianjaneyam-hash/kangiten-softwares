import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface HolographicLogoProps {
  phase: 'converge' | 'explode' | 'homepage'
  visible?: boolean
}

export default function HolographicLogo({ phase, visible = true }: HolographicLogoProps) {
  const groupRef = useRef<THREE.Group>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)
  const pulseMeshRef = useRef<THREE.Mesh>(null)
  const pulseTimer = useRef(0)
  const pulseProgress = useRef(-1)
  const stemMatRef = useRef<THREE.MeshPhysicalMaterial>(null)
  const nodeMatRef = useRef<THREE.MeshPhysicalMaterial>(null)
  const innerNodeMatRef = useRef<THREE.MeshBasicMaterial>(null)

  const holographicMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#005A9C'),
        emissive: new THREE.Color('#7EC8FF'),
        emissiveIntensity: 0.6,
        metalness: 0.2,
        roughness: 0.05,
        transmission: 0.5,
        thickness: 0.8,
        opacity: 0.92,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    []
  )

  const nodeMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFFFFF'),
        emissive: new THREE.Color('#7EC8FF'),
        emissiveIntensity: 2.5,
        metalness: 0,
        roughness: 0,
        opacity: 1,
        transparent: false,
      }),
    []
  )

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.12
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.06
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.9
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * -0.6
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.5
      ring3Ref.current.rotation.z += delta * 0.3
    }

    holographicMat.emissiveIntensity = 0.55 + Math.sin(t * 7.3) * 0.12

    pulseTimer.current += delta
    if (pulseTimer.current > 3.5 && pulseProgress.current < 0) {
      pulseTimer.current = 0
      pulseProgress.current = 0
    }

    if (pulseProgress.current >= 0 && pulseMeshRef.current) {
      pulseProgress.current += delta * 0.65
      const p = pulseProgress.current
      pulseMeshRef.current.scale.setScalar(p * 3.5)
      const mat = pulseMeshRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = Math.max(0, 0.45 * (1 - p))
      if (p >= 1.4) {
        pulseProgress.current = -1
        pulseMeshRef.current.scale.setScalar(0.001)
        mat.opacity = 0
      }
    }
  })

  if (!visible) return null

  return (
    <group ref={groupRef}>
      <pointLight color="#005A9C" intensity={4} distance={6} position={[0, 0, 1.5]} />
      <pointLight color="#7EC8FF" intensity={3} distance={5} position={[1.5, 0.5, 0]} />
      <pointLight color="#FFFFFF" intensity={1.5} distance={4} position={[-1, 1.5, 0.5]} />

      {/* K — Vertical Pillar */}
      <mesh material={holographicMat} position={[-0.55, 0, 0]} castShadow>
        <boxGeometry args={[0.28, 4.2, 0.22]} />
      </mesh>

      {/* K — Upper diagonal arm */}
      <mesh material={holographicMat} position={[0.35, 1.05, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <boxGeometry args={[0.24, 2.4, 0.22]} />
      </mesh>

      {/* K — Lower diagonal arm */}
      <mesh material={holographicMat} position={[0.35, -1.05, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.24, 2.4, 0.22]} />
      </mesh>

      {/* Growth arrow tip on upper arm */}
      <mesh material={holographicMat} position={[1.3, 2.1, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <coneGeometry args={[0.18, 0.42, 5]} />
      </mesh>

      {/* Glowing junction node — outer */}
      <mesh material={nodeMat} position={[-0.18, 0, 0]}>
        <sphereGeometry args={[0.26, 20, 20]} />
      </mesh>

      {/* Inner core */}
      <mesh position={[-0.18, 0, 0]}>
        <sphereGeometry args={[0.13, 12, 12]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.98} />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh ref={ring1Ref} position={[0.1, 0, 0]}>
        <torusGeometry args={[2.0, 0.022, 8, 80]} />
        <meshBasicMaterial color="#7EC8FF" transparent opacity={0.45} />
      </mesh>

      {/* Orbit Ring 2 — tilted */}
      <mesh ref={ring2Ref} position={[0.1, 0, 0]} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[2.4, 0.016, 8, 80]} />
        <meshBasicMaterial color="#005A9C" transparent opacity={0.35} />
      </mesh>

      {/* Orbit Ring 3 — compound angle */}
      <mesh ref={ring3Ref} position={[0.1, 0, 0]} rotation={[0.4, Math.PI / 4, Math.PI / 5]}>
        <torusGeometry args={[2.75, 0.013, 8, 80]} />
        <meshBasicMaterial color="#7EC8FF" transparent opacity={0.25} />
      </mesh>

      {/* Energy Pulse */}
      <mesh ref={pulseMeshRef} scale={0.001}>
        <sphereGeometry args={[1.2, 20, 20]} />
        <meshBasicMaterial color="#7EC8FF" transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}