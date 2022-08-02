import styled from "styled-components";
import { colors } from "../../constants";

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  span:nth-child(1) {
    display: block;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }
  span:nth-child(2) {
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
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

export const TextContainer1 = styled.div`
  margin-left: 25px;
`;
