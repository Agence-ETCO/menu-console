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
} from "./styled.js";

const BeerCard = (props) => {
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
          <Image src={image} width={104} height={210} alt="" />
          <TextContainer checked={props.checked}>
            <div>{"Budweiser (5%)"}</div>
            <div> {"Lager américaine"} </div>
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
            <div>Saq code {12824197}</div>
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default BeerCard;
