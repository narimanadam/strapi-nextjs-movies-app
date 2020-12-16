import React from "react";

import { Navigation } from "@movies-app/components";
import * as Styled from "./header.styles";

export const Header = () => {
  return (
    <Styled.Header>
      <div className="container flex justify-between items-center">
        <Styled.Logo src="/images/logo.svg" alt="Logo" />
        <Navigation />
      </div>
    </Styled.Header>
  );
};

export default Header;
