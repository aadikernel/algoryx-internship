import { Component, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import CommunityModel from './CommunityModel.jsx'

function SceneLoading() {
  return (
    <mesh>
      <sphereGeometry args={[0.6, 8, 8]} />
      <meshBasicMaterial color="#2a2e34" wireframe />
    </mesh>
  )
}

function CanvasFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-surface rounded-2xl">
      <p className="text-bone-dim text-[0.85rem] px-6 text-center">
        The 3D viewer couldn&apos;t start in this browser. Try reloading the page.
      </p>
    </div>
  )
}

// Plain React error boundary. Catches any render-time exception thrown by
// the Canvas subtree (a malformed GLB, an unexpected WebGL failure) and
// swaps in CanvasFallback instead of letting it unmount the whole page.
class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error) {
    console.error('3D scene failed to render:', error)
  }
  render() {
    if (this.state.failed) return <CanvasFallback />
    return this.props.children
  }
}

export default function RobotScene({ interactive = true, onSourceChange, className = '' }) {
  const [dpr, setDpr] = useState(1.5)

  return (
    <div className={className}>
      <CanvasErrorBoundary>
        <Canvas
          shadows
          dpr={dpr}
          camera={{ position: [2.4, 1.2, 3.2], fov: 38 }}
          onCreated={({ gl }) => {
            setDpr(Math.min(window.devicePixelRatio, 2))
            gl.setClearColor('#000000', 0)
          }}
          fallback={<CanvasFallback />}
        >
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[3, 4, 2]}
            intensity={1.7}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-3, 1, -2]} intensity={0.4} color="#c17a52" />
          <directionalLight position={[0, -2, -3]} intensity={0.25} color="#8f5c3e" />

          <Suspense fallback={<SceneLoading />}>
            <CommunityModel float onSourceChange={onSourceChange} />
            <ContactShadows position={[0, -1.05, 0]} opacity={0.45} scale={6} blur={2.4} far={2} />
          </Suspense>

          {interactive && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
              autoRotate={false}
            />
          )}
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  )
}
