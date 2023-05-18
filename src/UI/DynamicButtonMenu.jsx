import '../index.css'
import { useState } from 'react'
import EarthButton from './EarthButton'

const DynamicButtonMenu = ({ followingEarth, setFollowingEarth }) => {
  const dynamicBorder = followingEarth
    ? 'dynamic-button-menu-container-border-earth'
    : 'dynamic-button-menu-container-border-solar'

  return (
    <div
      className={`dynamic-button-menu-container 
    ${dynamicBorder}`}>
      <EarthButton
        followingEarth={followingEarth}
        setFollowingEarth={setFollowingEarth}
      />
    </div>
  )
}

export default DynamicButtonMenu
