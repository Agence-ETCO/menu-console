import Link from "next/link";
import { alertBox } from "../../fr";
import {
  Container,
  BoxContainer,
  Button,
  StyledButton,
  Title,
} from "./styled.js";

const AlertBox = (props) => {
  return (
    <>
      {props.showAlert ? (
        <Container>
          <BoxContainer>
            <Title>{alertBox.title}</Title>
            <div style={{ width: "423px", marginTop: "30px" }}>
              Une fois soumise,{" "}
              <span style={{ fontWeight: "700" }}>vous ne pourrez plus</span>{" "}
              faire de modifications.
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
