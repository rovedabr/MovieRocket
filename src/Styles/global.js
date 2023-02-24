import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_BODY};
  color: #F4EDE8;
  -webkit-font-smoothing: antialiased;
}

body, h1, button, input, p, textarea {
  font-family: 'Roboto Slab', serif;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.85);
}
`