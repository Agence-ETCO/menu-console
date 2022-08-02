import CheckMark from "../CheckMark.js";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer1,
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
        <TextContainer1>
          <span>{"option1"}</span>
          <span> {"1 Labatt + 1 de microbrasserie"} </span>
        </TextContainer1>
      </Label>
    </>
  );
};

export default OptionButton;
