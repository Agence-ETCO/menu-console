import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import { getColor } from "../../lib/helpers";
import CheckMark from "../CheckMark.js";
import imageC from "../../public/C-icon.svg";
import imageO from "../../public/O-icon.svg";
import imageN from "../../public/N-icon.svg";
import IconBio from "../IconBio";
import IconQ from "../IconQ";
import IconQDark from "../IconQDark";
import IconO from "../IconO";
import IconC from "../IconC";
import IconN from "../IconN";
import useUserRegion from "../../lib/useUserRegion";
import IconBioDark from "../IconBioDark";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer,
  SubContainer,
  Circle,
  CircleContainer,
  IconContainer,
  Icons,
  ImageContainer,
  Sugar,
  Desc,
  Title,
  Container2,
} from "./styled.js";

const WineCard = (props) => {
  const {
    state,
    actions: { addSelection, removeSelection },
  } = useContext(AppContext);

  const region = useUserRegion();

  const isChecked = (option) => {
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

  const color = props.taste && getColor(props.taste);
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
            value={props.value}
          />
          <CheckMark />
          <StyledCheckbox checked={isChecked(props.option)}></StyledCheckbox>
        </CheckboxContainer>
        <SubContainer>
          <ImageContainer>
            {
              /* props.red ? (
              <Image src={red} width={150} height={350} alt="" />
            ) : */ <Image
                src={props.imageUrl}
                width={150}
                height={255}
                alt=""
                layout="intrinsic"
              />
            }
          </ImageContainer>
          <TextContainer checked={isChecked(props.option)}>
            <Title>{props.title || "Robert Mondavi Private Selection"}</Title>
            <Desc checked={isChecked(props.option)}>
              {" "}
              {props.description || "Cuvée Centenaire,Languedoc-Rousillon"}{" "}
            </Desc>
            <div>
              {props.location}
              {props.location && ","} {props.country}{" "}
            </div>
            <CircleContainer checked={isChecked(props.option)}>
              {" "}
              {props.taste} {color && <Circle color={color} />}{" "}
              <Sugar checked={isChecked(props.option)}>
                {`Sucre :`}
                <span> {props.sugar}</span>
              </Sugar>
            </CircleContainer>

            <table>
              <tbody>
                <tr>
                  <th scope="col">6 oz</th>
                  <th scope="col">9 oz</th>
                  <th scope="col">Bouteille</th>
                </tr>
                {pricesForRegion.length > 0 && (
                  <tr>
                    <td> {pricesForRegion[0].Price} $</td>
                    <td>{pricesForRegion[1].Price} $</td>
                    <td>{pricesForRegion[2].Price} $</td>
                  </tr>
                )}
              </tbody>
            </table>

            <IconContainer>
              <span> Code saq {props.saqCode || ""}</span>
              <Icons>
                {props.isFromQuebec &&
                  (isChecked(props.option) ? <IconQDark /> : <IconQ />)}
                {props.isOrange &&
                  (isChecked(props.option) ? (
                    <Container2>
                      <Image src={imageO} width={20} height={23} alt="" />
                    </Container2>
                  ) : (
                    <IconO />
                  ))}
                {props.isOrganic &&
                  (isChecked(props.option) ? <IconBioDark /> : <IconBio />)}
                {props.isCellier &&
                  (isChecked(props.option) ? (
                    <Container2>
                      <Image src={imageC} width={20} height={23} alt="" />
                    </Container2>
                  ) : (
                    <IconC />
                  ))}
                {props.isNature &&
                  (isChecked(props.option) ? (
                    <Container2>
                      <Image src={imageN} width={20} height={23} alt="" />
                    </Container2>
                  ) : (
                    <IconN />
                  ))}
              </Icons>
            </IconContainer>
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default WineCard;
