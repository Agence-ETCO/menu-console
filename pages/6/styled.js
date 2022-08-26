import styled from "styled-components";

export const Container = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 200px;
  margin-top: 60px;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 50px;
  margin-bottom: 100px;
  justify-content: left;

  label {
    margin-left: 30px;
  }
`;

export const Subcontainer1 = styled.div`
  display: flex;
  flex-direction: column;
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
  text-align: left;
  margin-left: 30px;
  margin-bottom: 30px;
`;
export const Subtitle1 = styled.div`
  font-family: "GTWalsheimRegular";
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #231f20;
  margin-bottom: 30px;
  margin-left: 30px;
`;
export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 25px;
  margin-bottom: 10px;
  margin-left: 30px;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
`;

const Empty = () => {};
export default Empty;
