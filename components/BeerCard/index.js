import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
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
    } else if (!checked && props.limit) {
      addSelection(option);
    } else if (!checked && !props.limit) {
      return;
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
          <StyledCheckbox checked={isChecked(props.option)}></StyledCheckbox>
        </CheckboxContainer>
        <SubContainer>
          <ImageContainer>
            {props.imageUrl ? (
              <Image
                src={props.imageUrl}
                width={185}
                height={235}
                alt=""
                layout="intrinsic"
              />
            ) : (
              <Image src={image} width={104} height={210} alt="" />
            )}
          </ImageContainer>
          <TextContainer checked={isChecked(props.option)}>
            <div>{props.title || "Budweiser (5%)"}</div>
            <div> {props.description || "Lager américaine"} </div>
            {props.prices ? (
              <table>
                <tbody>
                  <tr>
                    <th scope="col">Bouteille / Cannette</th>
                    <th scope="col">{props.prices[1] && "Presion 20oz"}</th>
                    <th scope="col">{props.prices[2] && "Pichet 60oz"}</th>
                  </tr>
                  <tr>
                    <td>{props.prices[0].Price}</td>
                    <td>{props.prices[1] && props.prices[1].Price}</td>
                    <td>{props.prices[2] && props.prices[2].Price}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table>
                <tbody>
                  <tr>
                    <th scope="col">Bouteille / Cannette</th>
                    <th scope="col">Presion 20oz</th>
                    <th scope="col">Pichet 60oz</th>
                  </tr>
                  <tr>
                    <td>9,99 $</td>
                    <td>19,99 $</td>
                    <td>29,99 $</td>
                  </tr>
                </tbody>
              </table>
            )}
            <div>Saq code {props.saqCode || 12824197}</div>
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default BeerCard;
