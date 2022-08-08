import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import Stepper from "../Stepper";
import Help from "../Help";
import { Container, HeaderContainer, Nav } from "./styled";
import { nav } from "../../fr";

const Header = ({ step }) => {
  const [showHelp, setShowHelp] = useState(false);

  const handleClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo />

        <Help
          showHelp={showHelp}
          handleClick={handleClick}
          /* handleSubmit={handleSubmit}  */
        />
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
      {step && <Stepper step={step} />}
    </HeaderContainer>
  );
};

export default Header;
