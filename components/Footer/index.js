import Link from "next/link";
import { Container, Button, StyledLink } from "./styled.js";

const Footer = (props) => {
  return (
    <Container>
      {props.secondButton && (
        <Link href={props.href1}>
          <Button>{props.buttonText1}</Button>
        </Link>
      )}

      <Link href={props.href}>
        <StyledLink>{props.buttonText}</StyledLink>
      </Link>
      {props.selection && <span>{props.selection}</span>}
    </Container>
  );
};

export default Footer;
