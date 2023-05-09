import '../index.css'

const DyanmicHeader = ({ followingEarth, setFollowingEarth }) => {
  const headerText = followingEarth ? 'Earth System' : 'Solar System'
  return (
    <div className='dynamic-header-flex-container'>
      <div className='dynamic-header'>
        <h1 className='dynamic-header-h1'>{headerText}</h1>
      </div>
    </div>
  )
}

export default DyanmicHeader
