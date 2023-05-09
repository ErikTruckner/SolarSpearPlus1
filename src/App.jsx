import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import MainContainer from './MainContainer'
import DyanmicHeader from './UI/DynamicHeader'
import CockPit from './UI/CockPit'

function App() {
  const [followingEarth, setFollowingEarth] = useState(false)

  function calculateLoadTime() {
    const loadStartTime = performance.timing.navigationStart
    const loadEndTime = performance.timing.loadEventEnd
    const loadTime = loadEndTime - loadStartTime

    return loadTime
  }

  window.addEventListener('load', function () {
    const appLoadTime = calculateLoadTime()
    console.log(`App fully loaded in ${appLoadTime} milliseconds.`)
  })

  return (
    <>
      <Canvas
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
      <DyanmicHeader
        followingEarth={followingEarth}
        setFollowingEarth={setFollowingEarth}
      />
    </>
  )
}

export default App
