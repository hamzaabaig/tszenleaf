import { Wrapper } from "./style";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";

const Layout = () => {
  return (
    <Wrapper>
      <BlogHeader />
      <HeroSection />
    </Wrapper>
  );
};

export default Layout;
