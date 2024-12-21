import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './Slides.css'
import slide1 from './slideshow/slide1.jpg'
import slide2 from './slideshow/slide2.png'
import slide3 from './slideshow/slide3.png'

const Slide = () => {
  const images = [slide1, slide2, slide3]

  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [autoplay])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div>
                  <img
                    src={image} 
                    alt={`Image ${index + 1}`}
                    className='slide'
                  />
                  {index === 0 && <div className="slide-text">
                    Try Your First Class Free!
                    <br />
                    <button className='free-class-button'>Learn More</button>
                    </div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Slide
