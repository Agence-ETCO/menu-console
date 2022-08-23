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
  const [priceOption, setPriceOption] = useState(null);
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
    if (!isChecked(props.option)) {
      return;
    }
    setPriceOption(value);
    if (props.order === "01") {
      addMicro01({ ...props.option, craftOptions: priceOption });
    } else {
      addMicro01({ ...props.option, craftOptions: priceOption });
    }
  };

  const handleCheckboxChange = (option) => {
    let checked =
      (state.micro1 && state.micro1.id === option.id) ||
      (state.micro2 && state.micro2.id === option.id);

    if (checked) {
      if (props.order === "01") {
        removeMicro01(option);
      } else {
        removeMicro02(option);
      }
      setPriceOption(null);
    } else {
      if (props.order === "01") {
        addMicro01(option);
      } else {
        addMicro02(option);
      }
    }
  };
  console.log(state.micro1);
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
            <Title>{"Nom de la bière (5%)"}</Title>
            <div>
              {" "}
              {props.option.attributes.title ||
                "La Microbrasserie, Montréal, QC"}{" "}
            </div>
            <Type checked={isChecked(props.option)}>
              {" "}
              {"Lager américaine"}{" "}
            </Type>
            {isChecked(props.option) && !(isSelected(1) || isSelected(0)) && (
              <>
                <Container2>
                  <span style={{ color: "#F5BA18" }}>CHOISIR VOTRE FORMAT</span>
                </Container2>
              </>
            )}
            <Format checked={isSelected(1) || isSelected(0)}>
              {isChecked(props.option) && !(isSelected(1) || isSelected(0)) ? (
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
                      (isSelected(1) || isSelected(0))
                    }
                  >
                    {"Presion 20oz"}
                  </Size>
                  <Price
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(0))
                    }
                  >
                    {props.option.attributes.cost[1].Price} $
                  </Price>
                </Cell>
              </SubContainer1>
              <SubContainer1>
                <CheckboxContainer1
                  checked={isSelected(0)}
                  onClick={() => handlePriceChange(0)}
                >
                  <Circle />
                  <StyledCheckbox></StyledCheckbox>
                </CheckboxContainer1>
                <Cell>
                  <Size
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(0))
                    }
                  >
                    {"Pichet 60oz"}
                  </Size>
                  <Price
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(0))
                    }
                  >
                    {props.option.attributes.cost[0].Price} $
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
