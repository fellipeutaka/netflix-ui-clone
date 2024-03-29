import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  background-color: #111;
  color: #fff;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}

::-webkit-scrollbar-thumb {
  background-color: #747373;
}
`;
