import styled from "styled-components";
import { colors } from "../../constants";

export const Label = styled.label`
  background-color: ${(props) => (props.checked ? "#231F20" : "white")};
  border: 1px solid #939598;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  width: 413px;
  height: 400px;
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
    z-index::50;
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

export const Desc = styled.div`
  color: ${(props) =>
    props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
  padding-bottom: 20px;
  margin-bottom: -5px;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
export const TextContainer = styled.div`
  color: ${(props) => (props.checked ? "white" : "#231f20")};
  text-align: left;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 25px;
  width: 300px;

  div:nth-child(3) {
    font-family: "GTWalsheimMedium";
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  div:nth-child(4) {
  }

  div:nth-child(6) {
    font-family: "GTWalsheimRegular";
    font-weight: 400;
    color: ${(props) =>
      props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
  }

  table {
    margin-bottom: 25px;
    td {
      width: 90px;
    }
    th {
      font-family: "GTWalsheimRegular";
      font-weight: 400;
      color: ${(props) =>
        props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
      font-size: 14px;
      line-height: 17px;
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
  margin-top: 30px;
  margin-bottom: 35px;
`;
export const CircleContainer = styled.div`
  position: relative;
  color: ${(props) =>
    props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-top: 1px solid rgba(147, 149, 152, 0.5);
  border-bottom: 1px solid rgba(147, 149, 152, 0.5);
  margin-bottom: 10px;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-right: 25px;
`;

export const Circle = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  top: 10%;
  border: 1px solid #a39161;
  right: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  span {
    margin-top: 10px;
  }
`;
export const Container2 = styled.div``;
export const Icons = styled.div`
  display: flex;
  flex-direcyion: row;
  div {
    margin-right: 15px;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  svg:first-child {
    margin-leftt: 25px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 15px;
`;

export const Sugar = styled.div`
  color: ${(props) =>
    props.checked
      ? "rgba(255,255,255, 0.5)"
      : "rgba(35, 31, 32, 0.5)"} !important;
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-size: 19px;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  max-height: 65px;
  min-height: 50px;
`;
