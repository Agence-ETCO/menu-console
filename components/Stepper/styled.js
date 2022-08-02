import styled from "styled-components";
import { colors } from "../../constants";

export const TextButton = styled.button`
  background-color: ${(props) => props.color};
  width: 150px;
  height: 45px;
  size: 17px;
  line-height: 20px;
  color: ${(props) =>
    props.color === colors.orange ? colors.black : colors.grey};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  outline: none;
`;

export const NumberButton = styled.button`
  background-color: ${(props) => props.color};
  width: 72px;
  height: 45px;
  size: 17px;
  line-height: 20px;
  color: ${(props) =>
    props.color === colors.orange ? colors.black : colors.grey};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 75px;
  margin-bottom: 37px;
  padding-bottom: 36px;
  border-bottom: 1px solid #939598;
  width: 562px;
  margin-left: auto;
  margin-right: auto;
`;
