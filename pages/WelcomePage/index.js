import React, { useEffect, useContext } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import { AppContext } from "../../context/AppContext";
import { welcomePage } from "../../fr";
import { useRouter } from "next/router";
import { login } from "../../lib/api";
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
} from "./styled";

const WelcomePage = () => {
  const date = "16 septembre 2022";
  const {
    state,
    actions: { addUser },
  } = useContext(AppContext);
  const router = useRouter();
  const { loginToken } = router.query;

  /* useEffect(() => {
    if (loginToken) {
      login(loginToken)
        .then(({ data }) => {
          addUser(data);
          const { jwt, user } = data;
          localStorage.setItem("jwt", jwt);
          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router, loginToken]); */

  /* console.log(state.userData.user && state.userData.user.username); */
  return (
    <>
      <Header step={-1} />
      <Container>
        <Greeting>{welcomePage.greeting}</Greeting>
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
          <a href="mailto:info@st-hubert.com">
            <span>{welcomePage.contact}</span>
          </a>
        </Ending>
      </Container>
      <Footer first startText={welcomePage.buttonText} href={"/1"} />
    </>
  );
};

export default WelcomePage;
