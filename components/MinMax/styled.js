import styled from "styled-components";

export const Select = styled.div`
  font-family: "GTWalsheimMedium";
  font-weight: 600px;
  font-size: 19px;
  line-height: 21px;
  margin-left: auto;
  background-color: rgba(147, 149, 152, 0.15);
  border-radius: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.beer ? "412px" : "325px")};
  height: 67px;
  svg {
    margin-right: 18px;
  }
`;
