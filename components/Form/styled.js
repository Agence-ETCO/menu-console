import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
  color: ${colors.black};
  background-color: ${colors.yellow};
  width: 248px;
  height: 68px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  margin-left: 100px;
  margin-top: 35px;
  padding-top: 5px;
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
  opacity: ${(props) => (props.showForm ? "1" : "0")};
  pointer-events: ${(props) => (props.showForm ? "auto" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  overflow-y: scroll;
  background-color: rgba(35, 31, 32, 0.9);
  z-index: 100;
  transition: opacity 0.5s;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 95px;
  width: 639px;
  height: 799px;
  background-color: #ffffff;
  box-shadow: 0px 4px 91px #000000;
  border-radius: 9px;
  position: relative;
  margin: auto;
  margin-top: 1%;
  opacity: 1 !important;
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #231f20;
  margin-top: 50px;
  margin-bottom: 15px;
  width: 400px;
`;

export const Subtitle = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3c3c3c;
  width: 454px;
  margin-bottom: 24px;
  margin-top: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: "GTWalsheimRegular";

  font-weight: 400;
  font-size: 19px;
  line-height: 20px;

  color: #231f20;
  span {
    margin-left: 15px;
  }
  margin-top: 15px;
`;
export const Input = styled.input`
  width: 453px;
  height: 50px;
  font-size: 19px;
  color: #231f20;
  border: 1px solid #939598;
  border-radius: 9px;
  margin-top: 5px;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const InputSmall = styled.input`
  width: 123px;
  height: 50px;
  font-size: 19px;
  line-height: 25px;
  color: #231f20;
  border: 1px solid #939598;
  border-radius: 9px;
  margin-top: 5px;
  margin-bottom: 20px;
  padding-left: 10px;
  :placeholder {
    font-family: "GTWalsheimRegular";

    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
    color: #939598;
  }
`;
