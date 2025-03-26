import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import Stepper from "../Stepper";
import Image from "next/image";
import Help from "../Help";
import { Container, HeaderContainer, Nav, Container1, User } from "./styled";
import { nav, header } from "../../fr";
import { getUser } from "../../lib/store";

const Header = ({ step }) => {
  const [showHelp, setShowHelp] = useState(false);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUserUid(user.uid);
    }
  }, []);

  const handleClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <HeaderContainer>
      <Container1>
        <Container>
          <Image src="https://rsh.nyc3.digitaloceanspaces.com/images/St-Hubert_Logo_avec_logotype_RGB.png" width={120} height={144.44} alt="logo" />
         {/*  <Logo /> */}
          <Help showHelp={showHelp} handleClick={handleClick} />
          <Nav>
            <ul>
              <li onClick={() => handleClick()}>{nav.help}</li>
            </ul>
            {/* <ul>
              <Link href={"/"}>
                <li>{nav.language}</li>
              </Link>
            </ul> */}
          </Nav>
          <User>{header.user} {userUid}</User>
        </Container>
      </Container1>
      {step && <Stepper step={step} />}
    </HeaderContainer>
  );
};

export default Header;
