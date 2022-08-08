import styled from "styled-components";

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  padding-bottom: 100px;
  margin-top: 60px;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 50px;
  margin-bottom: 100px;
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
