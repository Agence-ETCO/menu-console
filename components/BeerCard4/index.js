import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import Lock3 from "../Lock3";
import useUserRegion from "../../lib/useUserRegion";
import image from "../../public/Rectangle.png";
import { getFormat } from "../../lib/helpers";
import CheckMark from "../CheckMark.js";
import {
  Container,
  Label,
  GlassLabel,
  TextContainer,
  SubContainer,
  ImageContainer,
  Title,
  CheckboxContainer,
  StyledCheckbox,
  SaqCode,
} from "./styled.js";

const BeerCard4 = (props) => {
  const {
    state,
    actions: { },
  } = useContext(AppContext);

  const region = useUserRegion();

  const pricesForRegion = region
    ? props.prices.filter((option) => option.region === region)
    : props.prices.filter((option) => option.region === "QC");

  return (
    <>
      <Container>
        <Title>
          Ligne {props.index} : {props.type} {props.tag}
        </Title>
        <Label checked>
          {/* <Lock3 />  */}
          <CheckboxContainer checked={true}>
            <CheckMark />
            <StyledCheckbox checked={true}></StyledCheckbox>
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
            <TextContainer checked>
              <div>
                {props.title} <span>({props.alcohol} %)</span>
              </div>
              <div> {props.description} </div>

              <table>
                <tbody>
                  {pricesForRegion.length > 0 && (
                    <tr>
                      {/* <th scope="col">Bouteille</th> */}
                      <th scope="col">Pression 20 oz</th>
                      <th scope="col">Pichet 60 oz</th>
                    </tr>
                  )}
                  {pricesForRegion.length > 0 &&
                    (pricesForRegion.length === 3 ? (
                      <tr>
                        {/* <td>
                          {parseFloat(pricesForRegion[0].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}{" "}
                          {pricesForRegion[0] && parseFloat(pricesForRegion[0].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2}) && " $"}
                        </td> */}
                        <td>
                          {parseFloat(pricesForRegion[1].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}{" "}
                          {pricesForRegion[1] && parseFloat(pricesForRegion[1].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2}) && " $"}
                        </td>
                        <td>
                          {parseFloat(pricesForRegion[2].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}{" "}
                          {pricesForRegion[2] && parseFloat(pricesForRegion[2].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2}) && " $"}
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        {/* <td> */}
                          {/*  {pricesForRegion[0].Price}{" "}
                      {pricesForRegion[0] && pricesForRegion[0].Price && " $"} */}
                       {/*  </td> */}

                        <td>
                          {pricesForRegion[0] && parseFloat(pricesForRegion[0].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}
                          {pricesForRegion[0] && " $"}
                        </td>
                        <td>
                          {pricesForRegion[1] && parseFloat(pricesForRegion[1].Price).toLocaleString("fr-fr", { minimumFractionDigits: 2, maximumFractionDigits: 2})}
                          {pricesForRegion[1] && " $"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {props.saqCode && (
                <SaqCode>SAQ CODE {props.saqCode || ""}</SaqCode>
              )}
            </TextContainer>
          </SubContainer>
        </Label>
      </Container>
    </>
  );
};

export default BeerCard4;
