import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
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
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 15px;

  :disabled {
    opacity: 0.3;
  }
`;
export const CloseButton = styled.button`
  z-index: 200;
  border: none;
  background-color: transparent;
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
  background-color: #ffffff;
  box-shadow: 0px 4px 91px #000000;
  border-radius: 9px;
  position: relative;
  margin: auto;
  margin-top: 0;
  width: 1022px;
  height: 95%;
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
  font-weight: 600;
  font-size: 19px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000000;
  background: none;
  border: none;
  width: 210px;
  height: 55px;
  background-color: #f5ba18;
  border-radius: 82px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  svg {
    margin-right: 10px;
    width: 40px;
  }
  span {
    text-align: left;
  }
`;

export const Container3 = styled.div`
  margin-top: 50px;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3c3c3c;
  width: 300px;
  margin-left: 150px;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -20px;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  overflow-y: scroll;
  padding-bottom: 100px;
  margin-left: 70px;
`;
