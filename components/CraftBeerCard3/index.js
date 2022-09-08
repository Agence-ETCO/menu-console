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

const CraftBeerCard3 = (props) => {
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
    if (isSelected(value)) {
      const updatedOptions = priceOptions.filter((option) => option !== value);
      setPriceOptions(updatedOptions);
      if (updatedOptions.length === 0) {
        props.handleClick();
        removeMicro01();
      } else {
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

  const handleCheckboxChange = () => {
    if (props.order === "01") {
      removeMicro01();
    }
    if (props.order === "02") {
      removeMicro02();
    }

    props.handleClick();
  };

  const isPrice1 =
    state.micro1 &&
    state.micro1.craftOptions &&
    state.micro1.craftOptions.price;
  const isPrice2 =
    state.micro2 &&
    state.micro2.craftOptions &&
    state.micro2.craftOptions.price;

  useEffect(() => {
    if (
      props.order === "01" &&
      state.micro1 &&
      state.micro1.craftOptions &&
      state.micro1.craftOptions.price.length > 0 &&
      props.option.id === state.micro1.id
    ) {
      setPriceOptions(state.micro1.craftOptions.price);
    }
    if (
      props.order === "02" &&
      state.micro2 &&
      state.micro2.craftOptions &&
      state.micro2.craftOptions.price &&
      props.option.id === state.micro2.id
    ) {
      setPriceOptions(state.micro2.craftOptions.price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPrice1, isPrice2]);

  useEffect(() => {
    if (
      props.order === "01" &&
      state.micro1 &&
      state.micro1.craftOptions &&
      props.option.id === state.micro1.id
    ) {
      setPriceOptions(state.micro1.craftOptions.price);
    }
    if (
      props.order === "02" &&
      state.micro2 &&
      state.micro2.craftOptions &&
      props.option.id === state.micro2.id
    ) {
      setPriceOptions(state.micro2.craftOptions.price);
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
            <Title>
              {(props.option.attributes && props.option.attributes.title) ||
                props.option.description}{" "}
              (
              {(props.option.attributes && props.option.attributes.alcohol) ||
                props.option.alcohol}
              )
            </Title>
            <div>
              {" "}
              {(props.option.attributes && props.option.attributes.title) ||
                props.option.title}{" "}
            </div>
            <Type checked={isChecked(props.option)}>
              {" "}
              {(props.option.attributes &&
                props.option.attributes.descriptionFr) ||
                props.option.type}{" "}
            </Type>
            {isChecked(props.option) &&
              !(isSelected(1) || isSelected(0) || props.option.size) && (
                <>
                  <Container2>
                    <span style={{ color: "#F5BA18" }}>
                      CHOISIR VOTRE FORMAT
                    </span>
                  </Container2>
                </>
              )}
            <Format
              checked={isSelected(1) || isSelected(0) || props.option.size}
            >
              {isChecked(props.option) &&
              !(isSelected(1) || isSelected(0) || props.option.size) ? (
                <span>CHOISIR VOTRE FORMAT</span>
              ) : (
                "FORMATS DISPONIBLES"
              )}
            </Format>
            <Container1>
              {}
              <SubContainer1>
                {!props.option.size && (
                  <CheckboxContainer1
                    checked={
                      (isSelected(0) && isChecked(props.option)) ||
                      props.option.size
                    }
                    onClick={() => handlePriceChange(0)}
                  >
                    <Circle /> <StyledCheckbox></StyledCheckbox>
                  </CheckboxContainer1>
                )}
                <Cell>
                  <Size
                    checked={
                      isChecked(props.option) &&
                      (isSelected(1) || isSelected(0) || props.option.size)
                    }
                  >
                    {props.option.size || "Presion 20oz"}{" "}
                    {props.option.size && "ml"}
                  </Size>
                  {!props.option.size && (
                    <Price
                      checked={
                        isChecked(props.option) &&
                        (isSelected(1) || isSelected(0))
                      }
                    >
                      {props.option.attributes &&
                        props.option.attributes.cost[0].Price}{" "}
                      $
                    </Price>
                  )}
                </Cell>
              </SubContainer1>
              <SubContainer1>
                {!props.option.size && (
                  <CheckboxContainer1
                    checked={isSelected(1) && isChecked(props.option)}
                    onClick={() => handlePriceChange(1)}
                  >
                    <Circle />
                    <StyledCheckbox></StyledCheckbox>
                  </CheckboxContainer1>
                )}
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
                    {props.option.attributes &&
                      props.option.attributes.cost[1].Price}{" "}
                    $
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

export default CraftBeerCard3;
