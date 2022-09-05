import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard2 from "../../components/BeerCard2";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { fetchAPI } from "../../lib/api";
import { footer } from "../../fr";
import {
  SubTitle,
  Subcontainer,
  Container,
  Subcontainer1,
  Subcontainer2,
  Container1,
  Title,
} from "./styled";

const Page5 = () => {
  const {
    state,
    actions: { receiveData, receiveSelections, addNonAlcohol, addPreviousStep },
  } = useContext(AppContext);
  const min = 0;
  const max = 2;
  const [counter, setCounter] = useState(0);
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );

  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Non-Alcoholic") ||
      option.category === "Non-Alcoholic"
  );

  useEffect(() => {
    if (state.data.length === 0) {
      const token = "";
      fetchAPI("/api/menu-items?populate=deep", token)
        .then((res) => {
          receiveData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.previousStep < 4) {
      addPreviousStep(4);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const updatedCounter = selections.length;
    setCounter(updatedCounter);
  }, [selections]);

  return (
    <>
      <Header step={5} />
      <Subcontainer>
        <Container1>
          <Title>Bières non-alcoolisés </Title>
          <SubTitle>
            Choisissez jusqu’à 2 bières non-alcoolisées (optionnel).
          </SubTitle>
        </Container1>
        <MinMax stage={5} />
      </Subcontainer>
      <Container>
        <Subcontainer1>
          <div></div>
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter(
                (option) => option.attributes.category === "Non-Alcoholic"
              )
              .map((option) => (
                <BeerCard2
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  alcohol={option.attributes.alcohol}
                  description={option.attributes.description}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
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
        selection={selection}
        disabled={counter < min}
      />
    </>
  );
};

export default Page5;
