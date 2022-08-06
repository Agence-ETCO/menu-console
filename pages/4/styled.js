import styled from "styled-components";
import { colors } from "../../constants";

export const Container1 = styled.div`
  background-color: ${colors.black};
`;

export const Container2 = styled.div`
  text-align: center;
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 31px;
  line-height: 37px;
  text-align: center;
  color: #e30826;
  padding-top: 160px;
  padding-bottom: 80px;
  min-height: 500px;
`;

export const Subcontainer = styled.div`
  background-color: ${colors.black};
  height: 200px;
  width: 562px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.div`
  color: ${colors.white};
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
`;

export const SubTitle = styled.div`
  color: ${colors.white};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
`;

export const OptionsContainer = styled.div`
  width: 562px;
  height: 83px;
  background-color: rgba(60, 60, 60, 0.75);
  border-radius: 9px;
  margin-top: 30px;
  display: flex;
  flex-directon: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Empty = () => {};
export default Empty;
