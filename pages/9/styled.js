import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  min-height: 200vh;
  display: flex;
  justify-content: center;
  background-color: ${colors.black};
`;
export const Container1 = styled.div`
  max-width: 1450px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.black};
  padding-left: 7%;
  padding-right: 7%;
`;

export const Subcontainer = styled.div`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
`;
export const StyledLink = styled.button`
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
  margin-left: ${(props) => (props.first ? "auto" : "auto")};
  margin-right: ${(props) => (props.first ? "auto" : "")};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  svg {
    margin-left: 20px;
  }
  :disabled {
    opacity: 0.3;
  }
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1300px;

  margin-right: auto;
  margin-left: auto;

  span {
    font-family: "GTWalsheimMedium";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  background-color: ${colors.yellow};
  z-index: 50;
  height: 129px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  pos
`;

export const CloseButton = styled.button`
  z-index: 200;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 52px;
  top: 52px;
`;

const Empty = () => {};
export default Empty;
