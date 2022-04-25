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
import { SectionSlide } from 'src/__mocks__/slide'

const Slide = ({ props }: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === SectionSlide.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? SectionSlide.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = ({ newIndex }: any) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = SectionSlide.map(item => {
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
    <Container id="home">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={SectionSlide}
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
