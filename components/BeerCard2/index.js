import Image from "next/image";
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

const BeerCard2 = (props) => {
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
            <div>{props.title || "Budweiser"}</div>
            <div> {props.description || "Lager américaine"} </div>
            {props.prices ? (
              <table>
                <tbody>
                  <tr>
                    <th scope="col">{props.prices[0].size}</th>
                    <th scope="col">{props.prices[1].size}</th>
                    <th scope="col">{props.prices[2].size}</th>
                  </tr>
                  <tr>
                    <td>{props.prices[0].Price}</td>
                    <td>{props.prices[1].Price}</td>
                    <td>{props.prices[2].Price}</td>
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

export default BeerCard2;
