import Image from "next/image";
import image from "../../public/close.svg";
import {
  Container,
  Container1,
  BoxContainer,
  CloseButton,
  StyledLink,
  Square1,
  Square2,
  Title,
} from "./styled.js";

const PDF = (props) => {
  return (
    <>
      {props.showPDF ? (
        <Container1>
          <Container>
            <CloseButton onClick={props.handleClick}>
              <Image src={image} width={25} height={25} alt="" />
            </CloseButton>
            <StyledLink>SOUMETTRE</StyledLink>
          </Container>
          <BoxContainer>
            <Square1>
              <span>PDF</span>
            </Square1>
            <Square2 />
          </BoxContainer>
        </Container1>
      ) : null}
    </>
  );
};

export default PDF;
