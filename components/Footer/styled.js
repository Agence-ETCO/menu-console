import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
  font-family: "GTWalsheimMedium";
  font-style: normal;
  font-weight: 600;
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
  border: 0;
  border-radius: 9px;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-left: 110px;
  margin-right: 100px;
  svg {
    margin-left: 20px;
  }
  :disabled {
    opacity: 0.3;
  }
`;

export const StyledButton = styled.button`
  color: ${colors.yellow};
  background-color: ${colors.black};
  width: 272px;
  height: 69px;
  border-radius: 9px;
  border: 0;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-left: 50px;
  margin-right: 50px;
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
  z-index: 50;

  span {
    font-family: "GTWalsheimMedium";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;

export const Select = styled.span`
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  width: 300px;
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
  }
`;
