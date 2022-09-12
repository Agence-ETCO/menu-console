import { useState } from "react";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";
import Logo from "../Logo";
import Stepper from "../Stepper";
import Help from "../Help";
import { Container, HeaderContainer, Nav, Container1 } from "./styled";
import { nav } from "../../fr";

const Header = ({ step }) => {
  const [showHelp, setShowHelp] = useState(false);
  const router = useRouter();
  const currentLang = router.locale;
  const handleClick = () => {
    setShowHelp(!showHelp);
  };

  const changeLang = async () => {
    if (currentLang === "en") {
      await setLanguage("fr");
    } else {
      await setLanguage("en");
    }
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
              <button onClick={async () => changeLang()}>
                <li>{nav.language}</li>
              </button>
            </ul>
          </Nav>
        </Container>
      </Container1>
      {step && <Stepper step={step} />}
    </HeaderContainer>
  );
};

export default Header;
