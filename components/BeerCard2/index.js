import React, { useEffect, useContext } from "react";
import Image from "next/image";
import CheckMark from "../CheckMark.js";
import { AppContext } from "../../context/AppContext";
import useUserRegion from "../../lib/useUserRegion";
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

const BeerCard2 = (props) => {
  const {
    state,
    actions: { addSelection, removeSelection },
  } = useContext(AppContext);

  const region = useUserRegion();

  const isChecked = (option) => {
    if (props.step === 6) {
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
    if (props.step === 6) {
      return null;
    }

    let checked = state.selections.find(
      (selection) => selection.id === option.id
    );

    if (checked) {
      removeSelection(option.id);
    } else {
      addSelection(option);
    }
  };

  const pricesForRegion = region
    ? props.prices.filter((option) => option.region === region)
    : props.prices.filter((option) => option.region === "QC");

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
            <div> {props.description || ""} </div>
            <table>
              <tbody>
                <tr>
                  <th scope="col">Bouteille / Cannette</th>
                  {pricesForRegion[1] && (
                    <th scope="col">
                      Pression <br></br> 20 oz
                    </th>
                  )}
                  {pricesForRegion[2] && (
                    <th scope="col">
                      Pichet <br></br>60 oz
                    </th>
                  )}
                </tr>
                {pricesForRegion && (
                  <tr>
                    <td>{pricesForRegion[0] && pricesForRegion[0].Price} $</td>
                    <td>
                      {pricesForRegion[1] && pricesForRegion[1].Price}
                      {pricesForRegion[1] && " $"}
                    </td>
                    <td>
                      {pricesForRegion[2] && pricesForRegion[2].Price}
                      {pricesForRegion[2] && " $"}
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

export default BeerCard2;
