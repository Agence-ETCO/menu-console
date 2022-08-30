import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
import DropDown from "../../components/DropDown";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { postAPI, fetchAPI } from "../../lib/api";
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
} from "./styled";

const Page4 = () => {
  const {
    state,
    actions: {
      receiveData,
      addPreviousStep,
      addPack,
      removePack,
      receivePack,
      receiveSelections,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
    },
  } = useContext(AppContext);
  const buttons1 = [2, 4];
  const buttons2 = [6, 8, 10, 12];

  const [counter, setCounter] = useState(0);
  const [selectedPack, setSelectedPack] = useState(0);
  const [craftSelections, setCraftSelections] = useState([]);
  const [total, setTotal] = useState([]);

  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Beer") ||
      option.category === "Beer"
  );
  const craftOptions = state.data.filter(
    (option) => option.attributes.category === "Craft Beer"
  );
  const min = selectedPack === 8 ? 2 : 0;
  const max = 13;
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );

  const disabled = state.selectedPack.length === 0;

  const selected =
    !state.selectedPack.includes(10) && !state.selectedPack.includes(12)
      ? selections.length - 1 >= 0
      : selections.length >= 0;
  const selected2 =
    !state.selectedPack.includes(10) && !state.selectedPack.includes(12)
      ? selections.length - 2 >= 0
      : selections.length >= 0;
  const limit = max - selections.length - 1 >= 0;

  const handleClick = (item) => {
    if (state.selectedPack.includes(item)) {
      removePack(item);
    } else {
    }
    if (state.selectedPack.length < 2) {
      addPack(item);
    } else {
      removePack(item);
    }
  };
  useEffect(() => {
    const craft =
      (state.micro1 && state.micro1.craftOptions) ||
      (state.micro2 && state.micro2.craftOptions)
        ? [state.micro1.craftOptions, state.micro2.craftOptions]
        : [];
    setCraftSelections(craft.filter((n) => n !== null));
    const menuItems = state.selections.map((option) => option.id);

    const totalItems = [...menuItems, state.micro1.id, state.micro2.id].filter(
      (n) => n !== undefined
    );
    setTotal(totalItems);
  }, [
    state.selections,
    state.micro1,
    state.micro2,
    state.micro1.craftOptions,
    state.micro2.craftOptions,
  ]);

  useEffect(() => {
    const updatedCounter = selections.length;
    setCounter(updatedCounter);
  }, [selections, min]);

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
  const token =
    state.userData.jwt ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYxNzkwODQ5LCJleHAiOjE2NjE4NzcyNDl9.D84sBq57zoGjMw2b7qhhJvxApz2GIUSbJjTCQEpjlpA";

  const handleClick1 = async () => {
    const craft1 = state.micro1.title ? state.micro1 : {};
    const craft2 = state.micro2.title ? state.micro2 : {};

    const menuData = {
      menu_items: total,
      craftOptions: {
        options: craftSelections,
        craft1,
        craft2,
        pack: state.selectedPack,
      },
      franchisee: 4,
    };

    postAPI("api/franchisees-menus?populate=deep", token, menuData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const userId = 4;
    if (state.selections.length === 0) {
      fetchAPI("/api/users/4?populate=deep", token)
        .then((res) => {
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);

            receiveCraftOptions(res.franchisee_s_menu.craftOptions.options);

            receivePack(res.franchisee_s_menu.craftOptions.pack || []);

            if (res.franchisee_s_menu.craftOptions.craft1.title) {
              addMicro01(res.franchisee_s_menu.craftOptions.craft1);
            }

            if (res.franchisee_s_menu.craftOptions.craft2.title) {
              addMicro02(res.franchisee_s_menu.craftOptions.craft2);
            }

            const selections = res.franchisee_s_menu.menu_items.filter(
              (option) => option.category === "Craft Beer"
            );

            const craftOption = res.franchisee_s_menu.craftOptions.options[0];

            const selection = selections.find(
              (selection) => selection.id === craftOption.id
            );

            const craftObj = {
              id: selection.id,
              attributes: selection,
              craftOptions: craftOption,
            };

            addMicro01(craftObj);
            const craftOption2 = res.franchisee_s_menu.craftOptions.options[1];
            const selection2 = selections.find(
              (selection) => selection.id === craftOption2.id
            );

            const craftObj2 = {
              id: selection2.id,
              attributes: selection2,
              craftOptions: craftOption2,
            };
            addMicro02(craftObj2);
          }
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
            <SubTitle></SubTitle>
          </div>
          <MinMax stage={4} />
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
                    <button key={i} onClick={() => {}}>
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
                      active={state.selectedPack.includes(item)}
                      onClick={() => handleClick(item)}
                    >
                      {item}
                    </StyledButton>
                  ))}
                </ButtonContainer2>
              </Container3>
            </Container4>
            {(state.selectedPack.includes(8) ||
              state.selectedPack.includes(10) ||
              state.selectedPack.includes(12)) && (
              <Square>
                {state.selectedPack.includes(8) &&
                  !state.selectedPack.includes(10) &&
                  !state.selectedPack.includes(12) &&
                  "Tout d'abord, vous devez sélectionner 2 produits en fût de Labatt pour vous permettre d'ajouter 2 bières en fût de microbrasserie."}
                {(state.selectedPack.includes(10) ||
                  state.selectedPack.includes(12)) &&
                  "Tout d’abord, vous devez sélectionner 0 produits en fût de Labatt pour vous permettre d’ajouter 2 bières en fût de microbrasserie."}
              </Square>
            )}
          </Buttons>

          {(state.selectedPack.includes(8) ||
            state.selectedPack.includes(10) ||
            state.selectedPack.includes(12)) && (
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
                <Bubble
                  count={selections.length}
                  show={
                    !state.selectedPack.includes(10) &&
                    !state.selectedPack.includes(12) &&
                    selections.length === 1
                  }
                  duration={"4s"}
                />
                <Bubble
                  count={selections.length}
                  show={
                    !state.selectedPack.includes(10) &&
                    !state.selectedPack.includes(12) &&
                    selections.length === 2
                  }
                  duration={"4s"}
                />
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
        disabled={disabled}
        handleClick={handleClick1}
      />
    </>
  );
};

export default Page4;
