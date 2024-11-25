import styled from "styled-components";
import tw from "twin.macro";

const BreadcrumbList = styled.ul`
  ${tw`flex items-center py-2`}
`;

const BlogTitle = styled.h1`
  ${tw`text-3xl font-bold pb-2`}
`;

export { BreadcrumbList, BlogTitle };
