import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.div``;
export const DropDownContainer = styled.div`
  margin-top: 24px;
  margin-left: 25px;
`;
export const DropDownHeader = styled.div`
  width: 413px;
  height: 142px;
  border: 1px solid #939598;
  border-radius: 9px;
  display: flex;
  padding-left: 25px;
`;

export const DropDownListContainer = styled.div`
  width: 413px; ;
`;

export const DropDownList = styled.ul`
  border: 1px solid #939598;
  border-radius: 9px;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  border-bottom: 1px solid #939598;
  :last-child {
    border-bottom: none;
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
  color: #231f20;
  margin-top: 24px;
`;

export const Input = styled.input`
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
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  ::placeholder {
    color: #231f20;
  }
`;
