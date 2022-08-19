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
  height: 313px;
  background-color: #ffffff;
  box-shadow: 0px 4px 91px #000000;
  border-radius: 9px;
  position: relative;
  margin: auto;
  margin-top: 0;
  width: 1022px;
  height: 983px;
  opacity: 1 !important;
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #231f20;
  margin-top: 75px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3c3c3c;
  width: 454px;
  margin-bottom: 34px;
`;
export const Subtitle2 = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3c3c3c;
  width: 454px;
  margin-top: 40px;
  margin-bottom: 34px;
  a {
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 129px;
  background-color: ${colors.yellow};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const StyledButton = styled.button`
  font-family: "GTWalsheimBold";
  font-size: 17px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000000;
  background: none;
  border: none;
  width: 233px;
  height: 67px;
  background-color: #f5ba18;
  border-radius: 82px;
  margin-top: 75px;
  margin-left: 150px;
`;
export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
