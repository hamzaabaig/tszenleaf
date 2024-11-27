import { Wrapper } from "./style";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";
import Slider from "../slider/Slider";
import BlogArchive from "../blogArchive/BlogArchive";
import LeftSidebar from "../common/leftSidebar/LeftSidebar";
import Footer from "../common/footer/Footer";

const Layout = () => {
  return (
    <Wrapper>
      <div className="px-3 lg:px-10 ">
        <BlogHeader />
        <HeroSection />
        <Slider />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <LeftSidebar />
          <BlogArchive />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
