import styled from "styled-components";
import { colors } from "../../constants";
import { Select } from "../../components/Bubble/styled";

export const Main = styled.div`
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-directon: row;
  margin-top: 60px;
  padding-left: 60px;
  padding-right: 80px;
  margin-right: 10px;
  max-width: 1480px;
`;

export const Title1 = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 25px;
  margin-left: 30px;
`;

export const SubTitle = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-left: 30px;
  width: 630px;
  margin-top: 30px;
  padding-bottom: 35px;
  border-bottom: 1px solid #939598;
`;
export const SubTitle1 = styled.div`
  color: ${colors.black};
  font-family: "InterBold";
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  width: 500px;
  margin-top: 60px;
  margin-bottom: 40px;
  margin-left: 30px;
`;

export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  min-height: 100vh;
  padding-bottom: 200px;
`;

export const Subcontainer1 = styled.div`
  display: flex;
  flex-directon: row;
  align-items: center;
  margin-top: 100px;
  margin-right: 40px;
  padding-right: 10px;
`;

export const Subcontainer2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;

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
  line-height: 25px;
  margin-bottom: 50px;
  margin-left: 30px;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
`;
export const ButtonContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 78px;
  background: #939598;
  opacity: 0.3;
  border-radius: 143px;
  button {
    font-family: "GTWalsheimBold";
    font-style: normal;
    font-weight: 700;
    font-size: 32.1905px;
    line-height: 38px;
    color: #ffffff;
    background: none;
    border: none;
    width: 78px;
    height: 75px;
  }
`;
export const ButtonContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled.button`
  width: 78px;
  height: 78px;
  border: 1.2381px solid #3c3c3c;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 32.1905px;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  color: #231f20;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#ffe110" : "white")};
  margin-right: 15px;
  border: ${(props) => (props.active ? "none" : "1.2381px solid #3c3c3c")};
  box-shadow: ${(props) =>
    props.active ? "0 0 23px rgba(35, 31, 32, 0.2)" : ""};
`;

export const Square = styled.div`
  padding-top: 25px;
  padding-left: 40px;
  padding-right: 40px;
  min-width: 506px;
  height: 241px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: #231f20;
  background-color: #f5ba18;
  border: 9px solid #f5ba18;
  border-radius: 9px;
  margin-left: auto;
  margin-right: 30px;
  margin-top: -70px;
  text-align: center;
`;

export const Text1 = styled.div`
  margin-bottom: 5px;
`;

export const Title2 = styled.div`
  font-family: "InterBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #231f20;
  margin-bottom: 10px;
`;

export const Choice = styled.div`
  font-family: "InterBold";
  font-weight: 700;
  font-size: 17px;
  line-height: 27px;
  color: #231f20;
  margin-top: 10px;
`;

export const Separator = styled.div`
  color: rgba(35, 31, 32, 0.5);
  font-family: "InterLight";
  font-weight: 300;
  margin-top: -1px;
  margin-bottom: -1px;
  span {
    margin-left: 10px;
    margin-right: 10px;
    color: #231f20;
  }
`;

export const Container2 = styled.div`
  div:first-child {
    font-family: "GTWalsheimRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
    color: #939598;
    margin-bottom: 20px;
  }
`;
export const Container3 = styled.div`
  div:first-child {
    font-family: "GTWalsheimRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
    color: #939598;
    margin-bottom: 20px;
  }
`;
export const Container4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 630px;
  padding-bottom: 65px;
  border-bottom: 1px solid #939598;
`;

const Empty = () => {};
export default Empty;
