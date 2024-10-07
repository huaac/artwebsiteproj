// import React, { useState, useEffect} from "react";
// import { CarouselItem } from "./CarouselItem";

// // import abbey14 from "./img/Abbey14OilP.jpg"

// export const Carousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         const link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
//         document.head.appendChild(link);

//         // Cleanup function to remove the link when the component unmounts
//         return () => {
//             document.head.removeChild(link);
//         };
//     }, []);


//     const items = [
//         {
// //             description: "From the La Mesa Studio, Abbey F. (age 14) Oils",
//             icon: require("./img/Abbey14OilP.svg") //has to be a svg file
// //             icon: {abbey14}
//         },
//         {
// //             description: "From the Bonita Studio, Isaac L. (age 11) Pastels"
//             icon: require("./img/Isaac11PastelP.svg")
//         },
// //         {
// // //             description: "From the Santee Studio, Jaelynn U. (age 16 Oils)"
// //             icon: require("./img/Jaelynn16OilsP.svg")
// //         },
//     ];

//     const updateIndex = (newIndex) => {
//         if(newIndex < 0) {
//             newIndex = 0;
//         } else if (newIndex >= items.length){
//             newIndex = items.length-1;}

//         setActiveIndex(newIndex);
//     }

//     return (
//     <div className="carousel">
//         <div className="inner"
//         style={{ transform: `translate(-${activeIndex * 100}%)`}}>
//             {items.map((item) => {
//                 return <CarouselItem item={item}/>;
//             })}
//         </div>

//         <div className="carousel-buttons">
//             <button onClick={()=> {
//                 updateIndex(activeIndex-1);}}className="button-arrow">
//                 <span class="material-symbols-outlined">
//                     arrow_back_ios
//                 </span>
//             </button>
//             <div className="indicators">
//                 {items.map((item, index)=>{
//                     return (
//                         <button onClick={()=> {
//                             updateIndex(index);}} className="indicator-buttons">
//                             <span className={`material-symbols-outlined ${index===activeIndex? "indicator-symbol-active": "indicator-symbol"}`}>radio_button_checked</span>
//                         </button>
//                     );
//                 })}

//             </div>
//             <button onClick={()=> {
//                 updateIndex(activeIndex+1);}} className="button-arrow">
//                 <span class="material-symbols-outlined">
//                     arrow_forward_ios
//                 </span>
//             </button>
//         </div>

//     </div>
//     );
// };


import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './CarouselButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const slides = [
    { icon: require('./img/Abbey14OilP.svg') }, 
    { icon: require('./img/Isaac11PastelP.svg') },
    { icon: require('./img/Jaelynn16OilsP.svg') }
  ];

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (  
            <div className="embla__slide" key={index}>
              <img
                src={slide.icon.default}  
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
