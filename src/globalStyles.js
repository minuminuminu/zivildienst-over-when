import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  @import
  url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
  margin:0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

body{
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
`;

export default GlobalStyle;
