import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
  font-size: 21px;
  line-height: 25px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  background-color: ${colors.yellow};
`;

export const StyledLink = styled.button`
  color: ${colors.yellow};
  background-color: ${colors.black};
  width: 272px;
  height: 69px;
  border-radius: 9px;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 129px;
  background-color: ${colors.yellow};
  position: fixed;
  bottom: 0;
  width: 100%;
`;
