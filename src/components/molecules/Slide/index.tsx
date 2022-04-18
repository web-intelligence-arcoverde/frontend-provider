import { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import { Container, CardButton } from './style'
import { Button } from 'src/components/atomic/Button/Button'

const items = [
  {
    src: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide01.jpg?1650025268578%27',
    altText: 'Slide 1',
    caption: 'Maneiras inovadoras de facilitar a comunicação',
    describe:
      'Avaliamos as tradições de trabalho árduo e acreditamos que esta é a pedra angular de qualquer empresa de sucesso.',
  },
  {
    src: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide02.jpg?1650025269155%27',
    altText: 'Slide 2',
    caption: 'Conexões de alta velocidade entre corporações',
    describe:
      'Avaliamos as tradições de trabalho árduo e acreditamos que esta é a pedra angular de qualquer empresa de sucesso.',
  },
  {
    src: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide03.jpg?1650025320653%27',
    altText: 'Slide 3',
    caption: 'Conjunto progressivo de conectividade com a Internet',
    describe:
      'Avaliamos as tradições de trabalho árduo e acreditamos que esta é a pedra angular de qualquer empresa de sucesso.',
  },
]

const Slide = ({ props }: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = ({ newIndex }: any) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.describe}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Container>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <CardButton>
        <Button onClick={() => {}} children="Saiba Mais" />
        <Button onClick={() => {}} children="Torne-se um cliente" />
      </CardButton>
    </Container>
  )
}

export default Slide
