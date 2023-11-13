import { css } from "@emotion/react";

export default css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,700;1,6..12,400;1,6..12,700&display=swap");

  html,
  body {
    font-family: "Inter", sans-serif;
    padding: 0;
    margin: 0;
    font-weight: 500;
    color: #455a64;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: 0;
    outline: none;
    color: white;
  }
`;
