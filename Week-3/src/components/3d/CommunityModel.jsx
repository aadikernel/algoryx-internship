import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'

const MODEL_PATH = '/models/algoryx-community-robot.glb'

/**
 * Loads the official Algoryx Community asset from MODEL_PATH.
 * If the file has not been placed yet, GltfModel throws (from useGLTF),
 * which the parent's <Suspense>/error boundary below catches and swaps
 * in FallbackModel — a clearly non-official procedural placeholder so
 * the internship deliverable never misrepresents itself as containing
 * the real Community asset.
 */
function GltfModel({ float }) {
  const { scene } = useGLTF(MODEL_PATH)
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    if (float) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
  })

  return (
    <Center ref={ref}>
      <primitive object={scene} scale={1.4} />
    </Center>
  )
}

function FallbackModel({ float }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0025
    if (float) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
  })

  return (
    <group ref={ref}>
      <mesh castShadow position={[0, 0.4, 0]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial color="#c17a52" roughness={0.35} metalness={0.4} flatShading />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.75, 0]}>
        <cylinderGeometry args={[1.1, 1.25, 0.3, 6]} />
        <meshStandardMaterial color="#1c1f24" roughness={0.6} metalness={0.2} />
      </mesh>
    </group>
  )
}

class ModelBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {}
  render() {
    if (this.state.failed) return this.props.fallback
    return this.props.children
  }
}

export default function CommunityModel({ float = true, onSourceChange }) {
  const [assetMissing, setAssetMissing] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(MODEL_PATH, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && !res.ok) setAssetMissing(true)
      })
      .catch(() => {
        if (!cancelled) setAssetMissing(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    onSourceChange?.(assetMissing ? 'placeholder' : 'community')
  }, [assetMissing, onSourceChange])

  if (assetMissing) {
    return <FallbackModel float={float} />
  }

  return (
    <ModelBoundary fallback={<FallbackModel float={float} />}>
      <GltfModel float={float} />
    </ModelBoundary>
  )
}

