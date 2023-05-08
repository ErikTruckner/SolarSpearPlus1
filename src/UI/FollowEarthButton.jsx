import React from 'react'

const FollowEarthButton = ({ followingEarth, onToggleFollowingEarth }) => {
  return (
    <button onClick={onToggleFollowingEarth}>
      {followingEarth ? 'Stop Following Earth' : 'Follow Earth'}
    </button>
  )
}

export default FollowEarthButton
