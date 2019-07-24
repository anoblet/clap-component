import { css } from "lit-element";

export default css`
  grid-component {
    grid-template-columns: repeat(2, max-content);
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    fill: currentColor;
  }
`;
