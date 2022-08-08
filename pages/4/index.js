import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
import DropDown from "../../components/DropDown";
import { beerList, page4, footer } from "../../fr";
import {
  Title1,
  SubTitle,
  Select,
  Subcontainer,
  Container,
  Subcontainer1,
  Subcontainer2,
  Subcontainer3,
  Title,
} from "./styled";

const Page4 = () => {
  const min = 6;
  const [selections, setSelections] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [counter, setCounter] = useState(min);
  const [dropDownCounter, setDropdownCounter] = useState(0);
  const options = [1, 2, 3, 4, 5, 6, 7];
  const max = 12;
  const quantity = 6;
  const selected = counter - 2;
  const selected2 = selections.length - 4 >= 0;
  /* const selection = `Séléctionnez ${counter} bières pour continuer`; */

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
    const updatedCounter =
      min - selections.length - dropDownCounter > 0
        ? min - selections.length - dropDownCounter
        : 0;
    setCounter(updatedCounter);
  }, [selections, dropDownCounter]);

  const dropDownOptions = [
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
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
            Veuillez sélectionner entre{" "}
            <span>
              {min} et {max} bières
            </span>
            parmis les produits Labatt et de microbrasseries
          </SubTitle>
        </div>

        <Select>
          <span>{quantity}</span> {beerList.select}
        </Select>
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
        <Subcontainer3>
          <Title>{beerList.title2}</Title>
          <DropDown
            disabled={selected > 2}
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
        </Subcontainer3>
      </Container>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/3"}
        buttonText={footer.buttonText}
        href={"/5"}
        /* selection={selection} */
        disabled={counter !== 0}
      />
    </>
  );
};

export default Page4;
