import Image from "next/image";
import { alertBox } from "../../fr";
import image from "../../public/close1.svg";
import {
  Container,
  BoxContainer,
  Button,
  StyledButton,
  Title,
  CloseButton,
} from "./styled.js";

const AlertBox = (props) => {
  return (
    <>
      {props.showAlert ? (
        <Container>
          <BoxContainer>
            <Title>
              Attention!
              <CloseButton onClick={props.onCancel}>
                <Image src={image} width={25} height={25} alt="" />
              </CloseButton>
            </Title>
            <div style={{ width: "423px", marginTop: "30px" }}>
            Votre sélection est incomplète. <br></br>
            </div>
            <div>Veuillez vérifier votre résumé et ajoutez les items manquants svp.</div>
            <div style={{ width: "423px", marginTop: "30px" }} >Merci !
            </div>
            <br></br>            <br></br>
            {/* <Button onClick={props.handleSubmit}>{alertBox.buttonText1}</Button> */}
            <StyledButton onClick={props.onCancel}>
              <span>{"FERMER l’alerte et"}</span> <br></br>
              <span>{"FINALISER votre sélection"}</span>
            </StyledButton>
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default AlertBox;
