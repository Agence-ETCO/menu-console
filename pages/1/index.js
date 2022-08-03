import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Rectangle from "../../components/Rectangle";
import { Page1 } from "../../fr";
import { Container, Subcontainer, Title, Body, Date, Ending } from "./styled";

const WelcomePage = () => {
  const date = "le 30 septembre 2022";
  return (
    <>
      <Header step={1} />
      <Container>
        <Rectangle />
        <Subcontainer>
          <Title>{Page1.title}</Title>
          <Body>{Page1.body}</Body>
          <Body>
            {Page1.date} <span>{date}</span>
          </Body>
        </Subcontainer>
      </Container>

      <Footer buttonText={Page1.buttonText} href={"/2"} />
    </>
  );
};

export default WelcomePage;
