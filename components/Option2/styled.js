import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  padding-bottom: 900px;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;
export const Subcontainer1 = styled.div`
  display: flex;
  flex-directon: row;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Subcontainer2 = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  margin-bottom: 10px;
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
