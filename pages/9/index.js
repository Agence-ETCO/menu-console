import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { welcomePage } from "../../fr";
import Help from "../../components/Help";
import {
  Container,
  Subcontainer,
  Title,
  Body,
  Ending,
  Contact,
} from "./styled";

const Page9 = () => {
  const [showHelp, setShowHelp] = useState(false);
  const handleClick = () => {
    setShowHelp(!showHelp);
  };
  return (
    <>
      <Header />
      <Container>
        <Help showHelp={showHelp} handleClick={handleClick} />
        <Subcontainer>
          <Title>Votre sélection a déjà été envoyée !</Title>
          <Body>
            Nous avons bien reçu vos choix et allons préparer votre menu pour
            l’impression.
          </Body>
          <Ending>
            {welcomePage.help}
            &nbsp;
            <Contact onClick={() => handleClick()}>
              {welcomePage.contact}
            </Contact>
          </Ending>
        </Subcontainer>
      </Container>
    </>
  );
};

export default Page9;
