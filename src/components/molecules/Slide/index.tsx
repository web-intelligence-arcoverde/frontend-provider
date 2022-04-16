import { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import { Container } from './style'

const items = [
  {
    src: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide01.jpg?1650025268578%27',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide02.jpg?1650025269155%27',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: 'https://livedemo00.template-help.com/wt_57837/images/page-1_slide03.jpg?1650025320653%27',
    altText: 'Slide 3',
    caption: 'Slide 3',
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
        <img className="teste" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
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
    </Container>
  )
}

export default Slide
