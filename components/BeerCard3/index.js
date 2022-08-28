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

const BeerCard3 = (props) => {
  console.log(props.description, props.prices);
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
            <div>{props.title}</div>
            <div> {props.description} </div>

            {
              <table>
                <tbody>
                  <tr>
                    <th scope="col">
                      {(props.prices &&
                        props.index &&
                        props.prices[props.index[0]].size) ||
                        (!props.index && props.prices)}
                    </th>
                    <th scope="col">
                      {props.prices &&
                        props.index &&
                        props.index[1] &&
                        props.prices[props.index[1]].size}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {props.prices &&
                        props.index &&
                        props.prices[props.index[0]].Price}
                    </td>
                    <td>
                      {props.prices &&
                        props.index &&
                        props.index[1] &&
                        props.prices[props.index[1]].Price}
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
