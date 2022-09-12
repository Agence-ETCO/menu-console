import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
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
  const { t, lang } = useTranslation("common");
  const handleClick = () => {
    setShowHelp(!showHelp);
  };

  const date = "20 septembre 2022";

  return (
    <>
      <Header step={-1} />
      <Container>
        <Help showHelp={showHelp} handleClick={handleClick} />
        <Greeting>
          {t("welcomePage.greeting")} {userID},
        </Greeting>
        <Title>{t("welcomePage.title")}</Title>
        <Body>{t("welcomePage.body")}</Body>
        <Subcontainer>
          <DateLimit>{t("welcomePage.dateLimite")}</DateLimit>
          <Body1>{t("welcomePage.body1")}</Body1>
          <Date>{date}</Date>
          <Body1>{t("welcomePage.body2")}</Body1>
          <Body>Merci de votre collaboration, </Body>
        </Subcontainer>
        <Ending>
          {welcomePage.help}
          &nbsp;
          <Contact onClick={() => handleClick()}>
            {t("welcomePage.contact")}
          </Contact>
        </Ending>
      </Container>
      <Footer first startText={t("welcomePage.buttonText")} href={"/1"} />
    </>
  );
};

export default WelcomePage;
