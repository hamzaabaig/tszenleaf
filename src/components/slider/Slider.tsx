import { useState } from "react";
import LeftArrowIcon from "../../assets/svgs/LeftArrowIcon";
import RightArrowIcon from "../../assets/svgs/RightArrowIcon";
import {
  Wrapper,
  ForwardBtn,
  PrevBtn,
  SlideItem,
  SliderContent,
} from './style';

const slideText = [
  "All Categories",
  "Slide 2",
  "Cannabis 101",
  "Slide 4",
  "CBD",
  "Slide 6",
  "Cooking",
  "Slide 5",
  "Dosing",
  "Slide 7",
  "Health & Wellness",
  "Slide 9",
  "Industry News",
  "Slide 5",
  "Medical Cannabis",
];

const Slider = () => {
  const [translateXValue, setTranslateXValue] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    if (currentIndex < slideText.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTranslateXValue((prevValue) => prevValue + 180);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setTranslateXValue((prevValue) => prevValue - 180);
    }
  };

  return (
    <Wrapper>
      <PrevBtn currentIndex={currentIndex} onClick={handlePrevSlide}>
        <LeftArrowIcon className={"w-6 h-6"} />
      </PrevBtn>

      <div className="overflow-hidden w-full">
        <SliderContent
          style={{
            transform: `translateX(-${translateXValue}px)`,
          }}
        >
          {slideText.map((text, index) => (
            <SlideItem key={index} href="#">
              {text}
            </SlideItem>
          ))}
        </SliderContent>
      </div>

      <ForwardBtn onClick={handleNextSlide}>
        <RightArrowIcon className={"w-6 h-6"} />
      </ForwardBtn>
    </Wrapper>
  );
};

export default Slider;
