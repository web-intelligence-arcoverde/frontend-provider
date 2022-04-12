import { SocialMediaIcons } from 'src/assets'
import { CardImgs, Img } from './style'

const SocialMedia = () => {
  return (
    <CardImgs>
      {' '}
      {SocialMediaIcons.map(media => (
        <Img src={media.icon} alt="" />
      ))}
    </CardImgs>
  )
}

export default SocialMedia
