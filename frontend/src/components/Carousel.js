import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import Slide from './CarouselImg';

const items = [
  [
    {
      src: '../assets/amsterdan.jpg',
      altText: "Amsterdam",
     
    },
    {
      src: '../assets/bangok.jpg',
      altText: 'Bangkok',
      
    },
    {
      src: '../assets/santorini.jpg',
      altText: 'Santorini',
      
    },
    {
      src: '../assets/Egipto.jpg',
      altText: 'Egypt',
     
    },
  ],
  [{
    src: '../assets/italia1.jpg',
    altText: 'Cinque Terre',
   
  },
  {
    src: '../assets/francia.jpg',
    altText: 'Paris',
   
  },
  {
    src: '../assets/maldivas.jpg',
    altText: 'Maldives',
   
  },
  {
    src: '../assets/croacia.jpg',
    altText: 'Split',
   
  },
  ],
  [{
    src: '../assets/Rusia.jpg',
    altText: 'Moscow',
  
  },
  {
    src: '../assets/peru.jpg',
    altText: 'Machu Picchu',
   
  },
  {
    src: '../assets/dinamarca.jpg',
    altText: 'Copenhagen',
   
  },
  {
    src: '../assets/italia2.jpg',
    altText: 'Venice',
  
  },]
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item,index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <Slide item={item}  />

      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;