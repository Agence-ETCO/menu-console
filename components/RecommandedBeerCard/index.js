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
  ImageContainer,
} from "./styled.js";

const BeerCard = (props) => {
  const {
    state,
    actions: { addSelection, removeSelection },
  } = useContext(AppContext);

  const region = useUserRegion();

  const isChecked = (option) => {
    if (props.step === 7) {
      return true;
    }
    if (
      option &&
      state.selections.find((selection) => selection.id === option.id)
    ) {
      return true;
    }
    return false;
  };

  const handleCheckboxChange = (option) => {
    if (props.step === 7) {
      return null;
    }

    let checked = state.selections.find(
      (selection) => selection.id === option.id
    );

    if (checked) {
      removeSelection(option.id);
    } else if (!checked && props.limit) {
      addSelection(option);
    } else if (!checked && !props.limit) {
      return;
    }
  };

  const pricesForRegion = region
    ? props.prices.filter((option) => option.region === region)
    : props.prices;

  return (
    <>
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
          <ImageContainer>
            {props.imageUrl ? (
              <Image
                src={props.imageUrl}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            ) : (
              <Image src={image} width={104} height={210} alt="" />
            )}
          </ImageContainer>
          <TextContainer checked={isChecked(props.option)}>
            <div>
              {props.title} ({props.alcohol})
            </div>
            <div> {props.description} </div>

            <table>
              <tbody>
                <tr>
                  <th scope="col">Bouteille</th>
                  <th scope="col">Pression 20 oz</th>
                  <th scope="col">Pichet 60 oz</th>
                </tr>
                {pricesForRegion.length > 0 && (
                  <tr>
                    <td>
                      {/* {pricesForRegion[0] && pricesForRegion[0].Price}{" "}
                      {pricesForRegion[0] && "$"} */}
                    </td>
                    <td>
                      {pricesForRegion[0] && parseFloat(pricesForRegion[0].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}{" "}
                      {pricesForRegion[0] && "$"}
                    </td>
                    <td>
                      {pricesForRegion[1] && parseFloat(pricesForRegion[1].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}{" "}
                      {pricesForRegion[1] && "$"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/*  <div>Saq code {props.saqCode || ""}</div> */}
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default BeerCard;
