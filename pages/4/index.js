import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
import BeerCard4 from "../../components/BeerCard4";
import DropDown from "../../components/DropDown";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { putAPI, fetchCurrentUser, fetchAPI } from "../../lib/api";
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
import useUserID from "../../lib/useUserID";

const Page4 = () => {
  const {
    state,
    actions: {
      receiveData,
      addPreviousStep,
      addPack,
      removeMicro01,
      removeMicro02,
      filterSelections,
      receivePack,
      receiveSelections,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
      getMenuId,
      addSelection,
    },
  } = useContext(AppContext);

  const buttons2 = [6, 8, 10, 12];

  const [counter, setCounter] = useState(0);

  const [craftSelections, setCraftSelections] = useState([]);
  const userID = useUserID();
  const [isCorona, setIsCorona] = useState(true);

  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Beer") ||
      option.category === "Beer"
  );

  const craftOptions = state.data.filter(
    (option) => option.attributes.category === "Craft Beer"
  );

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
      selections.length + num === 4
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
      : num >= 1;

  const limit =
    state.selectedPack === 8
      ? max - selections.length - 2 >= 0
      : state.selectedPack === 10 && !isCorona
      ? max - selections.length - 3 >= 0
      : state.selectedPack === 10 && isCorona
      ? max - selections.length - 2 >= 0
      : state.selectedPack === 12
      ? max - selections.length - 3 >= 0
      : 2;

  const handleClick = (item) => {
    filterSelections("Beer");
    removeMicro01();
    removeMicro02();
    addPack(item);
  };

  useEffect(() => {
    const craft =
      (state.micro1 && state.micro1.craftOptions) ||
      (state.micro2 && state.micro2.craftOptions)
        ? [state.micro1.craftOptions, state.micro2.craftOptions]
        : [];
    setCraftSelections(craft.filter((n) => n !== null));
  }, [
    state.micro1,
    state.micro2,
    state.micro1.craftOptions,
    state.micro2.craftOptions,
  ]);

  const preselect = [];
  const options1 = state.data
    .filter(
      (option) => option.attributes && option.attributes.category === "Beer"
    )
    .forEach((option) => {
      if (
        option.attributes.title.includes("Budweiser") ||
        option.attributes.title.includes("Archibald Chipie") ||
        option.attributes.title.includes("Goose Island IPA") ||
        option.attributes.title.includes("Hoegaarden") ||
        option.attributes.title.includes("Bud Light") ||
        option.attributes.title.includes("Stella Artois")
      ) {
        preselect.push(option);
      }
    });
  const preselect1 = state.data
    .filter(
      (option) => option.attributes && option.attributes.category === "Beer"
    )
    .find((option) => option.attributes.title.includes("Corona"));
  useEffect(() => {
    const updatedCounter =
      state.selectedPack === 6
        ? 6
        : state.selectedPack === 10 && isCorona
        ? selections.length - 1 + num
        : selections.length + num;
    setCounter(updatedCounter);
  }, [selections, state.selectedPack, num]);

  useEffect(() => {
    if (state.data.length === 0) {
      fetchAPI("/api/menu-items?populate=deep")
        .then((res) => {
          receiveData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick1 = async () => {
    const craft1 = state.micro1.title ? state.micro1 : {};
    const craft2 = state.micro2.title ? state.micro2 : {};
    const preselect =
      state.selectedPack === 6
        ? preselect.map((option) => option.id)
        : isCorona
        ? preselect1.id
        : undefined;

    const menuItems = state.selections.map((option) => option.id);

    const totalItems = [
      ...menuItems,
      preselect,
      state.micro1.id,
      state.micro2.id,
    ].filter((n) => n !== undefined);

    const menuData = {
      menu_items: totalItems,
      craftOptions: {
        options: craftSelections,
        craft1,
        craft2,
        pack: state.selectedPack,
      },
      franchisee: userID,
    };

    receiveCraftOptions({
      options: craftSelections,
      craft1,
      craft2,
      pack: state.selectedPack,
    });
    putAPI(`api/franchisees-menus/${state.menuId}?populate=deep`, menuData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const beerData = state.data
    .filter(
      (option) =>
        (option.attributes && option.attributes.category === "Beer") ||
        option.category === "Beer"
    )
    .filter((option) => !option.attributes.title.includes("Budweiser"))
    .filter((option) => !option.attributes.title.includes("Archibald Chipie"))
    .filter((option) => !option.attributes.title.includes("Goose Island IPA"))
    .filter((option) => !option.attributes.title.includes("Hoegaarden"))
    .filter((option) => !option.attributes.title.includes("Bud Light"))
    .filter((option) => !option.attributes.title.includes("Corona"))
    .filter((option) => !option.attributes.title.includes("Stella Artois"));

  useEffect(() => {
    if (state.selections.length === 0) {
      fetchCurrentUser()
        .then((res) => {
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);
          }
          if (res.franchisee_s_menu.id) {
            getMenuId(res.franchisee_s_menu.id);
          }
          receiveCraftOptions(res.franchisee_s_menu.craftOptions);

          receivePack(res.franchisee_s_menu.craftOptions.pack || 0);

          if (res.franchisee_s_menu.craftOptions.craft1.title) {
            addMicro01(res.franchisee_s_menu.craftOptions.craft1);
          }

          if (res.franchisee_s_menu.craftOptions.craft2.title) {
            addMicro02(res.franchisee_s_menu.craftOptions.craft2);
          }

          const selections = res.franchisee_s_menu.menu_items.filter(
            (option) => option.category === "Craft Beer"
          );
          if (res.franchisee_s_menu.craftOptions.options[0]) {
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
          }
          if (res.franchisee_s_menu.craftOptions.options[1]) {
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
            <SubTitle>
              Découvrez le nombre de bières que vous pourrez choisir selon votre
              bar.
            </SubTitle>
          </div>
          {state.selectedPack > 0 && (
            <MinMax stage={4} number={state.selectedPack} />
          )}
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
                  {buttons2.map((item, key) => (
                    <StyledButton
                      key={`page4_button_${key}`}
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
          {state.selectedPack === 6 && (
            <Subcontainer2>
              {preselect.map((option) => (
                <BeerCard4
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  alcohol={option.attributes.alcohol}
                  description={option.attributes.descriptionFr}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                />
              ))}
            </Subcontainer2>
          )}
          {state.selectedPack > 6 && (
            <>
              <Subcontainer1>
                <div>
                  <Title>{beerList.title}</Title>
                </div>
              </Subcontainer1>
              <Subcontainer2>
                {state.selectedPack === 10 &&
                  isCorona &&
                  [preselect1].map((option) => (
                    <BeerCard4
                      key={option.id}
                      value={option.id}
                      title={option.attributes.title}
                      alcohol={option.attributes.alcohol}
                      description={option.attributes.descriptionFr}
                      saqCode={option.attributes.saqCode}
                      prices={option.attributes.cost}
                      limit={limit}
                      option={option}
                      imageUrl={option.attributes.imageURL}
                    />
                  ))}

                {state.data &&
                  beerData
                    .filter((option) => option.attributes.category === "Beer")
                    .map((option, key) => (
                      <BeerCard
                        key={`page4_option_${key}`}
                        value={option.id}
                        title={option.attributes.title}
                        alcohol={option.attributes.alcohol}
                        description={option.attributes.descriptionFr}
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
                {isCorona && (
                  <Bubble count={2} show={num === 1} duration={"4s"} />
                )}
              </Subcontainer3>
            </>
          )}
        </Container>
      </Main>
      <Footer
        first={state.selectedPack < 6}
        selection={selection}
        returnButtonText={footer.return}
        returnHref={"/3"}
        buttonText={footer.buttonText}
        href={"/5"}
        stage={"BIÈRES NON-ALCOOLISÉS"}
        handleClick={handleClick1}
        disabled={disabled()}
      />
    </>
  );
};

export default Page4;
