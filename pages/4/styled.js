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
`;

export const Title1 = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 23px;
  margin-left: 30px;
`;

export const SubTitle = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  margin-left: 30px;
  max-width: 622px;
  margin-top: 40px;

  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
    color: ${colors.black};
    margin-left: 5px;
    margin-right: 5px;
  }
`;
export const SubTitle1 = styled.div`
  color: ${colors.black};
  font-family: "GTWalsheimBold";
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
  min-height: 200vh;
  padding-bottom: 600px;
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
  width: 274px;
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
  margin-left: 50px;
`;

export const StyledButton = styled.button`
  width: 78px;
  height: 78px;
  border: 1.2381px solid #3c3c3c;
  font-family: "GTWalsheimBold";
  font-style: normal;
  font-weight: 700;
  font-size: 32.1905px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  color: #231f20;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#ffe110" : "white")}; 
  margin-right: 15px;
  border:${(props) => (props.active ? "none" : "1.2381px solid #3c3c3c")};  
  }
`;

export const Square = styled.div`
padding:45px;
width:420px;
height:84px
font-family: "GTWalsheimBold";
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 23px;
color: #231F20;
background-color:#F5BA18;
border: 9px solid #F5BA18;
border-radius: 9px;
margin-left: auto;
margin-right:30px;
 `;

const Empty = () => {};
export default Empty;
