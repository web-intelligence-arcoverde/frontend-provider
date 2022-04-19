import { CardChat } from './style'
import Lottie from 'react-lottie'
import { Animation } from 'src/assets'
import { useState } from 'react'

const Chat = () => {
  const [animation, setAnimation] = useState(false)
  const handleHover = () => {
    setAnimation(true)
  }
  const handleExit = () => {
    setAnimation(false)
  }

  console.log(animation)

  return (
    <CardChat onMouseLeave={handleExit} onMouseEnter={handleHover}>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          animationData: Animation.chat,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width="60px"
      />
    </CardChat>
  )
}

export default Chat
