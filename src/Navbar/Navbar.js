import React from "react";
import styled from "styled-components";
import { dtfRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${dtfRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Ding Tai Fung{" "}
        <span role="img" aria-label="pizza slice">
        🥟
        </span>
      </Logo>
    </NavbarStyled>
  );
}
