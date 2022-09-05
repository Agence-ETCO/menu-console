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
  ButtonContainer1,
  ButtonContainer2,
  StyledButton,
  Buttons,
  Square,
  SubTitle1,
  Container2,
  Container3,
  Container4,
  Main,
  Text,
  Text1,
  Title2,
  Choice,
  Separator,
} from "./styled";

const Page4 = () => {
  const {
    state,
    actions: {
      receiveData,
      addPreviousStep,
      addPack,
      removePack,
      filterSelections,
    },
  } = useContext(AppContext);
  const buttons1 = [2, 4];
  const buttons2 = [6, 8, 10, 12];

  const [counter, setCounter] = useState(0);
  const [selectedPack, setSelectedPack] = useState(0);
  const [isCorona, setIsCorona] = useState(true);
  const selections = state.selections.filter(
    (option) => option.attributes && option.attributes.category === "Beer"
  );
  const craftOptions = state.data.filter(
    (option) => option.attributes.category === "Craft Beer"
  );
  const min = selectedPack === 8 ? 2 : 0;
  const max =
    state.selectedPack === 6
      ? 6
      : state.selectedPack === 8
      ? 2
      : state.selectedPack === 10 && !isCorona
      ? 4
      : state.selectedPack === 10 && isCorona
      ? 3
      : state.selectedPack === 12
      ? 6
      : 2;
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );

  const num = [
    state.micro1 && (state.micro1.id || state.micro1.title),
    state.micro2 && (state.micro2.id || state.micro2.title),
  ].filter((n) => n !== undefined).length;

  const disabled = () => {
    if (state.selectedPack === 0) {
      return true;
    } else if (state.selectedPack === 6) {
      return false;
    } else if (state.selectedPack === 8 && selections.length + num === 2) {
      return false;
    } else if (
      state.selectedPack === 10 &&
      !isCorona &&
      selections.length + num === 4
    ) {
      return false;
    } else if (
      state.selectedPack === 10 &&
      isCorona &&
      selections.length + num === 3
    ) {
      return false;
    } else if (state.selectedPack === 12 && selections.length + num === 6) {
      return false;
    }
    return true;
  };

  const selected =
    state.selectedPack === 8
      ? selections.length - 1 >= 0
      : selections.length >= 0;

  const selected2 =
    (state.selectedPack === 10 && !isCorona) || state.selectedPack === 12
      ? selections.length - 2 >= 0
      : num>=1;

  const limit =
    state.selectedPack === 8
      ? max - selections.length - 2 >= 0
      : state.selectedPack === 10 && !isCorona
      ? max - selections.length - 3 >= 0
      : state.selectedPack === 10 && isCorona
      ? max - selections.length - 3 >= 0
      : state.selectedPack === 12
      ? max - selections.length - 3 >= 0
      : 2;

  const handleClick = (item) => {
    if (state.selectedPack > item) {
      filterSelections("Beer");
    }

    addPack(item);
  };
  useEffect(() => {
    const updatedCounter =
      state.selectedPack === 6 ? 6 : selections.length + num;
    setCounter(updatedCounter);
  }, [selections, min]);

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
    if (state.previousStep < 3) {
      addPreviousStep(3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header step={4} />
      <Main>
        <Subcontainer>
          <div>
            <Title1>Bières en fût </Title1>
            <SubTitle>
              Découvrez le nombre de bières que vous pourrez choisir selon votre
              bar.
            </SubTitle>
          </div>
          <MinMax stage={4} number={state.selectedPack} />
        </Subcontainer>
        <Container>
          <SubTitle1>
            Combien de lignes de fût de bières avez vous ? Ne pas compter les
            lignes de vins
          </SubTitle1>

          <Buttons>
            <Container4>
              <Container3>
                <ButtonContainer2>
                  {buttons2.map((item, i) => (
                    <StyledButton
                      key={i}
                      active={state.selectedPack === item}
                      onClick={() => handleClick(item)}
                    >
                      {item}
                    </StyledButton>
                  ))}
                </ButtonContainer2>
              </Container3>
            </Container4>
            {state.selectedPack !== 0 && (
              <Square>
                {state.selectedPack === 6 && (
                  <>
                    <Title2>IMPORTANT !</Title2>{" "}
                    <div> Voici vos 6 bières présélectionnées. </div>
                  </>
                )}

                {state.selectedPack === 8 && (
                  <>
                    <Title2>IMPORTANT !</Title2>{" "}
                    <div>
                      {" "}
                      Voici vos 6 bières présélectionnées.{" "}
                      <Text1>Complétez en ajoutant 2 produits :</Text1>
                    </div>
                    <Choice>
                      {" "}
                      1 bière Labatt + 1 bière de microbrasserie{" "}
                    </Choice>
                  </>
                )}
                {state.selectedPack === 10 && !isCorona && (
                  <>
                    <Title2>IMPORTANT !</Title2>{" "}
                    <div>
                      {" "}
                      Voici vos 6 bières présélectionnées.{" "}
                      <Text1>Complétez en ajoutant 4 produits :</Text1>
                    </div>
                    <Choice>
                      2 bières Labatt + 2 bières de microbrasserie
                    </Choice>
                  </>
                )}
                {state.selectedPack === 10 && isCorona && (
                  <>
                    <Title2>IMPORTANT !</Title2>{" "}
                    <div>
                      {" "}
                      Voici vos 6 bières présélectionnées.{" "}
                      <Text1>Complétez en ajoutant 3 produits :</Text1>
                    </div>
                    <Choice>1 bière Labatt + 2 bières de microbrasserie</Choice>
                  </>
                )}
                {state.selectedPack === 12 && (
                  <>
                    <Title2>IMPORTANT !</Title2>{" "}
                    <div>
                      {" "}
                      Voici vos 6 bières présélectionnées.{" "}
                      <Text1>Complétez en ajoutant 6 produits :</Text1>
                    </div>
                    <Choice>
                      4 bières Labatt + 2 bières de microbrasserie{" "}
                    </Choice>
                  </>
                )}
              </Square>
            )}
          </Buttons>

          {state.selectedPack > 6 && (
            <>
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
                        alcohol={option.attributes.alcohol}
                        description={option.attributes.description}
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
                <DropDown
                  disabled={!selected}
                  options={craftOptions}
                  order="01"
                />
                {(state.selectedPack === 10 || state.selectedPack === 12) && (
                  <DropDown
                    options={craftOptions}
                    disabled={!selected2}
                    order="02"
                  />
                )}
                <Bubble
                  count={selections.length}
                  show={selections.length === 1}
                  duration={"4s"}
                />
                <Bubble
                  count={selections.length}
                  show={selections.length === 2}
                  duration={"4s"}
                />
                {/*  {state.setSelectedPack === 10 && isCorona && (
                  <Bubble
                    count={selections.length + 1}
                    show={selected2}
                    duration={"4s"}
                  />
                )} */}
              </Subcontainer3>
            </>
          )}
        </Container>
      </Main>
      <Footer
        first={selectedPack < 8}
        selection={selection}
        returnButtonText={footer.return}
        returnHref={"/3"}
        buttonText={footer.buttonText}
        href={"/5"}
        stage={"BIÈRES NON-ALCOOLISÉS"}
        disabled={disabled()}
      />
    </>
  );
};

export default Page4;
