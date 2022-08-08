import styled from "styled-components";

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  height: 200vh;
  padding-bottom: 600px;
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
  flex-wrap: wrap;
  justify-content: center;
`;

export const Subcontainer3 = styled.div`
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
