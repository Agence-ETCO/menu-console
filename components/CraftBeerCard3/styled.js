import styled from "styled-components";

export const Label = styled.label`
  order: 2;
  background-color: ${(props) => (props.checked ? "#231F20" : "white")};
  border: 1px solid rgba(147, 149, 152, 0.75);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  width: 413px;
  height: 212px;
  position: relative;
  padding-top: 15px;
  margin-bottom: 40px;
  margin-right: 40px;
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
export const CheckboxContainer1 = styled.button`
  order: 1;

  border: none;
  background: none;
  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    position: absolute;
    left: 7.5%;
    top: 25%;
  }
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 50%;
  transition: all 150ms;
  position: relative;
  margin-left: -5px;
`;

export const Title = styled.div`
  margin-bottom: 0;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
`;

export const TextContainer = styled.div`
  color: ${(props) => (props.checked ? "white" : "#231f20")};
  text-align: left;
  margin-left: 20px;
  width: 250px;
  position: relative;
  div:nth-child(1) {
  }
  div:nth-child(2) {
    color: ${(props) => (props.checked ? "rgba(255,255,255, 0.5)" : "#231f20")};
    margin-bottom: 5px;
    font-family: "GTWalsheimRegular";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
`;
export const Type = styled.div`
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
  border-bottom: 1px solid rgba(147, 149, 152, 0.5);
  margin-bottom: 10px;
  margin-top: 0px;
  padding-bottom: 5px;
  width: 275px;
`;

export const Format = styled.div`
  color: ${(props) => (props.checked ? "white" : "#3C3C3C")} !important;
  font-family: "GtWalsheimRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Cell = styled.div`
  order: 2;
  width: 100px;
`;

export const Size = styled.div`
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  color: ${(props) =>
    props.checked ? "rgba(255,255,255, 0.5)" : "rgba(35, 31, 32, 0.5)"};
  font-size: 14px;
  line-height: 15px;
`;

export const Price = styled.div`
  color: ${(props) => (props.checked ? "white" : "#231f20")} !important;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubContainer1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const Container2 = styled.div`
  background-color: white;
  position: absolute;
  top: 76px;
  bottom: -25px;
  left: -61px;
  right: -1px;
  width: 413px;
  border-bottom: 1px solid rgba(147, 149, 152, 0.5);
  border-left: 1px solid rgba(147, 149, 152, 0.5);
  border-right: 1px solid rgba(147, 149, 152, 0.5);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  padding-top: 10px;
  span {
    font-family: "GtWalsheimBold";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-left: 60px;
  }
`;
