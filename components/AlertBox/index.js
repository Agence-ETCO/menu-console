import Link from "next/link";
import { alertBox } from "../../fr";
import {
  Container,
  BoxContainer,
  Button,
  StyledLink,
  Title,
} from "./styled.js";

const AlertBox = (props) => {
  return (
    <Container>
      <BoxContainer>
        <Title>{alertBox.title}</Title>
        <div>{alertBox.body}</div>
        <div>{alertBox.question}</div>
        <Button onClick={props.handleClick}>{alertBox.buttonText1}</Button>

        <Link href={"/1"}>
          <StyledLink>{alertBox.buttonText2}</StyledLink>
        </Link>
      </BoxContainer>
    </Container>
  );
};

export default AlertBox;
