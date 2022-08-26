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

  const [priceOptions, setPriceOptions] = useState([]);
  const isChecked = (option) => {
    if (
      (props.order === "01" && state.micro1 && state.micro1.id === option.id) ||
      (props.order === "02" && state.micro2 && state.micro2.id === option.id)
    ) {
      return true;
    }
    return false;
  };

  const isSelected = (value) => {
    if (priceOptions.includes(value)) {
      return true;
    }
    return false;
  };

  const handlePriceChange = (value) => {
    props.onChange(true);
    if (isSelected(value)) {
      const updatedOptions = priceOptions.filter((option) => option !== value);
      setPriceOptions(updatedOptions);
      if (props.order === "01") {
        addMicro01({
          ...props.option,
          craftOptions: { id: props.option.id, price: updatedOptions },
        });
      } else {
        addMicro02({
          ...props.option,
          craftOptions: { id: props.option.id, price: updatedOptions },
        });
      }
    } else {
      setPriceOptions([...priceOptions, value]);
      if (props.order === "01") {
        addMicro01({
          ...props.option,
          craftOptions: {
            id: props.option.id,
            price: [...priceOptions, value],
          },
        });
      } else {
        addMicro02({
          ...props.option,
          craftOptions: {
            id: props.option.id,
            price: [...priceOptions, value],
          },
        });
      }
    }
  };

  const handleCheckboxChange = (option) => {
    let checked =
      (props.order === "01" && state.micro1 && state.micro1.id === option.id) ||
      (props.order === "02" && state.micro2 && state.micro2.id === option.id);

    if (checked) {
      if (props.order === "01") {
        removeMicro01(option);
      } else {
        removeMicro02(option);
      }
      props.onChange(false);
      setPriceOptions([]);
    } else {
      props.onChange(false);
      if (props.order === "01") {
        addMicro01(option);
        setPriceOptions([]);
      } else {
        addMicro02(option);
        setPriceOptions([]);
      }
    }
  };

  useEffect(() => {
    if (
      props.order === "02" &&
      state.micro1 &&
      props.option.id === state.micro1.id
    ) {
      setPriceOptions(state.micro1.craftOptions.price);
    }
    if (
      props.order === "02" &&
      state.micro2 &&
      props.option.id === state.micro2.id
    ) {
      setPriceOptions(state.micro2.craftOptions.price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      props.order === "01" &&
      state.micro1 &&
      props.option.id === state.micro1.id
    ) {
      setPriceOptions(state.micro1.craftOptions.price);
    }
    if (
      props.order === "02" &&
      state.micro2 &&
      props.option.id === state.micro2.id
    ) {
      setPriceOptions(state.micro2.craftOptions.price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      props.order === "01" &&
      state.micro1 &&
      state.micro1.craftOptions &&
      state.micro1.craftOptions.length > 0
    ) {
      props.onChange(true);
    }
    if (
      props.order === "02" &&
      state.micro2 &&
      state.micro2.craftOptions &&
      state.micro2.craftOptions.length > 0
    ) {
      props.onChange(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {props.option.attributes.descriptionFr}{" "}
            </Type>
            {isChecked(props.option) && !(isSelected(1) || isSelected(2)) && (
              <>
                <Container2>
                  <span style={{ color: "#F5BA18" }}>CHOISIR VOTRE FORMAT</span>
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
                  checked={isSelected(1) && isChecked(props.option)}
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
                    {props.option.attributes.cost[1].Price} $
                  </Price>
                </Cell>
              </SubContainer1>
              <SubContainer1>
                <CheckboxContainer1
                  checked={isSelected(2) && isChecked(props.option)}
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
                    {props.option.attributes.cost[2].Price} $
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
