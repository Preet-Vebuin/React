import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: #282c34;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background: #50575d;
  }
`;

type ThemeToggleProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return <ToggleButton onClick={toggleTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</ToggleButton>;
};

export default ThemeToggle;
