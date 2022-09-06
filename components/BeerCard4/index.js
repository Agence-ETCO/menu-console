import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import Lock3 from "../Lock3";
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
    actions: {},
  } = useContext(AppContext);

  return (
    <>
      <Label checked>
        <Lock3 />
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
          <TextContainer checked>
            <div>
              {props.title} ({props.alcohol})
            </div>
            <div> {props.description || "Lager américaine"} </div>
            {props.prices ? (
              <table>
                <tbody>
                  <tr>
                    <th scope="col">Bouteille / Cannette</th>
                    <th scope="col">Presion 20oz</th>
                    <th scope="col">Pichet 60oz</th>
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
