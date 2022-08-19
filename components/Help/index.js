import Image from "next/image";
import image from "../../public/close.svg";
import {
  Container,
  BoxContainer,
  CloseButton,
  Title,
  Subtitle,
  Subtitle2,
} from "./styled.js";

const Help = (props) => {
  return (
    <>
      {props.showHelp ? (
        <Container>
          <BoxContainer>
            <CloseButton onClick={props.handleClick}>
              <Image src={image} width={25} height={25} alt="" />
            </CloseButton>
            <Title>{"Besoin d’aide?"}</Title>
            <Subtitle>
              {"Nous serons heureux de répondre à vos demandes et vous aider."}
            </Subtitle>
            <Subtitle2>
              {" "}
              <div>{"999 - 999 - 9999"}</div>{" "}
              <a href="mailto:info@st-hubert.com">{"info@st-hubert.com "}</a>
            </Subtitle2>
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default Help;
