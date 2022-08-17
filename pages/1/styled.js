import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 40px;
  width: 380px;
  height: 402px;
  margin-top: 30px;
  margin-right: auto;
`;

export const Subcontainer = styled.div`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
`;

export const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
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
