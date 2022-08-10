import styled from "styled-components";

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  padding-bottom: 200px;
  margin-top: 60px;
  min-height: 200vh;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const Subcontainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title1 = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #f5ba18;
  text-align: center;
  margin-bottom: 30px;
`;
export const Subtitle1 = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #231f20;
  margin-bottom: 30px;
`;
export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  margin-bottom: 10px;
`;

const Empty = () => {};
export default Empty;
