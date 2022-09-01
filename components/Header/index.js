import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import Stepper from "../Stepper";
import Help from "../Help";
import { Container, HeaderContainer, Nav, Container1 } from "./styled";
import { nav } from "../../fr";

const Header = ({ step }) => {
  const [showHelp, setShowHelp] = useState(false);

  const handleClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <HeaderContainer>
      <Container1>
        <Container>
          <Logo />

          <Help showHelp={showHelp} handleClick={handleClick} />
          <Nav>
            <ul>
              <li onClick={() => handleClick()}>{nav.help}</li>
            </ul>
            <ul>
              <Link href={"/"}>
                <li>{nav.language}</li>
              </Link>
            </ul>
          </Nav>
        </Container>
      </Container1>
      {step && <Stepper step={step} />}
    </HeaderContainer>
  );
};

export default Header;
