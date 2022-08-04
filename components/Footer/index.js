import Link from "next/link";
import { Container, Button, StyledLink, StyledButton } from "./styled.js";

const Footer = (props) => {
  return (
    <Container>
      {props.returnButtonText && (
        <Link href={props.returnHref}>
          <Button>{props.returnButtonText}</Button>
        </Link>
      )}
      {props.buttonText && (
        <Link href={props.href}>
          <StyledLink>{props.buttonText}</StyledLink>
        </Link>
      )}
      {props.selection && <span>{props.selection}</span>}
      {props.viewButtonText && (
        <StyledButton>{props.viewButtonText}</StyledButton>
      )}
      {props.submitButtonText && (
        <StyledButton onClick={props.handleSubmit}>
          {props.submitButtonText}
        </StyledButton>
      )}
    </Container>
  );
};

export default Footer;
