import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`flex items-center mb-5 sticky top-0 bg-white z-30`}
`;

const PrevBtn = styled.button<{ currentIndex: number }>`
  ${tw`flex justify-center items-center p-3 hover:scale-125 transition-all duration-150`}

  ${({ currentIndex }) => currentIndex === 0 && tw`hidden`}
`;

const ForwardBtn = styled.button`
  ${tw`flex justify-center items-center p-3 ml-auto transition-all duration-150`}

  &:hover {
    ${tw`scale-125`}
  }
`;

const SliderContent = styled.div`
  ${tw`flex gap-5 py-4 items-center transition-all duration-500 ease-in-out`}
`;

const SlideItem = styled.a`
  ${tw`bg-lightGray text-secondary text-center w-40 py-2 font-bold transition-all duration-150 rounded-md border-2 flex-shrink-0 border-mediumGray`}
  &:hover {
    ${tw`border-primary bg-softGray text-primary`}
  }
`;

export { Wrapper, ForwardBtn, PrevBtn, SlideItem, SliderContent };
