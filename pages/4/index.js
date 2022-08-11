import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
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
  const [dropDownCounter, setDropdownCounter] = useState(0);

  const options = [1, 2, 3, 4, 5, 6, 7];
  const max = 6;

  const selected = selections.length - 1 >= 0;
  const selected2 = selections.length - 2 >= 0;
  const selection =
    counter < min ? (
      <>
        Séléctionnez au miniMum <span>1 bière</span> pour continuer
      </>
    ) : (
      <>
        Vous avez débloquÉ <span>1 choix de microbrassereie</span>
      </>
    );

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
    localStorage.setItem("beer", JSON.stringify(updatedSelections));
  };

  useEffect(() => {
    const updatedCounter = selections.length <= min ? selections.length : min;
    setCounter(updatedCounter);
  }, [selections]);

  const dropDownOptions = [
    "La Mcrobrasserie1, Montréal, QC",
    "La Mcrobrasserie2, Montréal, QC",
    "La Mcrobrasserie3, Montréal, QC",
    "La Mcrobrasserie4, Montréal, QC",
    "La Mcrobrasserie5, Montréal, QC",
  ];

  const count = () => setDropdownCounter(dropDownCounter + 1);

  useEffect(() => {
    localStorage.removeItem("beer");
    localStorage.removeItem("microbrasserie01");
    localStorage.removeItem("microbrasserie02");
  }, []);

  return (
    <>
      <Header step={4} />
      <Subcontainer>
        <div>
          <Title1>{page4.title}</Title1>
          <SubTitle>
            Encourageons le commerce local ! Sélectionnez 2 bières Labatt pour
            inscrire<span>2 bières</span> de microbrasserie de votre choix
          </SubTitle>
        </div>
        <MinMax beer />
      </Subcontainer>
      <Container>
        <Subcontainer1>
          <div>
            <Title>{beerList.title}</Title>
          </div>
        </Subcontainer1>
        <Subcontainer2>
          {options.map((option, i) => (
            <BeerCard
              key={i}
              checked={!!selections.includes(option)}
              handleCheckboxChange={() => handleCheckboxChange(option)}
              value={option}
            />
          ))}
        </Subcontainer2>
        <Title>{beerList.title2}</Title>
        <Subcontainer3>
          <DropDown
            disabled={!selected}
            options={dropDownOptions}
            count={count}
            order="01"
          />
          <DropDown
            options={dropDownOptions}
            count={count}
            disabled={!selected2}
            order="02"
          />
          <Bubble count={selections.length} show={counter === 1} />
          <Bubble count={selections.length} show={selections.length === 2} />
        </Subcontainer3>
      </Container>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/3"}
        buttonText={footer.buttonText}
        href={"/5"}
        stage={"RÉSUMÉ"}
        disabled={counter !== min}
      />
    </>
  );
};

export default Page4;
