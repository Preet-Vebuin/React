import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ darkMode: boolean }>`
  body {
    background-color: ${({ darkMode }) => (darkMode ? "#1e1e1e" : "#ffffff")};
    color: ${({ darkMode }) => (darkMode ? "#ffffff" : "#000000")};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;
