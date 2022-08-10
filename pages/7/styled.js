import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.black};
  min-height: 100vh;
  margin-top: 0;
`;

export const Subcontainer = styled.div`
  width: 638px;
  color: ${colors.black};
`;

export const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  color: ${colors.white};
`;

export const Body = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: white;
  margin-bottom: 10px;
  a {
    text-decoration: underline;
  }
`;

const Empty = () => {};
export default Empty;
