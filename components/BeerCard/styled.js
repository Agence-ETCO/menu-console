import styled from "styled-components";
import { colors } from "../../constants";

export const Label = styled.label`
  background-color: ${(props) => (props.checked ? "#231F20" : "white")};
  border: 1px solid rgba(147, 149, 152, 0.75);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  width: 413px;
  height: 305px;
  position: relative;
  padding-top: 15px;
  margin-bottom: 40px;
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
  right: 10px;
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
  opacity: 0.2;
  border-radius: 50%;
  transition: all 150ms;
  position: relative;
`;

export const TextContainer = styled.div`
  color: ${(props) => (props.checked ? "white" : "#231f20")};
  text-align: left;
  margin-left: 20px;
  width: 250px;
  div:nth-child(1) {
    margin-bottom: 5px;
    font-family: "GTWalsheimBold";
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
  }
  div:nth-child(2) {
    color: ${(props) => (props.checked ? "rgba(255,255,255, 0.5)" : "#231f20")};
    margin-bottom: 5px;
    font-family: "GTWalsheimRegular";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(147, 149, 152, 0.5);
  }

  div:nth-child(4) {
    color: ${(props) =>
      props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
    font-family: "GTWalsheimRegular";
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
  }

  table {
    margin-bottom: 45px;
    margin-top: 25px;

    th {
      color: ${(props) =>
        props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
      font-family: "GTWalsheimRegular";
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      width: 90px;
    }
    tr {
      font-family: "GTWalsheimBold";
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 30px;
`;
export const ImageContainer = styled.div`
  height: 210px;
  width: 190px;
  margin-top: -5px;
  margin-left: -20px;
`;
