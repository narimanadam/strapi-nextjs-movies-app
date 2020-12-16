import React from "react";
import { Global, css } from "@emotion/react";
import normalize from "./normalize";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${normalize}
        .container {
          max-width: 960px;
          width: 100%auto;
          margin: 0 auto;
          padding: 0 30px;
        }
      `}
    />
  </>
);

export default GlobalStyles;
