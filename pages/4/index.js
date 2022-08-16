import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
import DropDown from "../../components/DropDown";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { fetchAPI } from "../../lib/api";
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
  const {
    state,
    actions: { receiveData, addPreviousStep },
  } = useContext(AppContext);
  const min = 1;
  const [counter, setCounter] = useState(0);
  const selections = state.selections.filter(
    (option) => option.attributes.category === "Beer"
  );
  const craftOptions = state.data.filter(
    (option) => option.attributes.category === "Craft Beer"
  );

  const max = 6;
  const selected = selections.length - 1 >= 0;
  const selected2 = selections.length - 2 >= 0;
  const limit = max - selections.length - 1 >= 0;

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

  useEffect(() => {
    const token = "";

    fetchAPI("/api/menu-items?populate=deep", token)
      .then((res) => {
        receiveData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (state.previousStep < 3) {
      addPreviousStep(3);
    }
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
          {state.data &&
            state.data
              .filter((option) => option.attributes.category === "Beer")
              .map((option) => (
                <BeerCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.taste}
                  location={option.attributes.location}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                />
              ))}
        </Subcontainer2>
        <Title>{beerList.title2}</Title>
        <Subcontainer3>
          <DropDown disabled={!selected} options={craftOptions} order="01" />
          <DropDown
            options={dropDownOptions}
            disabled={!selected2}
            order="02"
          />
          <Bubble
            count={selections.length}
            show={counter === 1}
            duration={"4s"}
          />
          <Bubble
            count={selections.length}
            show={selections.length === 2}
            duration={"4s"}
          />
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
