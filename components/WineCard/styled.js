import styled from "styled-components";
import { colors } from "../../constants";

export const Label = styled.label`
  background-color: ${(props) => (props.checked ? "#3C3C3C" : "white")};
  border: 1px solid #3c3c3c;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  width: 413px;
  height: 385px;
  position: relative;
  padding-top: 15px;
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
  background-color: #d9d9d9;
  opacity: 0.2;
  border-radius: 50%;
  transition: all 150ms;
  position: relative;
`;

export const TextContainer = styled.div`
  color: ${(props) => (props.checked ? "white" : "#231f20")};
  text-align: left;
  margin-left: 15px;
  margin-right: 35px;
  div:nth-child(1) {
    margin-bottom: 5px;
    font-size: 19px;
    line-height: 23px;
  }
  div:nth-child(2) {
    color: ${(props) => (props.checked ? "rgba(255,255,255, 0.5)" : "#231f20")};
    padding-bottom: 20px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 19px;
    border-bottom: 1px solid #939598;
  }

  div:nth-child(3) {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  div:nth-child(4) {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-bottom: 1px solid #939598;
    margin-bottom: 18px;
    margin-top: 5px;
    padding-bottom: 20px;
  }

  div:nth-child(6) {
    color: ${(props) => (props.checked ? "rgba(255,255,255, 0.5)" : "#231f20")};
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
  }

  table {
    margin-bottom: 45px;
    td {
      width: 70px;
    }
    th {
      color: ${(props) =>
        props.checked ? "rgba(255,255,255, 0.5)" : "#231f20"};
      font-size: 14px;
      line-height: 17px;
    }
    tr {
      font-size: 15px;
      line-height: 18px;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;
export const CircleContainer = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #f1bdd8;
  opacity: 0.2;
  border-radius: 50%;
  position: absolute;
  top: 0;
  border: 1px solid #a39161;
  right: 5%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
`;
