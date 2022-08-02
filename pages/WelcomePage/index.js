import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Stepper from "../../components/Stepper";
import WineCard from "../../components/WineCard";
import { welcomePage } from "../../fr";
import { Greeting, Title, Body, Date, Ending } from "./styled";

const WelcomePage = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <Header />
      <Stepper step={0} />
      <Greeting>{welcomePage.greeting}</Greeting>
      <WineCard checked={checked} handleCheckboxChange={handleCheckboxChange} />
      <Title>{welcomePage.title}</Title>
      <Body>{welcomePage.body}</Body>
      <Date>{welcomePage.date}</Date>
      <Ending>
        {welcomePage.help} {welcomePage.conatct}
      </Ending>
    </div>
  );
};

export default WelcomePage;
