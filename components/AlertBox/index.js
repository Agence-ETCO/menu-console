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
              {alertBox.title}{" "}
              <CloseButton onClick={props.onCancel}>
                <Image src={image} width={25} height={25} alt="" />
              </CloseButton>
            </Title>
            <div style={{ width: "423px", marginTop: "30px" }}>
              Une fois votre carte des alcools soumise, <br></br>
              vous ne pourrez plusfaire de modifications.
            </div>
            <div>{alertBox.question}</div>
            <Button onClick={props.handleSubmit}>{alertBox.buttonText1}</Button>
            <StyledButton onClick={props.onCancel}>
              {alertBox.buttonText2}
            </StyledButton>
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default AlertBox;
