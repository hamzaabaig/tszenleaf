import { Wrapper } from "./style";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";
import Slider from "../slider/Slider";
import BlogArchive from "../blogArchive/BlogArchive";
import LeftSidebar from "../common/leftSidebar/LeftSidebar";

const Layout = () => {
  return (
    <Wrapper>
      <BlogHeader />
      <HeroSection />
      <Slider />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <LeftSidebar />
        <BlogArchive />
      </div>
    </Wrapper>
  );
};

export default Layout;
