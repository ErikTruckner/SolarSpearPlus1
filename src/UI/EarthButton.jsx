import { useState } from 'react'
import '../index.css'

import earthTN from '../images/earthTN.png'
import sunTN from '../images/sunTN.png'
import sunTN1 from '../images/sunTN1.png'

const EarthButton = ({ followingEarth, setFollowingEarth }) => {
  const toggleFollowingEarth = () => {
    setFollowingEarth((prevFollowingEarth) => !prevFollowingEarth)
  }
  const earthButtonImage = followingEarth ? (
    <img src={sunTN1} />
  ) : (
    <img src={earthTN} />
  )

  return (
    <div onClick={toggleFollowingEarth} className='earth-button-container'>
      {earthButtonImage}
    </div>
  )
}

export default EarthButton
