import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(147, 149, 152, 0.08);
  border-radius: 9px;
  margin-left: 50px;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container3 = styled.div`
  position: absolute;
`;
export const DropDownContainer = styled.div`
  width: 528px;
  height: 286px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const DropDownHeader = styled.div`
  width: 413px;
  height: 142px;
  border: 1px solid #939598;
  border-radius: 9px;
  display: flex;
  padding-left: 25px;
  order: 2;
  background-color: ${(props) =>
    props.disabled ? "rgba(147, 149, 152, 0.08)" : "white"};
`;

export const DropDownListContainer = styled.div`
  width: 413px;
  z-index: 40;
  background-color: white;
  border: none;
`;

export const DropDownList = styled.ul`
  border: 1px solid #939598;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow-y: scroll;
  padding-bottom: 0;
  padding-left: 0;
  list-style: none;
  height: 413px;

  :first-child {
    margin-top: 0;
  }
`;

export const ListItem = styled.li`
  border-bottom: 1px solid #939598;
  padding-left: 40px;
  margin-right: 30px;
  background-color: ${(props) => props.checked && "black"};
  padding-top: 5px;
  padding-bottom: 5px;
  span {
    color: ${(props) => props.checked && "rgba(255, 255, 255, 0.5)"};
  }
  div:first-child {
    color: ${(props) => props.checked && "rgba(255, 255, 255, 0.5)"};

    span {
      color: ${(props) => props.checked && "white !important"};
    }
  }
  :last-child {
    border-bottom: none !important;
    padding-bottom: 10px;
  }
`;

export const SubContainer = styled.div`
  width: 72px;
  background-color: rgba(217, 217, 217, 0.5);
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContainer1 = styled.div`
  border-bottom: 1px solid rgba(147, 149, 152, 0.5);
  padding-bottom: 11px;
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: rgba(35, 31, 32, 0.75);
  position: relative;
  span {
    display: block;
    font-family: "GTWalsheimBold";
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    color: #231f20;
    margin-top: 24px;
  }
`;
export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: rgba(35, 31, 32, 0.5);
  text-transform: uppercase;
  padding-top: 18px;
  width: 272px;
`;

export const Header = styled.span`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: ${(props) => (props.disabled ? "rgba(60, 60, 60, 0.5)" : "#231f20")};
  margin-top: 24px;
  padding-left: 60px;
  padding-top: 40px;
`;

export const Button = styled.button`
  width: 100%;
  height: 68px;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: #231f20;
  margin-top: -20px;
  padding-left: 24px;
  border: 1px solid #939598;
  border-top: none;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  background-color: rgba(60, 60, 60, 0.25);
  text-align: left;
  z-index: 50;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  color: ${(props) => (props.disabled ? "#E30826" : "#3c3c3c")};
  width: 420px;
  text-align: center;
  margin-bottom: 25px;
  svg {
    width: 50px;
  }
`;

export const Text1 = styled.span`
  order: 1;
  font-family: "GTWalsheimMedium";
  font-weight: 600;
  font-size: 21px;
  line-height: 23px;
  color: ${(props) => (props.disabled ? "rgba(60, 60, 60, 0.5)" : "#3c3c3c")};
  margin-right: 20px;
`;

export const SubContainer3 = styled.div`
  position: absolute;
  right: 0;
`;
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  right: 10px;
  svg {
    position: absolute;
    left: 0;
  }
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: #d9d9d9;
  opacity: 0.4;
  border-radius: 50%;
  transition: all 150ms;
  position: relative;
`;
