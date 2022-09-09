import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import Lock3 from "../Lock3";
import useUserRegion from "../../lib/useUserRegion";
import image from "../../public/Rectangle.png";
import {
  Label,
  TextContainer,
  SubContainer,
  ImageContainer,
} from "./styled.js";

const BeerCard4 = (props) => {
  const {
    state,
    actions: {},
  } = useContext(AppContext);

  const region = useUserRegion();

  const pricesForRegion = region
    ? props.prices.filter((option) => option.region === region)
    : props.prices;

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

            <table>
              <tbody>
                <tr>
                  <th scope="col">Bouteille / Cannette</th>
                  <th scope="col">Presion 20 oz</th>
                  <th scope="col">Pichet 60 oz</th>
                </tr>
                {pricesForRegion.length > 0 && (
                  <tr>
                    <td>
                      {pricesForRegion[0].Price}{" "}
                      {pricesForRegion[0] && pricesForRegion[0].Price && " $"}
                    </td>
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

export default BeerCard4;
