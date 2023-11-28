import { css } from "@emotion/css";

export const fadeinDiv = (visibility: boolean) => css`
  transform: ${visibility ? 'none' : 'translateY(10vh)'};
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
`