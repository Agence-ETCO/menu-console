import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import CheckMark from "../CheckMark.js";
import Circle from "../Circle.js";
import useUserRegion from "../../lib/useUserRegion";
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
    actions: { addMicro01, addMicro02, removeMicro01, removeMicro02,removeBeerSelection, addBeerSelection },
  } = useContext(AppContext);

  const region = useUserRegion();

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

  const checkDuplicate = (option) => {
    if (props.order === "01") {
      if (state.micro2 && state.micro2.id === option.id) {
        return true;
      }
    } else {
      if (state.micro1 && state.micro1.id === option.id) {
        return true;
      }
    }
    return false;
  };

  const handlePriceChange = (value) => {
    if (checkDuplicate(props.option)) {
      props.onChange(false);
      return;
    } else {
      props.onChange(true);
      if (isSelected(value)) {
        const updatedOptions = priceOptions.filter(
          (option) => option !== value
        );
        setPriceOptions(updatedOptions);

        if (updatedOptions.length === 0) {
          props.onChange(false);
        }
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
    }
  };

  const handleCheckboxChange = (option) => {
    let checked =
      (props.order === "01" && state.micro1 && state.micro1.id === option.id) ||
      (props.order === "02" && state.micro2 && state.micro2.id === option.id);
    if (checkDuplicate(props.option)) {
      props.onChange(false);
      return;
    } else {
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
        checkDuplicate(option);
        if (props.order === "01") {
          addMicro01(option);
          setPriceOptions([]);
        } else {
          addMicro02(option);
          setPriceOptions([]);
        }
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

  const prices = region
    ? props.option.attributes.cost.filter((option) => option.region === region)
    : props.option.attributes.cost;

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
              {props.option.attributes.title} ({props.option.attributes.alcohol}
              )
            </Title>
            <div>
              {" "}
              {props.option.attributes.beerMaker ||
                "La Microbrasserie, Montréal, QC"}{" "}
            </div>
            <Type checked={isChecked(props.option)}>
              {" "}
              {props.option.attributes.descriptionFr}{" "}
            </Type>
            {isChecked(props.option) && !(isSelected(0) || isSelected(1)) && (
              <>
                <Container2>
                  <span style={{ color: "#F5BA18" }}>CHOISIR VOTRE FORMAT</span>
                </Container2>
              </>
            )}
            <Format checked={isSelected(0) || isSelected(1)}>
              {isChecked(props.option) && !(isSelected(0) || isSelected(1)) ? (
                <span>CHOISIR VOTRE FORMAT</span>
              ) : (
                "FORMATS OFFERTS"
              )}
            </Format>
            <Container1>
              {}
              <SubContainer1>
                <CheckboxContainer1
                  checked={isSelected(0) && isChecked(props.option)}
                  onClick={() => handlePriceChange(0)}
                >
                  <Circle /> <StyledCheckbox></StyledCheckbox>
                </CheckboxContainer1>
                <Cell>
                  <Size
                    checked={
                      isChecked(props.option) &&
                      (isSelected(0) || isSelected(1))
                    }
                  >
                    {"Pression  20 oz"}
                  </Size>
                  <Price
                    checked={
                      isChecked(props.option) &&
                      (isSelected(0) || isSelected(1))
                    }
                  >
                    {prices[0].Price} $
                  </Price>
                </Cell>
              </SubContainer1>
              <SubContainer1>
                <CheckboxContainer1
                  checked={isSelected(1) && isChecked(props.option)}
                  onClick={() => handlePriceChange(1)}
                >
                  <Circle />
                  <StyledCheckbox></StyledCheckbox>
                </CheckboxContainer1>
                <Cell>
                  <Size
                    checked={
                      isChecked(props.option) &&
                      (isSelected(0) || isSelected(1))
                    }
                  >
                    {"Pichet 60 oz"}
                  </Size>
                  <Price
                    checked={
                      isChecked(props.option) &&
                      (isSelected(0) || isSelected(1))
                    }
                  >
                    {prices[1].Price} $
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
