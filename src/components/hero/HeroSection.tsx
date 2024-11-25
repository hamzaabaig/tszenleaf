import heroImg from '../../assets/images/heroImg.jpg'
import {
  Wrapper,
  ReadMoreButton,
  ContentWrapper,
  ImageWrapper,
  HeroImage,
  FeaturedLabel,
  ArticleLink,
} from "./style";

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <FeaturedLabel className="text-gray-800 font-bold">
          Featured Article
        </FeaturedLabel>
        <ArticleLink
          className="w-max hover:underline text-3xl font-bold"
          href="#"
        >
          <h2>LOL with Bits Dragonfruit</h2>
        </ArticleLink>
        <p>
          By{" "}
          <a href="#" className="font-bold">
            Danyal Swan
          </a>{" "}
          On{" "}
          <a
            href="#"
            className="font-bold text-darkGray hover:text-primary hover:underline"
          >
            November 15, 2024
          </a>
        </p>
        <p>
          Ready to LOL, IRL? Bits Dragonfruit LOL edibles are infused with 5mg
          THC, CBC, and adaptogens for a feel-good gummy for any time, any
          place.
        </p>
        <ReadMoreButton>Read More</ReadMoreButton>
      </ContentWrapper>
      <ImageWrapper>
        <HeroImage src={heroImg} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default HeroSection;
