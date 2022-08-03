import styled from "styled-components";
import { colors } from "../../constants";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 308px;
  background-color: ${colors.black};
`;

export const Container = styled.div`
  margin-right: 60px;
  margin-left: 60px;
  height: 131px;
  border-bottom: 1px solid #939598;
  display: flex;
  align-items: center;

  background-color: ${colors.black};
`;

export const Nav = styled.nav`
  color: ${colors.white};
  margin-left: auto;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  ul {
    display: inline-block;
    margin: 0;
    margin-left: 57px;
    padding: 0;
  }

  li {
    list-style: none;
    :first-letter {
      text-transform: uppercase;
    }
  }
`;
