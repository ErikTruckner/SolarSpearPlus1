import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import Moon from './Moon'
import ISS from './ISS'

const Earth = React.memo(
  ({ displacementScale, followingEarth, setFollowingEarth }) => {
    const earthRef = useRef()
    const clockRef = useRef(new THREE.Clock())

    const { camera } = useThree()

    const [hovered, setHovered] = useState(false)
    //
    //
    // ////////// LIFTED STATE TO APP ////////////////
    // const [followingEarth, setFollowingEarth] = useState(false)
    ////////////
    //////////////
    const [cameraPosition, setCameraPosition] = useState(
      new THREE.Vector3(45, 18, 30)
    )
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0))

    const [
      earthTexture,
      earthNormalMap,
      earthSpecularMap,
      earthDisplacementMap,
      earthEmissiveMap,
    ] = useTexture([
      '/assets/earth_day.jpg',
      '/assets/earth_normal.jpg',
      '/assets/earth_specular.jpg',
      '/assets/earth_displacement.jpg',
      '/assets/earth_night.jpg',
    ])

    const updateEarthPosition = useCallback(() => {
      const angle = clockRef.current.getElapsedTime() * 0.2
      const distance = 13
      const x = Math.sin(angle) * distance
      const z = Math.cos(angle) * distance
      earthRef.current.position.set(x, 0, z)
      earthRef.current.rotation.y += 0.006
    }, [])

    const toggleFollowingEarth = () => {
      setFollowingEarth((prevFollowingEarth) => !prevFollowingEarth)
    }

    const tweenLogic = useCallback(() => {
      TWEEN.update()

      const earthPositionRef = earthRef.current.position

      if (followingEarth) {
        const cameraTargetPosition = new THREE.Vector3(
          earthPositionRef.x + 10,
          earthPositionRef.y + 2,
          earthPositionRef.z + 5
        )

        new TWEEN.Tween(cameraPosition)
          .to(cameraTargetPosition, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            setCameraPosition(cameraPosition)
          })
          .start()

        // Create a new tween for cameraTarget lookAt
        new TWEEN.Tween(cameraTarget)
          .to(earthPositionRef, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            setCameraTarget(cameraTarget)
          })
          .start()
      } else {
        const originalCameraPosition = new THREE.Vector3(45, 18, 30)
        const originalCameraTarget = new THREE.Vector3(0, 0, 0)

        new TWEEN.Tween(cameraPosition)
          .to(originalCameraPosition, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            setCameraPosition(cameraPosition)
          })
          .start()

        // Create a new tween for cameraTarget
        new TWEEN.Tween(cameraTarget)
          .to(originalCameraTarget, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            setCameraTarget(cameraTarget)
          })
          .start()
      }
      camera.position.copy(cameraPosition)
      camera.lookAt(cameraTarget)
      camera.updateProjectionMatrix()
    })

    useFrame(() => {
      updateEarthPosition()
      tweenLogic()
    })

    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
      <group ref={earthRef}>
        <mesh
          castShadow
          receiveShadow
          onClick={toggleFollowingEarth}
          // Use pointerEvents to change cursor on hover
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}>
          {/*  */}

          <sphereGeometry args={[1, 64, 64]} />
          <meshPhongMaterial
            map={earthTexture}
            normalMap={earthNormalMap}
            emissiveMap={earthEmissiveMap}
            emissive={0xffffff}
            emissiveIntensity={hovered ? 20 : 1.5}
            specularMap={earthSpecularMap}
            shininess={100}
            displacementMap={earthDisplacementMap}
            displacementScale={displacementScale}
          />
        </mesh>
        <Moon />
        <ISS />
      </group>
    )
  }
)

export default Earth
