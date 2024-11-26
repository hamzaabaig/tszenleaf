import styled from "styled-components";
import tw, { TwStyle } from "twin.macro";

const Wrapper = styled.div`
  ${tw`hidden lg:flex lg:col-span-3 pt-4 lg:sticky top-40 flex-col gap-4 h-fit`}
`;

const StatesDropdownBtn = styled.button`
  ${tw`w-full flex items-center justify-between py-4 px-7 border border-gray-200 rounded-md`}
`;

const BoldText = styled.span<{ styles: TwStyle }>`
  ${tw`font-bold`}
  ${({ styles }) => styles && styles}
`;

const StatesDropdownMenu = styled.ul<{ showStatesDropdown: boolean }>`
  ${tw`absolute pt-3 w-full rounded-md bg-white border-[1px] border-softGray`}
  ${({ showStatesDropdown }) => (showStatesDropdown ? tw`block` : tw`hidden`)}
`;

const StatesDropdownItem = styled.li`
  ${tw`cursor-pointer text-primary pb-2 px-5 transition-all duration-200`}
  &:hover {
    ${tw`scale-105`}
  }
`;

const SearchBlogField = styled.input`
  ${tw`py-4 px-7 border-2 border-softGray rounded-md`}
`;

export {
  Wrapper,
  StatesDropdownBtn,
  BoldText,
  StatesDropdownMenu,
  StatesDropdownItem,
  SearchBlogField,
};
