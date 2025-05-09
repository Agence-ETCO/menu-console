import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
  width: 423px;
  height: 51px;
  color: white;
  background-color: #231f20;
  text-transform: uppercase;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.03em;
  border: 1px solid #231f20;
  border-radius: 9px;
  margin-top: 33px;
  margin-bottom: 15px;
`;

export const StyledButton = styled.button`
  color: ${colors.black};
  background-color: white;
  width: 380px;
  height: 75px;
  border: 1px solid #231f20;
  border-radius: 9px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;

 
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(35, 31, 32, 0.9);
  z-index: 100;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 560px;
  height: 422px;
  background-color: #ffffff;
  box-shadow: 0px 4px 91px #000000;
  border-radius: 9px;
  position: relative;
  margin: auto;
  margin-top: 5%;
  opacity: 1 !important;
  div {
    font-family: "GTWalsheimBold";
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    color: #262626;
  }
  div:nth-child(3) {
    margin-top: 20px;
    font-family: "GTWalsheimBold";
    font-weight: 700;
    width: 423px;
  }
`;
export const CloseButton = styled.button`
  z-index: 200;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 15px;
  //top: 15px;
`;
export const Title = styled.div`
  background-color: #e30826;
  width: 560px;
  height: 77px;
  position: absolute;
  top: 0;
  font-size: 31px;
  line-height: 37px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: "GTWalsheimBold" ;
  font-weight: 700;
  font-size: 31px!important;
  line-height: 37px !important;
  color: #000000 !important;
  padding-top: 24px;
  margin-bottom: 33px;
  border-radius: 9px 9px 0 0;
`;
