import styled from "styled-components";
import { colors } from "../../constants";
import { Select } from "../../components/Bubble/styled";
import { Select as Min } from "../../components/MinMax/styled";

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
  ${Min} {
    min-width: 385px;
  }
`;

export const SubTitle = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
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
  padding-bottom: 274px;
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
  margin-bottom: 20px;
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
  display: flex;
  align-items: flex-end;
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
  line-height: 25px;
  margin-bottom: 40px;
`;

const Empty = () => {};
export default Empty;
