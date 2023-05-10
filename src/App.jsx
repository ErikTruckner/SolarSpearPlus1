import { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'

import MainContainer from './MainContainer'
import DyanmicHeader from './UI/DynamicHeader'
import CockPit from './UI/CockPit'

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '16px',
      }}>
      <h1>The Robots are building the site...</h1>
    </div>
  )
}

function App() {
  const [followingEarth, setFollowingEarth] = useState(false)

  const [isLoaded, setIsLoaded] = useState(false)

  const canvasRef = useRef()

  const handleCreated = () => {
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <Canvas
        ref={canvasRef}
        onCreated={handleCreated}
        shadows
        camera={{
          fov: 55,
          near: 1,
          far: 1000,
          position: [16.14, 8.32, 19.81],
        }}>
        <color attach='background' args={['black']} />

        <MainContainer
          followingEarth={followingEarth}
          setFollowingEarth={setFollowingEarth}
        />
      </Canvas>
      {/* <CockPit /> */}

      {isLoaded && (
        <>
          <DyanmicHeader
            followingEarth={followingEarth}
            setFollowingEarth={setFollowingEarth}
          />
        </>
      )}
    </>
  )
}

export default App
