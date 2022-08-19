import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard2 from "../../components/BeerCard2";
import DropDown from "../../components/DropDown";
import MinMax from "../../components/MinMax";
import Bubble from "../../components/Bubble";
import { beerList, page4, footer } from "../../fr";
import {
  Title1,
  SubTitle,
  Subcontainer,
  Container,
  Subcontainer1,
  Subcontainer2,
  Subcontainer3,
  Title,
} from "./styled";

const Page4 = () => {
  const min = 1;
  const [selections, setSelections] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [counter, setCounter] = useState(0);

  const options = [1, 2];
  const max = 2;

  const selected = selections.length - 1 >= 0;
  const selected2 = selections.length - 2 >= 0;

  const handleCheckboxChange = (option) => {
    let updatedSelections = [];
    let checked = selections.find((selection) => selection === option);
    let limit = max - selections.length - 1 >= 0;

    if (checked) {
      updatedSelections = selections.filter(
        (selection) => selection !== option
      );
    } else if (!checked && limit) {
      updatedSelections = [...selections, option];
    } else if (!checked && !limit) {
      updatedSelections = [...selections];
    }

    setSelections(updatedSelections);

    setUpdated(!updated);
  };

  useEffect(() => {
    const updatedCounter = selections.length <= min ? selections.length : min;
    setCounter(updatedCounter);
  }, [selections]);

  return (
    <>
      <Header step={4} />
      <Subcontainer>
        <div>
          <Title>Bières non-alcoolisés </Title>
          <SubTitle>
            Lorem ipsum doloris exuvaduis iradum quavodis zarominis
          </SubTitle>
        </div>
        <MinMax beer />
      </Subcontainer>
      <Container>
        <Subcontainer1>
          <div></div>
        </Subcontainer1>
        <Subcontainer2>
          {options.map((option, i) => (
            <BeerCard2
              key={i}
              checked={!!selections.includes(option)}
              handleCheckboxChange={() => handleCheckboxChange(option)}
              value={option}
            />
          ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/4"}
        buttonText={footer.buttonText}
        href={"/6"}
        stage={"RÉSUMÉ"}
        disabled={counter !== min}
      />
    </>
  );
};

export default Page4;
