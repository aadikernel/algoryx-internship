import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import CommunityModel from './CommunityModel'

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#c8a96e" />
      <pointLight position={[0, 3, 2]} intensity={0.6} color="#ffffff" />
    </>
  )
}

function LoadingMesh() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#2a2a2a" wireframe />
    </mesh>
  )
}

export default function RobotScene({ compact = false }) {
  const [isFallback, setIsFallback] = useState(false)
  const height = compact ? '100%' : '100%'

  return (
    <>
      <Canvas
        style={{ width: '100%', height }}
        camera={{ position: [0, 1, 4], fov: 45 }}
        dpr={[1, 1.5]}
        shadows
        gl={{ antialias: true, alpha: false }}
        aria-label="Interactive 3D robot model"
      >
        <color attach="background" args={['#111111']} />
        <SceneLights />
        <Environment preset="city" />
        <Suspense fallback={<LoadingMesh />}>
          <CommunityModel onFallback={() => setIsFallback(true)} />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.5}
            scale={6}
            blur={2}
            far={4}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={2.5}
          maxDistance={7}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate={false}
          makeDefault
        />
      </Canvas>
      {isFallback && (
        <div className="fallback-badge">Dev fallback — add official GLB</div>
      )}
    </>
  )
}
