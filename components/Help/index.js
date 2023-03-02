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
            <Title>{"Contactez-nous! "}</Title>
            <Subtitle>
              {"Sylvie Lefebvre"}
              <div>{"Coordonnatrice marketing"}</div>
            </Subtitle>
            <Subtitle2>
              {" "}
              <div>{"514-885-8426"}</div>{" "}
              <a href="mailto:Slefebvre@st-hubert.com">
                {"Slefebvre@st-hubert.com"}
              </a>
            </Subtitle2>
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default Help;
