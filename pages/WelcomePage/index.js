import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Help from "../../components/Help";
import { welcomePage } from "../../fr";
import { getUser } from "../../lib/store";
import {
  Greeting,
  Title,
  Body,
  Body1,
  Date,
  DateLimit,
  Ending,
  Container,
  Subcontainer,
  Contact,
} from "./styled";

const WelcomePage = () => {
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

  const date = "10 mars 2023";

  return (
    <>
      <Header step={-1} user={userUid} />
      <Container>
        <Help showHelp={showHelp} handleClick={handleClick} />
        <Greeting>
          {welcomePage.greeting}
        </Greeting>
        <Title>{welcomePage.title}</Title>
        <Body>{welcomePage.body}</Body>
        <Subcontainer>
          <DateLimit>{welcomePage.dateLimite}</DateLimit>
          <Body1>{welcomePage.body1}</Body1>
          <Date>{date}</Date>
          <Body1>{welcomePage.body2}</Body1>
          <Body>Merci de votre collaboration. </Body>
        </Subcontainer>
        <Ending>
          {welcomePage.help}
          &nbsp;
          <Contact onClick={() => handleClick()}>{welcomePage.contact}</Contact>
        </Ending>
      </Container>
      <Footer first startText={welcomePage.buttonText} href={"/1"}         redirection={ true } />
    </>
  );
};

export default WelcomePage;
 