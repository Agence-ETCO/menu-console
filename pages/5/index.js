import { useEffect, useContext, useState } from "react";
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard from "../../components/BeerCard";
import BeerCard4 from "../../components/BeerCard4";
import useUserID from "../../lib/useUserID";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { putAPI, putAPI1, fetchCurrentUser, fetchAPI, login } from "../../lib/api";
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
  Subcontainer2,
  ButtonContainer2,
  StyledButton,
  StyledButtonLong,
  Buttons,
  Square,
  SubTitle1,
  Container3,
  Container4,
  Main,
  Title2,
  Chip,
  TitleContainer,
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
      removeSelection,
      receiveBeerSelections
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
  const [_selected, setSelected] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    if (state.selectedPack !== 0) {
      setPack(state.selectedPack);
      setStep(keg ? parseInt(keg) : 5);
      setButtons(_.range(6, state.selectedPack + 1));
    }

  }, [router.isReady, state.selectedPack, keg]);



  // const onChange = (value) => {
  //   setSelected(value);
  // };

  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Beer") ||
      option.category === "Beer"
  );
  const craftOptions = state.selections.filter(
    (option) => option.attributes && option.attributes.category === "Craft Beer"
  );

  const stage =
    step === 12
      ? "SANS ALCOOL"
      : step === 0
        ? "BIÈRES EN FÛT: LIGNE 1 À 5"
        : "BIÈRES EN FÛT LIGNE " + (step + 1);

  const limit = selections.length + craftOptions.length !== step - 5;
  const disabled = () => {
    if (state.selectedPack === 0) {
      return selectedPack === 0;
    }
    if (state.selectedPack !== 0 && step > 5) {
      return state.beerSelections[step-6]? false : true;
    }
    return false;
  }

  const handleClick = (item) => {
    setPack(item);
  };

  const unselectKegN = () => {
    receiveBeerSelections([0, 0, 0, 0, 0, 0, 0])
    // for (let i = 0; i < 7; i++) {
    //   removeBeerSelection(i);
    // }
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
  const nonPreselect = [];

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
      preselect.push(option);
    } else {
      nonPreselect.push(option);
    }
  });

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

    // const totalItems = [...menuItems, state.micro1.id, state.micro2.id].filter(
    //   (n) => n !== undefined
    // );

    const menuData = {
      menu_items: menuItems,
      craftOptions: {
        options: craftSelections,
        craft1,
        craft2,
        pack: state.selectedPack,
        beers: state.beerSelections,
      },
      franchisee: userID,
    };

    receiveCraftOptions({
      options: craftSelections,
      craft1,
      craft2,
      pack: state.selectedPack,
      beers: state.beerSelections,
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
  }

  console.log(state.selections);

  const validateButtonHC = () => {
    window.scrollTo(0,0);
    if (state.selectedPack === 0) {
      setStep(5);
      setButtons(_.range(6, selectedPack + 1));
      // for (let i = 0; i < 7; i++) {
      //   removeBeerSelection(i);
      // }
      receiveBeerSelections([0, 0, 0, 0, 0, 0, 0])
      filterSelections("Beer");
      filterSelections("Craft Beer");
      removeMicro01();
      removeMicro02();
      addPack(selectedPack);
    } else if (step < state.selectedPack) {
      setStep(step + 1);
    }else {
      handleClick1()
    }
  }

  const goToStep = async (_step) => {
    if (_step < step) {
      setStep(_step)
      const temp = state.selections.filter((el) => el.attributes.category === "Craft Beer" || el.attributes.category === "Beer");
      const length = temp.length;

      if (_step % 2 == 0  && !_.isEmpty(state.micro2)) {           
        removeMicro01();
        removeMicro02();
      }
      if (_step % 2 == 1  && !_.isEmpty(state.micro1)) {
        removeMicro02();
      }

      if(_step - 6 - length < 0 ) {temp.map(el => el.id).slice(_step - 6 - length).forEach(elem => { 
        removeSelection(elem);
       });
      }
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
          receiveBeerSelections(res.franchisee_s_menu.craftOptions.beers)
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

  // useEffect(() => {
  //   const user = getUser();
  // }, []);

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
              Les lignes 1 à 5 correspondent aux bières Labatt obligatoires.
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
              ) || step == 6 && (<SubTitle1>
                Choisissez une bière blanche pour la ligne 6. 
              </SubTitle1>
              ) || (<SubTitle1>
                Choisissez une bière pour la ligne {step}.
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
                      // onClick={() => goToStep(5)}
                    >
                      1 à 5
                    </StyledButtonLong>
                  )}

                  {state.selectedPack !== 0 && (
                    buttons2.map((item, key) => (
                      <StyledButton
                        key={`page5_Fut_${key}`}
                        active={step === (item)}
                        // onClick={() => goToStep(item)}
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
              <Subcontainer2>
                {nonPreselect.filter((item) => (item.id == 1796 || item.id == 1797) && !(state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))).map((option, key) => (
                  <BeerCard
                    recommanded={false}
                    beerStep={step}
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

              {/* <SubTitle>
                Vous pouvez aussi choisir parmi les bières suivantes.
              </SubTitle>
              <Subcontainer2>
                {nonPreselect.filter((item) => (item.id !== 1796 && item.id !== 1797) && !(state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))).map((option, key) => (
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
              </Subcontainer2> */}


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
              St-Hubert vous recommande de choisir une bière IPA.
              </SubTitle>
              <Subcontainer2>
                {nonPreselect.filter((item) => {
                  return (item.id == 1798 || item.id == 1799) && !(state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id)) 
                }).map((option, key) => (
                  <BeerCard
                    recommanded={true}
                    beerStep={step}
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
              Sinon vous pouvez aussi choisir parmi les bières suivantes.
              </SubTitle>
              <Subcontainer2>
                {nonPreselect.filter((item) => {
                  return !([1798, 1799].includes(item.id) || state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))
                }).map((option, key) => (
                  <BeerCard
                  beerStep={step}
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
            <CraftList limit={limit} step={step} disabled = {!disabled()}/>
          ) }
           {state.selectedPack !== 8 && step === 8 && (
              <div>
                <SubTitle>
                St-Hubert vous recommande de choisir une bière Session Ale.
                </SubTitle>
                <Subcontainer2>
                  {nonPreselect.filter((item) => {
                    return (item.id == 1800 || item.id == 1801) && !(state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))
                  }).map((option, key) => (
                    <BeerCard
                    beerStep={step}
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
                Sinon vous pouvez aussi choisir parmi les bières suivantes.
                </SubTitle>
                <Subcontainer2>
                  {nonPreselect.filter((item) => {
                    return !([1800, 1801].includes(item.id) || state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))
                  }).map((option, key) => (
                    <BeerCard
                    beerStep={step}
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
              St-Hubert vous recommande de choisir une bière parmi celles-ci.
              </SubTitle>
              <Subcontainer2>
                {nonPreselect.filter((item) => (item.id == 1802 || item.id == 1803) && !(state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))).map((option, key) => (
                  <BeerCard
                  beerStep={step}
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
              Sinon vous pouvez doubler une des 5 bières Labatt obligatoires.
              </SubTitle>
              <Subcontainer2>
                { preselect.filter((item) => (item.id !== 1802 && item.id !== 1803) && !(state.beerSelections.filter((el,key)=> key != step - 6).includes(item.id))).map((option, key) => (
                  <BeerCard
                  beerStep={step}
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
            <CraftList limit={limit} step={step} disabled = {!disabled()}/>
          )}

{/* /************************************************************
*                   step 11 and 12
*                 
*   
*************************************************************/}

          {state.selectedPack === 12 && (step === 11 || step === 12) && (
            <CraftList limit={limit} step={step} disabled = {!disabled()}/>
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
        buttonText={step === 5 ? "Continuer" : footer.buttonText}
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
