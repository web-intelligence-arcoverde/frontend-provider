import { Default, Navigation } from './style'
import { Animation } from 'src/assets'
import Lottie from 'react-lottie'
import { useState } from 'react'
import NavModal from '../NavModal'

const NavMobile = () => {
  const [visible, setVisible] = useState(false)
  const handleModal = () => {
    setVisible(!visible)
  }
  return (
    <Navigation>
      <Default onClick={handleModal}>
        <Lottie
          options={{
            loop: false,
            autoplay: false,
            animationData: Animation.menu,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="25px"
        />
        <h2>Home</h2>
      </Default>
      {visible && <NavModal setVisible={setVisible} />}
    </Navigation>
  )
}

export default NavMobile
