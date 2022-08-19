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
} from "./styled";

const Page4 = () => {
  const {
    state,
    actions: { receiveData, addPreviousStep },
  } = useContext(AppContext);
  const buttons1 = [2, 4, 6];
  const buttons2 = [8, 10, 12];
  const min = 1;
  const [counter, setCounter] = useState(0);
  const [selectedPack, setSelectedPack] = useState(0);

  const selections = state.selections.filter(
    (option) => option.attributes && option.attributes.category === "Beer"
  );
  const craftOptions = state.data.filter(
    (option) => option.attributes.category === "Craft Beer"
  );
  const disabled = selectedPack === 0;
  const max = 2;
  const selected =
    (selectedPack === 8 && selections.length >= 1) || selectedPack >= 10;
  const selected2 = selectedPack >= 10;
  const limit = max - selections.length - 1 >= 0;

  useEffect(() => {
    const updatedCounter = selections.length <= min ? selections.length : min;
    setCounter(updatedCounter);
  }, [selections]);

  useEffect(() => {
    if (state.data.length === 0) {
      const token = state.userData.jwt || "";
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
      <Subcontainer>
        <div>
          <Title1>Bières en fût </Title1>
          <SubTitle>
            Lorem ipsum doloris exuvaduis iradum quavodis zarominis{" "}
          </SubTitle>
        </div>
        <MinMax beer />
      </Subcontainer>
      <Container>
        <SubTitle1>
          Combien de lignes de fût de bières avez vous ? Ne pas compter les
          lignes de vins
        </SubTitle1>

        <Buttons>
          <Container4>
            <Container2>
              <div>Produits Labatt</div>
              <ButtonContainer1>
                {buttons1.map((item, i) => (
                  <button key={i} onClick={() => setSelectedPack(item)}>
                    {item}
                  </button>
                ))}
              </ButtonContainer1>
            </Container2>
            <Container3>
              <div>Jusqu’à 2 microbrasseries</div>
              <ButtonContainer2>
                {buttons2.map((item, i) => (
                  <StyledButton
                    key={i}
                    active={selectedPack === item}
                    onClick={() => setSelectedPack(item)}
                  >
                    {item}
                  </StyledButton>
                ))}
              </ButtonContainer2>
            </Container3>
          </Container4>
          <Square>
            Tout d’abord, vous devez sélectionner 2 produits en fût de Labatt
            pour vous permettre d’ajouter 2 bières en fût de microbrasserie.
          </Square>
        </Buttons>

        {selectedPack > 6 && (
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
              <DropDown
                options={craftOptions}
                disabled={!selected2}
                order="02"
              />
              <Bubble count={selections.length} show={false} duration={"4s"} />
              <Bubble count={selected2} show={false} duration={"4s"} />
            </Subcontainer3>
          </>
        )}
      </Container>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/3"}
        buttonText={footer.buttonText}
        href={"/5"}
        stage={"BIÈRES NON-ALCOOLISÉS"}
        disabled={disabled /* counter !== min */}
      />
    </>
  );
};

export default Page4;
