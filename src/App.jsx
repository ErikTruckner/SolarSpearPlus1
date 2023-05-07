import { Canvas } from '@react-three/fiber'

import MainContainer from './MainContainer'
import DyanmicHeader from './UI/DynamicHeader'

function App() {
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
        <MainContainer />
      </Canvas>
      <DyanmicHeader />
    </>
  )
}

export default App
