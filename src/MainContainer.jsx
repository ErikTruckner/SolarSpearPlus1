import { OrbitControls } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import { useRef, useEffect, useState, useContext } from 'react'

import * as THREE from 'three'

import UseCameraPositionLogging from './hooks/CameraPositionLogging'

import Earth from './planets/earth/Earth'
import Sun from './planets/sun/Sun'
import { Perf } from 'r3f-perf'

const MainContainer = ({ followingEarth, setFollowingEarth }) => {
  return (
    <>
      {/* <Perf /> */}
      {/*<OrbitControls /> */}
      <UseCameraPositionLogging event='mousedown' />
      <AnimatedStars />

      <ambientLight intensity={0.1} />
      <Sun />

      <Earth
        position={[7, 0, 0]}
        displacementScale={0.05}
        followingEarth={followingEarth}
        setFollowingEarth={setFollowingEarth}
      />
    </>
  )
}

export default MainContainer
