import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 60px;
  padding-bottom: 274px;
  max-width: 1450px;
  margin-left: auto;
  margin-right: auto;
`;

export const Subcontainer1 = styled.div`
  display: flex;
  flex-directon: row;
  margin-top: 60px;
`;

export const Subcontainer2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: left;

  label {
    margin-left: 30px;
  }
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 25px;
  margin-bottom: 10px;
  margin-left: 30px;
`;
export const SubTitle = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  margin-bottom: 45px;
  width: 620px;
  margin-left: 30px;

  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
    color: ${colors.orange};
    margin-right: 5px;
  }
`;

const Empty = () => {};
export default Empty;
