import styled from "styled-components";
import { colors } from "../../constants";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 308px;
  background-color: ${colors.black};
  @media (max-width: 1000px) {
    width: 1480px;
  }
`;

export const Container1 = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1480px;
`;

export const Container = styled.div`
  height: 131px;
  border-bottom: 1px solid rgba(147, 149, 152, 0.75);
  display: flex;
  align-items: center;
  background-color: ${colors.black};
  margin-right: 60px;
  margin-left: 60px;
`;

export const Nav = styled.nav`
  color: ${colors.white};
  margin-left: auto;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
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

export const User = styled.div`
  font-family: 'GTWalsheimRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #939598;
  margin-left: 50px;
`;
