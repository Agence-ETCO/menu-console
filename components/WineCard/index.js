import Image from "next/image";
import CheckMark from "../CheckMark.js";
import Icon1 from "../Icon1";
import Icon2 from "../Icon2";
import Icon1Dark from "../Icon1Dark";
import Icon2Dark from "../Icon2Dark";
import image from "../../public/Wine.png";
import red from "../../public/red.png";
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
          <ImageContainer>
            {props.red ? (
              <Image src={red} width={150} height={350} alt="" />
            ) : (
              <Image src={image} width={150} height={350} alt="" />
            )}
          </ImageContainer>
          <TextContainer checked={props.checked}>
            <div>{props.title || "Robert Mondavi Private Selection"}</div>
            <Desc checked={props.checked}>
              {" "}
              {props.description || "Cuvée Centenaire,Languedoc-Rousillon"}{" "}
            </Desc>
            <div>{props.location || "Québec, Canada"}</div>
            <CircleContainer checked={props.checked}>
              {" "}
              {props.taste || "AROMATIQUE ET CHARNU"} <Circle />{" "}
              <Sugar checked={props.checked}>{`Sucre : ${
                props.sugar || 12.5
              } g/L`}</Sugar>
            </CircleContainer>
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
            )}
            <IconContainer>
              <span> Saq code {props.saqCode || 12824197}</span>
              <Icons>
                {props.checked ? <Icon1Dark /> : <Icon1 />}
                {props.checked ? <Icon2Dark /> : <Icon2 />}
              </Icons>
            </IconContainer>
          </TextContainer>
        </SubContainer>
      </Label>
    </>
  );
};

export default WineCard;
