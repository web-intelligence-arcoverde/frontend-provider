import { Button } from '../Button/Button'
import { CardChat } from './style'
import Lottie from 'react-lottie'
import { Animation } from 'src/assets'
import { useState } from 'react'

const Chat = () => {
  const [animation, setAnimation] = useState(false)
  const handleHover = () => {
    setAnimation(true)
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation.chat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <CardChat onMouseOver={handleHover}>
      {animation && <Lottie options={defaultOptions} width="50px" />}
    </CardChat>
  )
}

export default Chat
