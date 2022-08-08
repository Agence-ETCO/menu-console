import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  svg {
    margin-top: 90px;
  }
`;

export const Subcontainer = styled.div`
  width: 50%;
  color: ${colors.black};
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
