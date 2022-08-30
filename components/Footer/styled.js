import styled from "styled-components";
import { colors } from "../../constants";

export const Button = styled.button`
  font-family: "GTWalsheimMedium";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  color: black;

  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  background-color: ${colors.yellow};
  margin-left: ${(props) => (props.viewButtonText ? "5%" : "25%")};
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
  margin-left: ${(props) => (props.first ? "auto" : "50px")};
  margin-right: ${(props) => (props.first ? "auto" : "50px")};
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

export const StyledButton = styled.button`
  color: ${colors.yellow};
  background-color: ${colors.black};
  width: 272px;
  height: 69px;
  border-radius: 9px;
  border: 0;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Container1 = styled.div`
  width: 100%;
  background-color: ${colors.yellow};
  z-index: 50;
  height: 129px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
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

export const Select = styled.span`
  font-weight: 400;
  font-size: 19px;
  line-height: 21px;

  margin-left: auto;
  margin-right: auto;
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
  }
`;

export const Stage = styled.div`
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  letter-spacing: 0.05em;
  width: 300px;
  margin-left: 100px;
  div {
    padding-left: 15px;
  }
`;
export const Select1 = styled.span`
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  width: 300px;

  svg {
    transform: scale(0.75);
  }
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
    margin-left: 5px;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;
