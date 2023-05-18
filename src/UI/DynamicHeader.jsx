import '../index.css'
import DynamicButtonMenu from './DynamicButtonMenu'

const DyanmicHeader = ({ followingEarth, setFollowingEarth }) => {
  const headerText = followingEarth ? 'Earth System' : 'Solar System'
  const headerClass = followingEarth ? 'earth-transition' : 'solar-transition'
  return (
    <div className='dynamic-header-flex-container'>
      <div className={`dynamic-header ${headerClass}`}>
        <h1 className='dynamic-header-h1'>{headerText}</h1>
      </div>
      <p className='dynamic-header-mobile-instructions'>Navigation Menu</p>
      <DynamicButtonMenu
        followingEarth={followingEarth}
        setFollowingEarth={setFollowingEarth}
      />
    </div>
  )
}

export default DyanmicHeader
