import Image from "next/image";
import CheckMark from "../CheckMark.js";
import image from "../../public/Wine.png";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
  TextContainer,
  SubContainer,
  Circle,
  CircleContainer,
} from "./styled.js";

const WineCard = (props) => {
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
          <Image src={image} width={119} height={241} />
          <TextContainer checked={props.checked}>
            <div>{"Robert Mondavi Private Selection"}</div>
            <div> {"Cuvée Centenaire,Languedoc-Rousillon"} </div>
            <div>{"Québec, Canada"}</div>
            <CircleContainer>
              {" "}
              {"AROMATIQUE ET CHARNU"} <Circle />{" "}
            </CircleContainer>

            <table>
              <tbody>
                <tr>
                  <th scope="col">6oz</th>
                  <th scope="col">9oz</th>
                  <th scope="col">Bouteille</th>
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

export default WineCard;
