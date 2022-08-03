import Link from "next/link";
import Logo from "../Logo";
import Stepper from "../Stepper";
import { Container, HeaderContainer, Nav } from "./styled";
import { nav } from "../../fr";

const Header = ({ step }) => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <Nav>
          <ul>
            <Link href={"/"}>
              <li>{nav.help}</li>
            </Link>
          </ul>
          <ul>
            <Link href={"/"}>
              <li>{nav.language}</li>
            </Link>
          </ul>
        </Nav>
      </Container>
      <Stepper step={step} />
    </HeaderContainer>
  );
};

export default Header;
