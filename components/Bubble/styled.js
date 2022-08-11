import styled, { keyframes } from "styled-components";

const outEffect = keyframes`

  0%   { opacity: 1; }
 100% { opacity: 0; }

`;
export const Select = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  margin-left: auto;
  background: #231f20;
  border-radius: 55px;
  padding-top: 30px;
  padding-left: 60px;
  min-width: 413px;
  height: 110px;
  color: white;
  text-transform: uppercase;
  svg {
    margin-right: 18px;
    width: 32px;
    height: 40px;
  }
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
  }
  opacity: 0;
  animation: ${(props) => props.show && outEffect};
  animation-duration: 2.5s;
`;
