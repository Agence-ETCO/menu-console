import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import CheckMark from "../CheckMark.js";
import Circle from "../Circle.js";
import image from "../../public/Rectangle.png";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer,
  SubContainer,
  Type,
  Format,
  Size,
  Price,
  Container1,
  SubContainer1,
  Title,
  Cell,
  CheckboxContainer1,
  Container2,
} from "./styled.js";

const CraftBeerCard = (props) => {
  const {
    state,
    actions: { addMicro01, addMicro02, removeMicro01, removeMicro02 },
  } = useContext(AppContext);

  /* const max = 1;
  const limit =
    (props.order === "01" && state.micro1) ||
    (props.order === "02" && state.micro2); */
  const [priceOption, setPriceOption] = useState(0);
  const isChecked = (option) => {
    if (
      (state.micro1 && state.micro1.id === option.id) ||
      (state.micro2 && state.micro2.id === option.id)
    ) {
      return true;
    }
    return false;
  };

  const isSelected = (value) => {
    if (priceOption === value) {
      return true;
    }
    return false;
  };

  const handlePriceChange = (value) => {
    setPriceOption(value);
  };

  const handleCheckboxChange = (option) => {
    /*   if (props.step === 5) {
      return null;
    }*/

    let checked =
      (state.micro1 && state.micro1.id === option.id) ||
      (state.micro2 && state.micro2.id === option.id);

    if (checked) {
      if (props.order === "01") {
        removeMicro01(option);
      } else {
        removeMicro02(option);
      }
    } else {
      if (props.order === "01") {
        addMicro01(option);
      } else {
        addMicro02(option);
      }
    }
  };

  return (
    <>
      <Label checked={isChecked(props.option)}>
        <CheckboxContainer checked={isChecked(props.option)}>
          <HiddenCheckbox
            checked={isChecked(props.option)}
            onChange={() => handleCheckboxChange(props.option)}
          />
          <CheckMark />
          <StyledCheckbox></StyledCheckbox>
        </CheckboxContainer>
        <SubContainer>
          <TextContainer checked={isChecked(props.option)}>
            <Title>{props.title || "Nom de la bière (5%)"}</Title>
            <div>
              {" "}
              {props.description || "La Microbrasserie, Montréal, QC"}{" "}
            </div>
            <Type checked={isChecked(props.option)}>
              {" "}
              {"Lager américaine"}{" "}
            </Type>
            {isChecked(props.option) && !(isSelected(1) || isSelected(2)) && (
              <>
                <Container2>
                  <span style={{ color: "#F5BA18 " }}>
                    CHOISIR VOTRE FORMAT
                  </span>
                </Container2>
              </>
            )}
            <Format checked={isSelected(1) || isSelected(2)}>
              {isChecked(props.option) && !(isSelected(1) || isSelected(2)) ? (
                <span>CHOISIR VOTRE FORMAT</span>
              ) : (
                "FORMATS DISPONIBLE"
              )}
            </Format>
            <Container1>
              {}
              <SubContainer1>
                <CheckboxContainer1
                  checked={isSelected(1)}
                  onClick={() => handlePriceChange(1)}
                >
                  <Circle /> <StyledCheckbox></StyledCheckbox>
                </CheckboxContainer1>
                <Cell>
                  <Size
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(2))
                    }
                  >
                    {"Presion 20oz"}
                  </Size>
                  <Price
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(2))
                    }
                  >
                    {"19,99 $"}
                  </Price>
                </Cell>
              </SubContainer1>
              <SubContainer1>
                <CheckboxContainer1
                  checked={isSelected(2)}
                  onClick={() => handlePriceChange(2)}
                >
                  <Circle />
                  <StyledCheckbox></StyledCheckbox>
                </CheckboxContainer1>
                <Cell>
                  <Size
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(2))
                    }
                  >
                    {"Pichet 60oz"}
                  </Size>
                  <Price
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(2))
                    }
                  >
                    {"19,99 $"}
                  </Price>
                </Cell>
              </SubContainer1>
            </Container1>
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default CraftBeerCard;
