import { Component, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const MODEL_PATH = '/models/algoryx-community-robot.glb'

// ─── Development fallback — NOT the official Algoryx Community asset ───────────
function FallbackGeometry() {
  const group = useRef()
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })
  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.7, 1.0, 0.4]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[0.5, 0.45, 0.38]} />
        <meshStandardMaterial color="#1e1e1e" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[-0.12, 0.88, 0.2]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#c8a96e" emissive="#c8a96e" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.12, 0.88, 0.2]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#c8a96e" emissive="#c8a96e" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-0.55, 0.1, 0]} castShadow>
        <boxGeometry args={[0.2, 0.75, 0.22]} />
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0.55, 0.1, 0]} castShadow>
        <boxGeometry args={[0.2, 0.75, 0.22]} />
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[-0.2, -0.85, 0]} castShadow>
        <boxGeometry args={[0.25, 0.7, 0.28]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0.2, -0.85, 0]} castShadow>
        <boxGeometry args={[0.25, 0.7, 0.28]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.1, 0.21]}>
        <boxGeometry args={[0.35, 0.35, 0.02]} />
        <meshStandardMaterial color="#c8a96e" roughness={0.1} metalness={1} emissive="#c8a96e" emissiveIntensity={0.15} />
      </mesh>
    </group>
  )
}

// ─── Official Algoryx Community model loader ──────────────────────────────────
function OfficialModel() {
  const { scene } = useGLTF(MODEL_PATH)
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12
  })
  return <primitive ref={ref} object={scene} scale={1.5} position={[0, -1, 0]} castShadow receiveShadow />
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }
  static getDerivedStateFromError() {
    return { error: true }
  }
  componentDidCatch() {
    this.props.onError?.()
  }
  render() {
    if (this.state.error) return <FallbackGeometry />
    return this.props.children
  }
}

export default function CommunityModel({ onFallback }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) return <FallbackGeometry />

  return (
    <ErrorBoundary onError={() => { setHasError(true); onFallback?.() }}>
      <OfficialModel />
    </ErrorBoundary>
  )
}

useGLTF.preload(MODEL_PATH)
