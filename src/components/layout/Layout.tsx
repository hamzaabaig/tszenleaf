import { Wrapper } from "./style";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";
import Slider from "../slider/Slider";

const Layout = () => {
  return (
    <Wrapper>
      <BlogHeader />
      <HeroSection />
      <Slider />
    </Wrapper>
  );
};

export default Layout;
