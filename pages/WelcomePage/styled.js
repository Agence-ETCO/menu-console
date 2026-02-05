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
export const Subcontainer = styled.div``;
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
  line-height: 33px;
`;
export const Body = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-top: 40px;
`;

export const BodyNewLine = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
`;

export const Body1 = styled.span`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-left: 5px;
  margin-right: 5px;
`;
export const Body2 = styled.span`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  display: block;
  font-size: 17px;
  line-height: 23px;
  margin-top: 20px;
  color: #e30826;
`;
export const Date = styled.span`
  display: inline-block;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
  color: #e30826;
`;
export const Contact = styled.span`
  ont-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: #231f20;
  text-decoration: underline;
  cursor: pointer;
`;
export const DateLimit = styled.span`
  font-family: "GTWalsheimMedium";
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  margin-top: 30px;
  display: inline-block;
`;
export const Ending = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-top: 50px;
  span {
    text-decoration: underline;
  }
`;

const Empty = () => {};
export default Empty;
