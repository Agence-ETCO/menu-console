import styled from "styled-components";
import { colors } from "../../constants";

export const Container1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 100;
`;

export const CloseButton = styled.button`
  z-index: 200;
  border: none;
  background-color: ${colors.yellow};
  position: absolute;
  right: 15px;
  top: 15px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 200px;
  height: 129px;
  background-color: ${colors.yellow};
  position: fixed;
  top: 0;
  width: 100%;
  position: relative;
  z-index: 50;
`;
export const StyledLink = styled.button`
  color: ${colors.yellow};
  background-color: ${colors.black};
  min-width: 260px;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
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
  margin-left: -200px;

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  svg {
    margin-left: 20px;
  }
  :disabled {
    opacity: 0.3;
  }
`;

export const BoxContainer = styled.div``;
export const Square1 = styled.div`
  width: 479px;
  height: 639px;
  margin-top: 60px;
  margin-bottom: 50px;
  background: #d9d9d9;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: "GTWalsheimBold";
    font-weight: 800;
    font-size: 91px;
    line-height: 107px;
    letter-spacing: 0.1em;
    color: #231f20;
  }
`;
export const Square2 = styled.div`
  width: 479px;
  height: 239px;
  margin-top: 60px;
  margin-bottom: 50px;
  background: #d9d9d9;
  margin-left: auto;
  margin-right: auto;
`;
