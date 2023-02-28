import styled from "styled-components";
import { colors } from "../../constants";

export const Label = styled.label`
  background-color: ${(props) => (props.checked ? "#231F20" : "white")};
  border: 1px solid rgba(147, 149, 152, 0.75);
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  width: 413px;
  //height: 305px;
  position: relative;
  padding-top: 25px;
  margin-bottom: 40px;
  margin-left: 30px;
  position: relative;
  z-index: 9;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  right: 25px;
  top: 17px;
  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    position: absolute;
    left: 0;
  }
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: ${(props) =>
    props.checked ? "rgba(217, 217, 217, 0.25)" : "rgba(217, 217, 217, 0.5)"};
  border-radius: 50%;
  transition: all 150ms;
  position: relative;
`;

export const TextContainer = styled.div`
  color: ${(props) => (props.checked ? "white" : "#231f20")};
  text-align: left;
  margin-left: 20px;
  width: 290px;

  div:nth-child(1) {
    color: ${(props) => (props.checked ? "rgba(255,255,255, 0.75)" : "rgba(35, 31, 32, 0.75)")};
    margin-bottom: 5px;
    font-family: "GTWalsheimRegular";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 15px;
  }

  div:nth-child(2) {
    color: ${(props) => (props.checked ? "rgba(255,255,255, 0.75)" : "rgba(35, 31, 32, 0.75)")};
    font-family: "GTWalsheimRegular";
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    text-transform: uppercase;
    padding-bottom: 15px;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  margin-left: 40px;
`;

export const Tag = styled.div`
  position: relative;
  left: 223px;
  top: 15px;
  width: 220px;
  height: 50px;
  z-index: 1;
  background: #939598;
  border-radius: 9px;
  p {
    margin-left: 25px;
    padding-top:10px;
    font-family: 'GTWalsheimBold';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;

  }
`;



