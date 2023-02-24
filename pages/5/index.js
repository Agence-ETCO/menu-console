import { useEffect, useContext, useState } from "react";
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
import BeerCard4 from "../../components/BeerCard4";
import DropDown from "../../components/DropDown";
import useUserID from "../../lib/useUserID";
import { Subtitle } from "../../components/Help/styled";
import HintBox from "../../components/HintBox";
import MinMax from "../../components/MinMax";
import MiniBeerCard from "../../components/MiniBeerCard";
import Form from "../../components/Form";
import { AppContext } from "../../context/AppContext";
import { putAPI, putAPI1, fetchCurrentUser, fetchAPI, login } from "../../lib/api";
import Bubble from "../../components/Bubble";
import { getUser } from "../../lib/store";
import { page5, footer } from "../../fr";
import image from "../../public/Fut.svg";
import Image from "next/image";
import * as _ from "lodash";
import {
  Title1,
  SubTitle,
  Subcontainer,
  Container,
  Subcontainer1,
  Subcontainer2,
  Subcontainer3,
  Title,
  ButtonContainer2,
  StyledButton,
  StyledButtonLong,
  Buttons,
  Square,
  SubTitle1,
  Container3,
  Container4,
  Main,
  Text,
  Text1,
  Title2,
  Choice,
  Chip,
  TitleContainer,
  AddButton
} from "./styled";
import CraftList from "../../components/CraftList";

const Page5 = () => {
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
      removeSelection,
    },
  } = useContext(AppContext);

  const router = useRouter();
  const { keg } = router.query;

  const buttons = [6, 8, 10, 12];

  //const [counter, setCounter] = useState(0);
  const [selectedPack, setPack] = useState(0);
  const [buttons2, setButtons] = useState([]);
  const [step, setStep] = useState(keg || 0);
  const [craftSelections, setCraftSelections] = useState([]);
  const userID = useUserID();
  const [isCorona, setIsCorona] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [beer, setBeer] = useState("");
  const [order, setOrder] = useState("01");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [_selected, setSelected] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    if (state.selectedPack !== 0) {
      setPack(state.selectedPack);
      setStep(keg ? parseInt(keg) : 5);
      setButtons(_.range(6, state.selectedPack + 1));
      const temp = state.selections.filter((el) => el.attributes.category === "Craft Beer" || el.attributes.category === "Beer");
      const length = temp.length;

      temp.map(el => el.id).slice(step - 6 - length).forEach(elem => { removeSelection(elem) });


      // for (let i = 0 ; i < 3; i++) {
      //   console.log('temp', temp, temp.length > step - 6, step);
      //   removeSelection(temp.pop().id);
      //   temp = state.selections.filter((el) => el.attributes.category === "Craft Beer" || el.attributes.category === "Beer" );           
      // }
    }

  }, [router.isReady]);



  const onChange = (value) => {
    setSelected(value);
  };
  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Beer") ||
      option.category === "Beer"
  );
  const craftOptions = state.selections.filter(
    (option) => option.attributes.category === "Craft Beer"
  );

  const stage =
    step === 12
      ? "BIÈRES NON ALCOOLISÉES"
      : step === 0
        ? "BIÈRES EN FÛT: LIGNE 1 À 5"
        : "BIÈRES EN FÛT LIGNE " + (step + 1);

  // const selection = (
  //   <span style={{ fontSize: "21px" }}>
  //     {counter}/{max}
  //   </span>
  // );

  const num = [
    state.micro1 && (state.micro1.id || state.micro1.title),
    state.micro2 && (state.micro2.id || state.micro2.title),
  ].filter((n) => n !== undefined).length;

  const limit = selections.length + craftOptions.length !== step - 5;
  const disabled = () => {
    if (state.selectedPack === 0) {
      return selectedPack === 0;
    }
    if (state.selectedPack !== 0 && step > 5) {
      return selections.length + craftOptions.length === step - 5
        ? false : true;
    }

    return false;
  }


  const selected =
    state.selectedPack === 8
      ? selections.length - 1 >= 0
      : selections.length >= 0;

  const selected2 =
    (state.selectedPack === 10 && !isCorona) || state.selectedPack === 12
      ? selections.length - 2 >= 0
      : num >= 1;

  const handleClick = (item) => {
    setPack(item);
  };

  const unselectKegN = (item) => {
    setButtons([]);
    removeMicro01();
    removeMicro02();
    setStep(0);
    addPack(0);
  }

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

  const beerList = state.data
    .filter(
      (option) => option.attributes && option.attributes.category === "Beer"
    );

  beerList.forEach((option) => {
    if (
      option.attributes.title.includes("Budweiser") ||
      option.attributes.title.includes("Michelob Ultra") ||
      option.attributes.title.includes("Stella Artois") ||
      option.attributes.title.includes("Corona") ||
      option.attributes.title.includes("Archibald Chipie")
    ) {
      //addSelection(option);
      preselect.push(option);
    }
  });
  const preselect1 = state.data
    .filter(
      (option) => option.attributes && option.attributes.category === "Beer"
    )
    .find((option) => option.attributes.title.includes("Corona"));
  // useEffect(() => {
  //   const updatedCounter =
  //     state.selectedPack === 6
  //       ? 6
  //       : state.selectedPack === 10 && isCorona
  //         ? selections.length + num
  //         : selections.length + num;
  //   setCounter(updatedCounter);
  // }, [selections, state.selectedPack, isCorona, num]);

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

    const menuItems = state.selections.map((option) => option.id);

    const totalItems = [...menuItems, state.micro1.id, state.micro2.id].filter(
      (n) => n !== undefined
    );

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

    const beerPack = { nbrOfKegs: state.selectedPack };
    putAPI1(`api/users-permissions/updateme`, beerPack)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReturn = () => {
    if (step === 5) {
      setStep(0);
      addPack(0);
      setPack(0);
    } else setStep(step - 1);

    const temp = state.selections.filter((el) => el.attributes.category === "Craft Beer" || el.attributes.category === "Beer");
    if (temp.pop()) removeSelection(temp.pop().id);
  }

  console.log(state.selections);

  const validateButtonHC = () => {
    if (state.selectedPack === 0) {
      setStep(5);
      setButtons(_.range(6, selectedPack + 1));
      filterSelections("Beer");
      removeMicro01();
      removeMicro02();
      addPack(selectedPack);
    } else if (step < 12) {
      setStep(step + 1);

    }
  }

  const goToStep = async (_step) => {
    if (_step < step) {setStep(_step)
      const temp = state.selections.filter((el) => el.attributes.category === "Craft Beer" || el.attributes.category === "Beer");
      const length = temp.length;

      temp.map(el => el.id).slice(step - 6 - length).forEach(elem => { removeSelection(elem) });
    };
  }

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
    const user = getUser();
    if (user) {
      setIsCorona(user.hasCorona);
    }
  }, []);

  useEffect(() => {
    if (state.previousStep < 4) {
      addPreviousStep(4);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(step);

  return (
    <>
      <Header step={5} />
      <Main>
        <Subcontainer>
          <TitleContainer>
          {((state.selectedPack === 12 && step === 11) ||
          (state.selectedPack === 12 && step === 12) ||
          (state.selectedPack === 10 && step === 10) ||
          (state.selectedPack === 10 && step === 9)||
          (state.selectedPack === 8 && step === 8))  && (<Title1>Microbrasserie</Title1>)  ||
            (<Title1>Bières en fût </Title1>)}
            {state.selectedPack !== 0 && (<Chip onClick={() => unselectKegN()} >{state.selectedPack}</Chip>)}
          </TitleContainer>
          {/* {state.selectedPack > 0 && (
            <MinMax stage={4} number={state.selectedPack} />
          )} */}
        </Subcontainer>
        <Container>
          {state.selectedPack === 0 && (
            <SubTitle1>
              {page5.subtitle}
            </SubTitle1>
          )}

          {step === 5 && (
            <SubTitle1>
              Les lignes de 1 à 5 ont été présélectionnées par St-Hubert.
            </SubTitle1>
          )}

          

          {step > 5 && (
            <>
            {((state.selectedPack === 12 && step === 11) ||
              (state.selectedPack === 12 && step === 12) ||
              (state.selectedPack === 10 && step === 10) ||
              (state.selectedPack === 10 && step === 9)||
              (state.selectedPack === 8 && step === 8)) && (
                <SubTitle1>
                  Choisissez une bière de microbrasserie parmi celles-ci.
                </SubTitle1>
              ) || (<SubTitle1>
                Choisir une bière pour la ligne {step} .
              </SubTitle1>)}
              </>
          )}

          <Buttons>
            <Container4>
              <Container3>
                <ButtonContainer2>
                  <Image src={image} width={62} height={81} alt=""></Image>
                  {state.selectedPack === 0 && (
                    buttons.map((item, key) => (
                      <StyledButton
                        key={`page5_button_${key}`}
                        active={selectedPack === item}
                        onClick={() => handleClick(item)}
                      >
                        {item}
                      </StyledButton>
                    ))
                  )}
                  {state.selectedPack !== 0 && (
                    <StyledButtonLong
                      key={`page5_Fut_${5}`}
                      active={step === 5}
                      onClick={() => goToStep(5)}
                    >
                      1 à 5
                    </StyledButtonLong>
                  )}

                  {state.selectedPack !== 0 && (
                    buttons2.map((item, key) => (
                      <StyledButton
                        key={`page5_Fut_${key}`}
                        active={step === (item)}
                        onClick={() => goToStep(item)}
                      >
                        {item}
                      </StyledButton>
                    ))
                  )}
                </ButtonContainer2>
              </Container3>
            </Container4>
            {step > 5 && (
              <MinMax stage={5} text={"Un seul choix possible."} />
            )}
            {step === 5 && (
              <Square>
                <Title2>IMPORTANT!</Title2>{" "}
                <div> Vous n’avez pas de sélection à faire à cette étape. </div>
              </Square>
            )}
          </Buttons>
          {step === 5 && (
            <Subcontainer2>
              {preselect.map((option, key) => (
                <BeerCard4
                  index={key + 1}
                  type={option.attributes.descriptionFr}
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  alcohol={option.attributes.alcohol}
                  description={option.attributes.descriptionFr}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  //limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                />
              ))}
            </Subcontainer2>
          )}

{/* /************************************************************
*   
*                 step 6 
*   
*************************************************************/ }

          {step === 6 && (
            <div>
              <SubTitle>
                La recommandation de St-Hubert.
              </SubTitle>
              <Subcontainer2>
                {beerList.filter((item) => (item.id == 1723 || item.id == 1764) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))).map((option, key) => (
                  <BeerCard
                    recommanded={true}
                    index={key + 1}
                    type={option.attributes.descriptionFr}
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

              <SubTitle>
                Vous pouvez aussi choisir parmi les bières suivantes.
              </SubTitle>
              <Subcontainer2>
                {beerList.filter((item) => (item.id !== 1723 && item.id !== 1764) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))).map((option, key) => (
                  <BeerCard
                    index={key + 1}
                    type={option.attributes.descriptionFr}
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


            </div>
          )}


{/* /************************************************************
*   
*                 step 7 
*   
*************************************************************/}

          {state.selectedPack !== 6 && step === 7 && (
            <div>
              <SubTitle>
                La recommandation de St-Hubert.
              </SubTitle>
              <Subcontainer2>
                {beerList.filter((item) => {
                  return step === 7 ? (item.id == 1765 || item.id == 1766) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                    : (item.id == 1724 || item.id == 1725) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                }).map((option, key) => (
                  <BeerCard
                    recommanded={true}
                    index={key + 1}
                    type={option.attributes.descriptionFr}
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

              <SubTitle>
                Vous pouvez aussi choisir parmi les bières suivantes.
              </SubTitle>
              <Subcontainer2>
                {beerList.filter((item) => {
                  return step === 7 ? !([1765, 1766].includes(item.id) || selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                    : !([1724, 1725].includes(item.id) || selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                }).map((option, key) => (
                  <BeerCard
                    index={key + 1}
                    type={option.attributes.descriptionFr}
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


            </div>
          )}

{/* /************************************************************
*                   step 8
*                 
*   
*************************************************************/}
          {state.selectedPack === 8 && step === 8 && (
            <CraftList limit={limit} step={step} />
          ) }
           {state.selectedPack !== 8 && step === 8 && (
              <div>
                <SubTitle>
                  La recommandation de St-Hubert.
                </SubTitle>
                <Subcontainer2>
                  {/* {beerList.filter((item) => (item.id == 1724 || item.id == 1725)).map((option, key) => ( */}
                  {beerList.filter((item) => {
                    return step === 7 ? (item.id == 1765 || item.id == 1766) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                      : (item.id == 1724 || item.id == 1725) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                  }).map((option, key) => (
                    <BeerCard
                      recommanded={true}
                      index={key + 1}
                      type={option.attributes.descriptionFr}
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

                <SubTitle>
                  Vous pouvez aussi choisir parmi les bières suivantes.
                </SubTitle>
                <Subcontainer2>
                  {beerList.filter((item) => {
                    return step === 7 ? !([1765, 1766].includes(item.id) || selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                      : !([1724, 1725].includes(item.id) || selections.slice(0, step - 6).map(el => el.id).includes(item.id))
                  }).map((option, key) => (
                    <BeerCard
                      index={key + 1}
                      type={option.attributes.descriptionFr}
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


              </div>
            )}

{/* /************************************************************
*                   step 9 and 10
*                 
*   
*************************************************************/}

          {state.selectedPack === 12 && (step === 9 || step === 10) && (
            <div>
              <SubTitle>
                La recommandation de St-Hubert.
              </SubTitle>
              <Subcontainer2>
                {/* {beerList.filter((item) => (item.id == 1762 || item.id == 1763)).map((option, key) => ( */}
                {beerList.filter((item) => (item.id == 1762 || item.id == 1763) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))).map((option, key) => (
                  <BeerCard
                    recommanded={true}
                    index={key + 1}
                    type={option.attributes.descriptionFr}
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

              <SubTitle>
                Vous pouvez aussi choisir parmi les bières suivantes.
              </SubTitle>
              <Subcontainer2>
                {beerList.filter((item) => (item.id !== 1723 && item.id !== 1764) && !(selections.slice(0, step - 6).map(el => el.id).includes(item.id))).map((option, key) => (
                  <BeerCard
                    index={key + 1}
                    type={option.attributes.descriptionFr}
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


            </div>
          ) }
           {state.selectedPack !== 12 && (step === 9 || step === 10) && (
            <CraftList limit={limit} step={step} />
          )}

{/* /************************************************************
*                   step 11 and 12
*                 
*   
*************************************************************/}

          {state.selectedPack === 12 && (step === 11 || step === 12) && (
            <CraftList limit={limit} step={step} />
          )}

          {/* {( step === 12) && (
            <CraftList limit={limit} step={12}/>
            )}          */}
        </Container>
      </Main>
      <Footer
        first={state.selectedPack < 7}
        returnButtonText={footer.return}
        returnHref={"/4"}
        noReturn={step === 0 ? false : true}
        buttonText={(step === 0 || step !== state.selectedPack) ? "Continuer" : footer.buttonText}
        redirection={(step === 0 || step !== state.selectedPack) ? false : true}
        href={"/6"}
        stage={stage}
        handleClick={validateButtonHC}
        disabled={disabled()}
        handleReturn={handleReturn}
      />
    </>
  );
};

export default Page5;
