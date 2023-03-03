import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import useUserRegion from "../../lib/useUserRegion";
import CheckMark from "../CheckMark.js";
import image from "../../public/Rectangle.png";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer,
  SubContainer,
  Tag
} from "./styled.js";

const MiniBeerMomentCard = (props) => {
  const {
    state,
    actions: { addSelection, removeSelection, addMicro01, addMicro02, removeMicro01, removeMicro02, addBeerSelection, removeBeerSelection, },
  } = useContext(AppContext);

  const region = useUserRegion();

  const isChecked = (option) => {
    if (
      option &&
      state.selections.find((selection) => selection.id === option.id)
    ) {
      return true;
    }

    if (
      ( state.micro1 && state.micro1.id === option.id)
    ) {
      return true;
    }

    if (
      ( state.micro2 && state.micro2.id === option.id)
    ) {
      return true;
    }

    return false;
  };

  const handleCheckboxChange = (option) => {
    if (props.step === 6) {
      return null;
    }
    let checked = state.selections.find(
      (selection) => selection.id === option.id
    );


    if (checked) {
      removeSelection(option.id);
      removeBeerSelection(props.beerStep-6)
    } else if (!checked && props.limit) {
      addBeerSelection(props.beerStep-6, option.id);
      addSelection(option);
    } else if (!checked && !props.limit) {
      return;
    }


  };

  return (
    <>
    <div>
      <Tag><p>Bière du moment</p></Tag>
      <Label checked={isChecked(props.option)}>
        <CheckboxContainer checked={isChecked(props.option)}>
          <HiddenCheckbox
            checked={isChecked(props.option)}
            onChange={() => handleCheckboxChange(props.option)}
          />
          <CheckMark />
          <StyledCheckbox checked={isChecked(props.option)}></StyledCheckbox>
        </CheckboxContainer>
        <SubContainer>
          <TextContainer checked={isChecked(props.option)}>
            <div>{props.beerMaker}</div>
          </TextContainer>
        </SubContainer>
      </Label>
      </div>
    </>
  );
};

export default MiniBeerMomentCard;
