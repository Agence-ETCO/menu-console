import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.black};
  min-height: 100vh;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Subcontainer = styled.div`
  width: 638px;
  color: ${colors.black};
`;

export const Subcontainer1 = styled.div`
  margin-top: 40px;
  width: 638px;
  display: flex;
  justify-content: space-between;
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
export const Subtitle = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  color: ${colors.white};
  margin-bottom: 20px;
`;

export const Body = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 24px;
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 187px;
  height: 51px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: ${colors.yellow};
  background-color: #231f20;
  text-transform: uppercase;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.03em;
  border: 1px solid ${colors.yellow};
  border-radius: 9px;
`;

const Empty = () => {};
export default Empty;
