import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;
  margin-right: 30%;
  padding-bottom: 200px;
`;
export const Greeting = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: ${colors.black};
  margin-top: 62px;
  margin-bottom: 62px;
`;
export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  margin-bottom: 40px;
`;
export const Body = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
`;
export const Date = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
  color: #e30826;
  margin-bottom: 50px;
`;
export const DateLimit = styled.div`
  font-family: "GTWalsheimMedium";
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  margin-top: 30px;
`;
export const Ending = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  span {
    text-decoration: underline;
  }
`;

const Empty = () => {};
export default Empty;
