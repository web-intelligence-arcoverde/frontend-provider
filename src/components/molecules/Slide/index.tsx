/* eslint-disable @typescript-eslint/no-explicit-any */
import SimpleImageSlider from 'react-simple-image-slider'
import { Container } from './style'

const IMAGES = [
  {
    url: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide01.jpg?1650025268578',
    title: 'deagraça',
  },
  {
    url: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide02.jpg?1650025269155',
  },
  {
    url: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide03.jpg?1650025320653',
  },
]

const SlideSection = () => {
  return (
    <Container>
      <SimpleImageSlider
        width="100%"
        height="100vh"
        images={IMAGES}
        showNavs={true as boolean}
        showBullets={false as boolean}
      />
    </Container>
  )
}

export default SlideSection
