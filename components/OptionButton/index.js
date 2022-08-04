import CheckMark from "../CheckMark.js";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer,
} from "./styled.js";

const OptionButton = (props) => {
  return (
    <>
      <Label>
        <CheckboxContainer checked={props.checked}>
          <HiddenCheckbox
            checked={props.checked}
            onChange={props.handleCheckboxChange}
          />
          <CheckMark />
          <StyledCheckbox></StyledCheckbox>
        </CheckboxContainer>
        <TextContainer>
          <span>{props.option}</span>
          <span> {props.description} </span>
        </TextContainer>
      </Label>
    </>
  );
};

export default OptionButton;
