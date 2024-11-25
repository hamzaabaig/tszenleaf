import HouseIcon from "../../assets/svgs/HouseIcon";
import ForwardSlashIcon from "../../assets/svgs/ForwardSlasIcon";
import { BreadcrumbList, BlogTitle } from "./style";

const BlogHeader = () => {
  return (
    <div className="mb-7">
      <BreadcrumbList>
        <li className="flex items-center">
          <a href="#">
            <HouseIcon className={"h-5 w-5 flex-shrink-0 "} />
          </a>
          <ForwardSlashIcon className={"h-5 w-5 flex-shrink-0"} />
        </li>
        <li className="font-bold">Blog</li>
      </BreadcrumbList>
      <BlogTitle>Cannabis Education News & Stories</BlogTitle>
      <p>
        Welcome to the Zen Leaf Blog. Be sure to visit often for new posts and
        special behind-the-scenes content.
      </p>
    </div>
  );
};

export default BlogHeader;
