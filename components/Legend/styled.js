import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div`
  background-color: rgba(147, 149, 152,0.12);
  width: 100%;
  padding: 65px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubContainer = styled.div`
  margin: auto;
  margin-bottom: 129px;
  //width: auto;
  min-width: 650px;
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  text-transform: uppercase;
  padding-bottom: 22px;
  border-bottom: 1px solid #000000;
  margin-bottom: 25px;
`;

export const TwoColumns = styled.div`
  font-family: "GTWalsheimRegular";
  font-size: 19px;
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 50%;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  span {
    white-space: nowrap;
  }
`;
export const Icon = styled.div`
  margin-right: 15px;
`;

export const Img = styled.img`
  width: 30px
`;
