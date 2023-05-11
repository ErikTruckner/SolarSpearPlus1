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
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '16px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
      <p>
        Thank you for your patience!
        <br /> <br />
        The robots are building the site...
        <br /> <br />
        Any moment now...
      </p>
    </div>
  )
}

function App() {
  //PREVENT MOBILE SCROLL
  useEffect(() => {
    disableScroll()

    // Clean up function (optional)
    return () => {
      null
    }
  }, [])

  const disableScroll = () => {
    // Save the current scroll position
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    // Add styles to the body to disable scrolling
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'

    // Prevent the page from jumping back to the original scroll position
    document.body.style.marginTop = `-${scrollPosition}px`
  }

  //
  //

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
        id='canvas'
        ref={canvasRef}
        onCreated={handleCreated}
        shadows
        camera={{
          fov: 55,
          near: 1,
          far: 1000,
          position: [20, 8, 25],
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
