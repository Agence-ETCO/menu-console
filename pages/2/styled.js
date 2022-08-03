import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  padding-bottom: 100px;
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
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  margin-bottom: 10px;
`;
export const SubTitle = styled.div`
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 45px;

  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
    color: ${colors.orange};
  }
`;
export const Select = styled.div`
  font-family: "GTWalsheimMedium";
  font-size: 21px;
  line-height: 25px;
  letter-spacing: 0.03em;
  margin-left: auto;
  background: #ffe110;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 67px;
`;
