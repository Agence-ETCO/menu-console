import Image from "next/image";
import CheckMark from "../CheckMark.js";
import Icon1 from "../Icon1";
import Icon2 from "../Icon2";
import Icon1Dark from "../Icon1Dark";
import Icon2Dark from "../Icon2Dark";
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
  IconContainer,
} from "./styled.js";

const WineCard = (props) => {
  return (
    <>
      <Label checked={props.checked}>
        <CheckboxContainer checked={props.checked}>
          <HiddenCheckbox
            checked={props.checked}
            onChange={props.handleCheckboxChange}
            value={props.value}
          />
          <CheckMark />
          <StyledCheckbox></StyledCheckbox>
        </CheckboxContainer>
        <SubContainer>
          <Image src={image} width={240} height={300} />
          <TextContainer checked={props.checked}>
            <div>{"Robert Mondavi Private Selection"}</div>
            <div> {"Cuvée Centenaire,Languedoc-Rousillon"} </div>
            <div>{"Québec, Canada"}</div>
            <CircleContainer checked={props.checked}>
              {" "}
              {"AROMATIQUE ET CHARNU"} <Circle /> {"Sucre : 12.5g/L"}
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

            <IconContainer>
              Saq code {12824197}
              {props.checked ? <Icon1Dark /> : <Icon1 />}
              {props.checked ? <Icon2Dark /> : <Icon2 />}
            </IconContainer>
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default WineCard;
