import styled from "styled-components";
import { colors } from "../../constants";
import { Select } from "../../components/Bubble/styled";

export const Subcontainer = styled.div`
  display: flex;
  flex-directon: row;
  margin-top: 60px;
  padding-left: 60px;
  padding-right: 80px;
  margin-right: 10px;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title1 = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
  margin-left: 30px;
`;

export const SubTitle = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  max-width: 622px;
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
    color: ${colors.black};
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  min-height: 200vh;
  padding-bottom: 600px;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container1 = styled.div`
  width: 700px;
  padding-bottom: 35px;
  border-bottom: 1px solid #939598;
`;

export const Subcontainer1 = styled.div`
  display: flex;
  flex-directon: row;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-right: 40px;
  padding-right: 10px;
`;

export const Subcontainer2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 30px;
  label {
    margin-left: 30px;
  }
`;

export const Subcontainer3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: -30px;
  position: relative;
  ${Select} {
    position: fixed;
    bottom: 140px;
    right: 100px;
  }
`;

export const Title = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  margin-bottom: 40px;
`;

const Empty = () => {};
export default Empty;
