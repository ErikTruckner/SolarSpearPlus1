import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import MainContainer from './MainContainer'
import DyanmicHeader from './UI/DynamicHeader'
import CockPit from './UI/CockPit'

function App() {
  const [followingEarth, setFollowingEarth] = useState(false)
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
