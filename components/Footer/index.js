import Link from "next/link";
import Vector from "../Vector";
import {
  Container,
  Button,
  StyledLink,
  StyledButton,
  Select,
  Select1,
  Stage,
} from "./styled.js";

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
          <StyledLink first={props.first}>{props.startText}</StyledLink>
        </Link>
      )}
      {props.buttonText && (
        <Link href={props.href}>
          <StyledLink
            first={props.first}
            disabled={props.disabled}
            onClick={props.handleClick}
          >
            {props.buttonText}
          </StyledLink>
        </Link>
      )}
      {props.selection && <Select>{props.selection}</Select>}

      {props.stage && (
        <Stage>
          <div>PROCHAINE ÉTAPE</div>
          <Select1>
            <Vector />
            <span>{props.stage}</span>
          </Select1>
        </Stage>
      )}
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
