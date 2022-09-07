import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Help from "../../components/Help";
import { welcomePage } from "../../fr";
import useUserID from "../../lib/useUserID";
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
  const userID = useUserID();

  const handleClick = () => {
    setShowHelp(!showHelp);
  };

  const date = "16 septembre 2022";

  return (
    <>
      <Header step={-1} />
      <Container>
        <Help showHelp={showHelp} handleClick={handleClick} />
        <Greeting>
          {welcomePage.greeting} {userID},
        </Greeting>
        <Title>{welcomePage.title}</Title>
        <Body>{welcomePage.body}</Body>
        <Subcontainer>
          <DateLimit>{welcomePage.dateLimite}</DateLimit>
          <Body1>{welcomePage.body1}</Body1>
          <Date>{date}</Date>
          <Body1>{welcomePage.body2}</Body1>
          <Body>Merci de votre collaboration, </Body>
        </Subcontainer>
        <Ending>
          {welcomePage.help}
          &nbsp;
          <Contact onClick={() => handleClick()}>{welcomePage.contact}</Contact>
        </Ending>
      </Container>
      <Footer first startText={welcomePage.buttonText} href={"/1"} />
    </>
  );
};

export default WelcomePage;
