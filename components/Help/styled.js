import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
  color: ${colors.black};
  background-color: ${colors.yellow};
  width: 248px;
  height: 68px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
`;
export const CloseButton = styled.button`
  z-index: 200;
  border: none;
  background-color: white;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 31, 32, 0.9);
  z-index: 100;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  height: 274px;
  background-color: #ffffff;
  box-shadow: 0px 4px 91px #000000;
  border-radius: 9px;
  position: relative;
  margin: auto;
  margin-top: 10%;
  opacity: 1 !important;
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #231f20;
  margin-top: 50px;
  margin-bottom: 30px;
  text-transform: uppercase;
  width: 454px;
  letter-spacing: 0.05em;
`;

export const Subtitle = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: #262626;
  div {
    font-family: "GTWalsheimRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24x;
    color: #3c3c3c;
    width: 454px;
  }
`;
export const Subtitle2 = styled.div`
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: #3c3c3c;
  width: 454px;
  margin-top: 40px;
  margin-bottom: 55px;
  a {
    text-decoration: underline;
  }
`;
