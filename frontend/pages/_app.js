import React from "react";
import { ThemeProvider } from "@emotion/react";

import { Header } from "@movies-app/layout";
import GlobalStyles from "../styles/globals";
import "tailwindcss/tailwind.css";

const theme = {
  colors: {
    primary: "red",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
