import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Stepper from "../../components/Stepper";
import Rectangle from "../../components/Rectangle";
import { Page1 } from "../../fr";
import { Container, Subcontainer, Title, Body, Date, Ending } from "./styled";

const WelcomePage = () => {
  return (
    <>
      <Header />

      <Stepper />
      <Container>
        <Rectangle />
        <Subcontainer>
          <Title>{Page1.title}</Title>
          <Body>{Page1.body}</Body>
          <Date>{Page1.date}</Date>
        </Subcontainer>
      </Container>
      <Footer
        secondButton
        buttonText1={Page1.buttonText1}
        href1={"/1"}
        buttonText={Page1.buttonText2}
        href={"/2"}
      />
    </>
  );
};

export default WelcomePage;
