import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import { welcomePage } from "../../fr";
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
  const date = "12 septembre 2022";
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
        </Subcontainer>
        <Ending>
          {welcomePage.help}
          <Link href={"/"}>
            <span>{welcomePage.contact}</span>
          </Link>
        </Ending>
      </Container>
      <Footer startText={welcomePage.buttonText} href={"/1"} />
    </>
  );
};

export default WelcomePage;
