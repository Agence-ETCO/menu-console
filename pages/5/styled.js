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
  font-size: 27px;
  line-height: 23px;
  //width: 500px;
  margin-top: 60px;
  margin-bottom: 30px;
  margin-left: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid #939598;
`;
export const SubTitle1 = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 21px;
  line-height: 27px;
  //width: 500px;
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
  flex-wrap: wrap;
  min-width: 560px;
  padding-bottom: 70px;
  border-bottom: 1px solid #939598;
  align-items: flex-end;
`;

export const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  min-width: 60px;
  border: 1.2381px solid #3c3c3c;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 25.0631px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #231f20;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#ffe110" : "white")};
  margin-left: 15px;
  border: ${(props) => (props.active ? "none" : "1.2381px solid #3c3c3c")};
  box-shadow: ${(props) =>
    props.active ? "0 0 23px rgba(35, 31, 32, 0.2)" : ""};
`;

export const StyledButtonLong = styled.button`
  width: 100px;
  height: 60px;
  min-width: 100px;
  border: 1.2381px solid #3c3c3c;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 25.0631px;
  line-height: 30px;
  text-align: center;
  color: #231f20;
  border-radius: 30px;
  background-color: ${(props) => (props.active ? "#ffe110" : "white")};
  margin-left: 15px;
  border: ${(props) => (props.active ? "none" : "1.2381px solid #3c3c3c")};
  box-shadow: ${(props) =>
    props.active ? "0 0 23px rgba(35, 31, 32, 0.2)" : ""};
`;

export const Chip = styled.button`
  width: 32px;
  height: 32px;
  border: 1.2381px solid #BDBDBD;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 700;
  font-size: 13.2063px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #3C3C3C;
  border-radius: 50%;
  background-color: #BDBDBD ;
  margin-left: 15px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  `;

export const Square = styled.div`
  padding-top: 25px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 25px;
  max-width: 406px;
  height: fit-content;
  font-family: "Inter";
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: #231f20;
  background-color: #f5ba18;
  border: 9px solid #f5ba18;
  border-radius: 9px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: -70px;
  text-align: center;
`;

export const Text1 = styled.div`
  margin-bottom: 5px;
  max-width=300px
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
  /* width: 630px;
  padding-bottom: 45px;
  border-bottom: 1px solid #939598; */
`;

export const AddButton = styled.button`
  background: #FFE110;
  border-radius: 8px;
  width: 248px;
  height: 68px;
  font-family: 'GTWalsheimBold';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 32px;
  align-items: center;
  letter-spacing: 0.1em;
  color: #231F20;
  display: flex;
  justify-content: center;
  margin-left: 30px;
  text-transform: uppercase;
  border: none;
`;

const Empty = () => {};
export default Empty;

