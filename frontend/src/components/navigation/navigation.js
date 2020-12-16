import React from "react";
import Link from "next/link";

import * as Styled from "./navigation.styles";

export const Navigation = () => {
  return (
    <Styled.Navigation>
      <Styled.List>
        <Styled.Item>
          <Link href="/about">About</Link>
        </Styled.Item>
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
