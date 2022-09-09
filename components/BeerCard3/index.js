import Image from "next/image";
import CheckMark from "../CheckMark.js";
import image from "../../public/Rectangle.png";
import useUserRegion from "../../lib/useUserRegion";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer,
  SubContainer,
  ImageContainer,
} from "./styled.js";

const BeerCard3 = (props) => {
  const region = useUserRegion();

  const pricesForRegion =
    region && props.index && props.index.length > 0
      ? props.prices.filter((option) => option.region === region)
      : props.prices;

  const format = () => {
    if (props.prices && props.index && props.index[1]) {
      if (pricesForRegion[props.index[1]].size.includes("20")) {
        return "Presion 20oz";
      } else {
        return "Pichet 60 oz";
      }
    }
  };
  console.log(pricesForRegion);
  return (
    <>
      <Label checked={props.checked}>
        <CheckboxContainer checked={props.checked}>
          <HiddenCheckbox
            checked={props.checked}
            onChange={props.handleCheckboxChange}
          />
          <CheckMark />
          <StyledCheckbox></StyledCheckbox>
        </CheckboxContainer>
        <SubContainer>
          <ImageContainer>
            <Image src={image} width={104} height={210} alt="" />
          </ImageContainer>
          <TextContainer checked={props.checked}>
            <div>
              {props.title} ({props.alcohol} {!props.index && "%"})
            </div>
            <div> {props.description} </div>

            {
              <table>
                <tbody>
                  <tr>
                    <th scope="col">
                      {props.index
                        ? props.prices &&
                          pricesForRegion[props.index[0]].size.includes("20")
                          ? "Presion 20 oz"
                          : "Pichet 60 oz"
                        : `${props.prices} ml`}
                    </th>
                    <th scope="col">{props.index ? format() : ""}</th>
                  </tr>
                  <tr>
                    <td>
                      {props.prices &&
                        props.index &&
                        pricesForRegion[props.index[0]].Price}
                      {props.prices &&
                        props.index &&
                        pricesForRegion[props.index[0]] &&
                        " $"}
                    </td>
                    <td>
                      {props.prices &&
                        props.index &&
                        props.index[1] &&
                        pricesForRegion[props.index[1]].Price}
                      {props.prices &&
                        props.index &&
                        props.index[1] &&
                        pricesForRegion[props.index[1]] &&
                        " $"}
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default BeerCard3;
