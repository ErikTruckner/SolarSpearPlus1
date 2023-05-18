import { useState } from 'react'
import '../index.css'

import earthTN from '../images/earthTN.png'

const EarthButton = () => {
  return (
    <div className='earth-button-container'>
      <img src={earthTN} />
    </div>
  )
}

export default EarthButton
