import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 1440px;
`;

export const ImageContainer = styled.div`
  width: 279.55px;
  height: 402px;
  margin-top: 30px;
  margin-left: 100px;
`;

export const Subcontainer = styled.div`
  width: 562px;
  color: ${colors.black};
  margin-left: 100px;
  margin-right: auto;
`;

export const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
`;
export const Body = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 45px;
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
  }
`;
export const Date = styled.div`
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
`;

const Empty = () => {};
export default Empty;
