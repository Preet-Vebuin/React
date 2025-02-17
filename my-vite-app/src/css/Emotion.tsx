// 4 ways to implement css in react 1 : traditional css - for small apps
// 2 : inline - for small apps
// 3 : css modules - for larger apps
// 4 : Styled components - for dynamic and theme based styling
// 5 : emotion - for dynamic and theme based styling
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

// Define styles using Emotion's css function
const buttonStyle = css`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

// Define a typed styled-component
const StyledButton = styled.button`
  ${buttonStyle}
`;

// Define the Button component using TypeScript
const Emotion: React.FC = () => {
  return <StyledButton>Click Me</StyledButton>;
};

export default Emotion;
