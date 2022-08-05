import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import { welcomePage } from "../../fr";
import {
  Greeting,
  Title,
  Body,
  Date,
  DateLimit,
  Ending,
  Container,
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
        <DateLimit>{welcomePage.dateLimite}</DateLimit>
        <Date>{date}</Date>
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
