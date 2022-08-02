import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Stepper from "../../components/Stepper";
import { welcomePage } from "../../fr";
import { Greeting, Title, Body, Date, Ending } from "./styled";

const WelcomePage = () => {
  return (
    <div>
      <Header />
      <Stepper />
      <Greeting>{welcomePage.greeting}</Greeting>
      <Title>{welcomePage.title}</Title>
      <Body>{welcomePage.body}</Body>
      <Date>{welcomePage.date}</Date>
      <Ending>
        {welcomePage.help} {welcomePage.conatct}
      </Ending>

      <Footer buttonText={welcomePage.buttonText} href={"/1"} />
    </div>
  );
};

export default WelcomePage;
