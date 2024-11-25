import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-12 gap-4 items-center p-3 md:p-8`}
`;

const ContentWrapper = styled.div`
  ${tw`lg:col-span-5 space-y-6`}
`;

const ImageWrapper = styled.div`
  ${tw`lg:col-span-7`}
`;

const ReadMoreButton = styled.button`
  ${tw`text-white max-w-max bg-primary font-bold px-8 py-4 rounded-md transition-all duration-200`}
  &:hover {
    ${tw`bg-darkGray`}
  }
  &:active {
    ${tw`bg-secondary`}
  }
`;

const HeroImage = styled.img`
  ${tw`rounded-md w-full`}
`;

const FeaturedLabel = styled.h4`
  ${tw`text-gray-800 font-bold`}
`;

const ArticleLink = styled.a`
  ${tw`w-max text-3xl font-bold`}
  &:hover {
    ${tw`underline`}
  }
`;

export {
  Wrapper,
  ReadMoreButton,
  ContentWrapper,
  ImageWrapper,
  HeroImage,
  FeaturedLabel,
  ArticleLink,
};
