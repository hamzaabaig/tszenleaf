import cardImg from "../../assets/images/blogArchiveImg.jpg";
import {
  BlogPostContainer,
  BlogPost,
  TagsItem,
  TagsList,
  LoadMorePostsBtn,
  ShareButtonsContainer,
} from "./style";
import XIcon from "../../assets/svgs/XIcon";
import FacebookIcon from "../../assets/svgs/FbIcon";
import Button from "../common/Button/Button";

const BlogArchive = () => {
  return (
    <div className="col-span-9 pb-3">
      <BlogPostContainer>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-darkGray">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates and the differences between BHO
            and Ros.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            CBC vs. CBD: What’s the Difference Between These Two Cannabinoids?
          </h3>
          <p className="text-darkGray">
            Have you recently heard of Green Wednesday and are curious about
            what it is? Well mark your calendars because Green Wednesday is a
            cannabis holiday packed with soul should deals and good vibes. Let’s
            explore why Green Wednesday should be on your radar and how you can
            make the most of it.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-darkGray">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-darkGray">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            CBC vs. CBD: What’s the Difference Between These Two Cannabinoids?
          </h3>
          <p className="text-darkGray">
            Have you recently heard of Green Wednesday and are curious about
            what it is? Well mark your calendars because Green Wednesday is a
            cannabis holiday packed with soul should deals and good vibes. Let’s
            explore why Green Wednesday should be on your radar and how you can
            make the most of it.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-darkGray">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-darkGray">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            CBC vs. CBD: What’s the Difference Between These Two Cannabinoids?
          </h3>
          <p className="text-darkGray">
            Have you recently heard of Green Wednesday and are curious about
            what it is? Well mark your calendars because Green Wednesday is a
            cannabis holiday packed with soul should deals and good vibes. Let’s
            explore why Green Wednesday should be on your radar and how you can
            make the most of it.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-darkGray">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
      </BlogPostContainer>
      <div className="flex justify-center mb-4">
        <LoadMorePostsBtn>Load More Posts</LoadMorePostsBtn>
      </div>
      <div className="lg:hidden">
        <span className="font-bold ml-3">Share</span>
        <ShareButtonsContainer>
          <Button
            className={"text-primary font-bold py-4 px-7 hover:bg-defaultBlue hover:text-white"}
            svg={<FacebookIcon className={"h-6 w-6"} />}
            svgPosition="start"
            text="Post To Facebook"
            variant="outlined"
            onClick={() => alert("Button clicked!")}
          />
          <Button
            className={"text-primary font-bold py-4 px-7 hover:bg-skyBlue hover:text-white"}
            svg={<XIcon className={"h-6 w-6"} />}
            svgPosition="start"
            text="Post To X"
            variant="outlined"
          />
        </ShareButtonsContainer>
      </div>
    </div>
  );
};

export default BlogArchive;
