import Link from "next/link";
import Arrow from "../Arrow";
import { Container, Button, StyledLink, StyledButton } from "./styled.js";

const Footer = (props) => {
  return (
    <Container>
      {props.returnButtonText && (
        <Link href={props.returnHref}>
          <Button>{props.returnButtonText}</Button>
        </Link>
      )}
      {props.startText && (
        <Link href={props.href}>
          <StyledLink>{props.startText}</StyledLink>
        </Link>
      )}
      {props.buttonText && (
        <Link href={props.href}>
          <StyledLink disabled={props.disabled}>
            {props.buttonText}
            <Arrow />
          </StyledLink>
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
