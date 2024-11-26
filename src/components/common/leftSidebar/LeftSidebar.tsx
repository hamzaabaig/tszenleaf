import React, { useState } from "react";
import Button from "../Button/Button";
import DownArrowIcon from "../../../assets/svgs/DownArrowIcon";
import UpArrowIcon from "../../../assets/svgs/UpArrowIcon";
import FacebookIcon from "../../../assets/svgs/FbIcon";
import XIcon from "../../../assets/svgs/XIcon";
import tw from "twin.macro";
import {
  Wrapper,
  StatesDropdownBtn,
  BoldText,
  StatesDropdownMenu,
  StatesDropdownItem,
  SearchBlogField,
} from "./style";

const LeftSidebar = () => {
  const states = [
    "All States",
    "Texas",
    "West Virginia",
    "Michigan",
    "Ohio",
    "Arizona",
    "North Dakota",
    "South Carolina",
    "New Jersey",
  ];

  const [showStatesDropdown, setShowStatesDropdown] = useState(false);

  const [dropdownButtonText, setDropdownButtonText] = useState("Select State");

  const handleStatesDropdown = () => {
    setShowStatesDropdown(!showStatesDropdown);
  };

  const handleDropdownButtonText = (event: React.MouseEvent<HTMLLIElement>) => {
    const text = event.currentTarget.innerText;
    setDropdownButtonText(text);
    handleStatesDropdown();
  };

  return (
    <Wrapper>
      <BoldText styles={tw`ml-3`}>Search</BoldText>
      <SearchBlogField type="text" placeholder="Search Blog" />
      <BoldText styles={tw`ml-3`}>Filter By State</BoldText>
      <div className="relative">
        <StatesDropdownBtn onClick={handleStatesDropdown}>
          <span>{dropdownButtonText}</span>
          <DownArrowIcon
            className={`${showStatesDropdown ? "hidden" : "block"} w-6 h-6`}
          />
          <UpArrowIcon
            className={`${showStatesDropdown ? "block" : "hidden"} w-6 h-6`}
          />
        </StatesDropdownBtn>
        <StatesDropdownMenu showStatesDropdown={showStatesDropdown}>
          {states.map((state, index) => (
            <StatesDropdownItem key={index} onClick={handleDropdownButtonText}>
              {state}
            </StatesDropdownItem>
          ))}
        </StatesDropdownMenu>
      </div>
      <BoldText styles={tw`ml-3`}>Share</BoldText>
      <div className="flex flex-col gap-4">
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
      </div>
    </Wrapper>
  );
};

export default LeftSidebar;
