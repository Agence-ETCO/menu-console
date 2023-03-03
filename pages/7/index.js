import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import BeerCard from "../../components/BeerCard";
import BeerCard2 from "../../components/BeerCard2";
import BeerCard3 from "../../components/BeerCard3";
import WineCard from "../../components/WineCard";
import BeerList from "../../components/BeerList";
import AlertBox from "../../components/AlertBox";
import { AppContext } from "../../context/AppContext";
import image from "../../public/edit.svg";
import { putAPI1, fetchCurrentUser, fetchAPI } from "../../lib/api";
import useUserID from "../../lib/useUserID";
import { page2, page3, page4, page7, footer } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  TitleContainer,
  Subcontainer1,
  Subtitle1,
  Title1,
  Title2,
  Container1,
  Button,
  Text,
  KegTitleContainer,
  KegTitle
} from "./styled";
import MiniBeerCard from "../../components/MiniBeerCard";
import MiniBeerMomentCard from "../../components/MiniBeerMomentCard";

const Page7 = () => {
  const {
    state,
    actions: {
      addPreviousStep,
      receiveSelections,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
      getMenuId,
      receivePack,
      receiveBeerSelections
    },
  } = useContext(AppContext);
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [craftBeer, setCraftBeer] = useState([]);
  const userID = useUserID();
  const step = 7;

  const beer =
    state.selections &&
    state.selections.filter(
      (option) =>
        (option.attributes && option.attributes.category === "Beer") ||
        option.category === "Beer"
    );
  const nonAlcohol =
    state.selections &&
    state.selections.filter(
      (option) =>
        (option.attributes && option.attributes.category === "Non-Alcoholic") ||
        option.category === "Non-Alcoholic"
    );

  const orange =
    state.selections &&
    state.selections.filter(
      (option) =>
        (option.attributes && option.attributes.category === "SPARKLING, ROSÉ AND ORANGE WINES") ||
        option.category === "SPARKLING, ROSÉ AND ORANGE WINES"
    );

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.menuId === 0) {
      fetchCurrentUser()
        .then((res) => {
          if (res.franchisee_s_menu) {
            if (res.franchisee_s_menu.id) {
              getMenuId(res.franchisee_s_menu.id);
            }
          }
          return fetchAPI(
            ` https://pdf.selections-sthubert.ca/save/${state.menuId}`
          );
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetchAPI(` https://pdf.selections-sthubert.ca/save/${state.menuId}`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const status = { isSubmitted: true };

    putAPI1(`api/users-permissions/updateme`, status)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchAPI("/api/users-permissions/sendmemail")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    router.push("/8");
  };

  const onCancel = () => {
    setShowAlert(false);
  };


  useEffect(() => {
    const temp = state.selections
      .filter(
        (option) =>
          (option.attributes &&
            option.attributes.category === "Craft Beer") ||
          option.category === "Craft Beer"
      );

    const craft = [];

    if (state.micro1.id || state.micro1.title) {
      //setCraftBeer(craftBeer.concat([state.micro1]))
      craft = craft.concat([state.micro1]);
    }

    if (temp.length > 0) {
      setCraftBeer(craftBeer.concat(temp))
      craft = craft.concat(temp);
    }

    if (state.micro2.id || state.micro2.title) {
      //setCraftBeer(craftBeer.concat([state.micro2]))
      craft = craft.concat([state.micro2]);
    }
    setCraftBeer(craft);

    console.log('craftBeer', craftBeer, craft, temp.length);


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.selections,
    state.micro1.id,
    state.micro1.title,
    state.micro2.id,
    state.micro2.title
  ]);
  useEffect(() => {
    if (state.selections.length === 0) {
      fetchCurrentUser()
        .then((res) => {
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);
          }

          getMenuId(res.franchisee_s_menu.id);

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

  useEffect(() => {
    if (state.previousStep < 6) {
      addPreviousStep(6);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AlertBox
        showAlert={showAlert}
        onCancel={onCancel}
        handleSubmit={handleSubmit}
      />
      <Header step={7} />
      <Container>
        <Subcontainer1>
          <Title1>{page7.title}</Title1>
          <Subtitle1>
            {page7.subtitle}
          </Subtitle1>
          <Subtitle1>{page7.subtitle2}</Subtitle1>
        </Subcontainer1>
        {/* Mousseux et orange */}
        <TitleContainer>
          <Title>{page2.title}</Title>{" "}
          <Link href={"/2"}>
            <Button>
              {" "}
              <Image src={image} width={19} height={19} alt="" />
              <span>ÉDITER</span>
            </Button>
          </Link>

        </TitleContainer>
        <Subcontainer>
          {orange.length === 0 ? (
            <Text>{page7.noProduct}</Text>
          ) : (
            orange
              .map((option, key) => (
                <WineCard
                  key={`page6_option_a_${key}`}
                  value={option.id}
                  title={
                    (option.attributes && option.attributes.title) ||
                    option.title
                  }
                  description={
                    (option.attributes && option.attributes.descriptionFr) ||
                    option.descriptionFr
                  }
                  taste={
                    (option.attributes && option.attributes.tasteFr) ||
                    option.taste
                  }
                  location={
                    (option.attributes && option.attributes.location) ||
                    option.location
                  }
                  country={
                    (option.attributes && option.attributes.country) ||
                    option.country
                  }
                  sugar={
                    (option.attributes && option.attributes.sugar) ||
                    option.sugar
                  }
                  saqCode={
                    (option.attributes && option.attributes.saqCode) ||
                    option.saqCode
                  }
                  prices={
                    (option.attributes && option.attributes.cost) || option.cost
                  }
                  option={option}
                  imageUrl={
                    (option.attributes && option.attributes.imageURL) ||
                    option.imageURL
                  }
                  isOrganic={
                    (option.attributes && option.attributes.isOrganic) ||
                    option.isOrganic
                  }
                  isFromQuebec={
                    (option.attributes && option.attributes.isFromQuebec) ||
                    option.isFromQuebec
                  }
                  isNature={
                    (option.attributes && option.attributes.isNature) ||
                    option.isNature
                  }
                  isOrange={
                    (option.attributes && option.attributes.isOrange) ||
                    option.isOrange
                  }
                  isCellier={
                    (option.attributes && option.attributes.isCellier) ||
                    option.isCellier
                  }
                  step={step}
                />
              )))}
        </Subcontainer>
        {/* Vin blanc */}
        <TitleContainer>
          <Title>{page3.title}</Title>{" "}
          <Link href={"/3"}>
            <Button>
              {" "}
              <Image src={image} width={19} height={19} alt="" />
              <span>ÉDITER</span>
            </Button>
          </Link>

        </TitleContainer>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  (option.attributes &&
                    option.attributes.category === "White Wine") ||
                  option.category === "White Wine"
              )
              .map((option, key) => (
                <WineCard
                  key={`page6_option_a_${key}`}
                  value={option.id}
                  title={
                    (option.attributes && option.attributes.title) ||
                    option.title
                  }
                  description={
                    (option.attributes && option.attributes.descriptionFr) ||
                    option.descriptionFr
                  }
                  taste={
                    (option.attributes && option.attributes.tasteFr) ||
                    option.taste
                  }
                  location={
                    (option.attributes && option.attributes.location) ||
                    option.location
                  }
                  country={
                    (option.attributes && option.attributes.country) ||
                    option.country
                  }
                  sugar={
                    (option.attributes && option.attributes.sugar) ||
                    option.sugar
                  }
                  saqCode={
                    (option.attributes && option.attributes.saqCode) ||
                    option.saqCode
                  }
                  prices={
                    (option.attributes && option.attributes.cost) || option.cost
                  }
                  option={option}
                  imageUrl={
                    (option.attributes && option.attributes.imageURL) ||
                    option.imageURL
                  }
                  isOrganic={
                    (option.attributes && option.attributes.isOrganic) ||
                    option.isOrganic
                  }
                  isFromQuebec={
                    (option.attributes && option.attributes.isFromQuebec) ||
                    option.isFromQuebec
                  }
                  isNature={
                    (option.attributes && option.attributes.isNature) ||
                    option.isNature
                  }
                  isOrange={
                    (option.attributes && option.attributes.isOrange) ||
                    option.isOrange
                  }
                  isCellier={
                    (option.attributes && option.attributes.isCellier) ||
                    option.isCellier
                  }
                  step={step}
                />
              ))}
        </Subcontainer>

        {/* Vin Rouge */}
        <TitleContainer>
          <Title>{page4.title}</Title>{" "}
          <Link href={"/4"}>
            <Button>
              {" "}
              <Image src={image} width={19} height={19} alt="" />
              <span>ÉDITER</span>
            </Button>
          </Link>

        </TitleContainer>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  (option.attributes &&
                    option.attributes.category === "Red Wine") ||
                  option.category === "Red Wine"
              )
              .map((option, key) => (
                <WineCard
                  key={`page6_option_b_${key}`}
                  value={option.id}
                  title={
                    (option.attributes && option.attributes.title) ||
                    option.title
                  }
                  description={
                    (option.attributes && option.attributes.descriptionFr) ||
                    option.descriptionFr
                  }
                  taste={
                    (option.attributes && option.attributes.tasteFr) ||
                    option.tasteFr
                  }
                  location={
                    (option.attributes && option.attributes.location) ||
                    option.location
                  }
                  country={
                    (option.attributes && option.attributes.country) ||
                    option.country
                  }
                  sugar={
                    (option.attributes && option.attributes.sugar) ||
                    option.sugar
                  }
                  saqCode={
                    (option.attributes && option.attributes.saqCode) ||
                    option.saqCode
                  }
                  prices={
                    (option.attributes && option.attributes.cost) || option.cost
                  }
                  option={option}
                  imageUrl={
                    (option.attributes && option.attributes.imageURL) ||
                    option.imageURL
                  }
                  isOrganic={
                    (option.attributes && option.attributes.isOrganic) ||
                    option.isOrganic
                  }
                  isFromQuebec={
                    (option.attributes && option.attributes.isFromQuebec) ||
                    option.isFromQuebec
                  }
                  isNature={
                    (option.attributes && option.attributes.isNature) ||
                    option.isNature
                  }
                  isOrange={
                    (option.attributes && option.attributes.isOrange) ||
                    option.isOrange
                  }
                  isCellier={
                    (option.attributes && option.attributes.isCellier) ||
                    option.isCellier
                  }
                  step={step}
                />
              ))}
        </Subcontainer>

        {/* Bières */}
        <TitleContainer>
          <Title>Bières en fût</Title>

        </TitleContainer>

        <Subcontainer>
          <BeerList option={"pré-selectionnée"} />
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  (option.attributes &&
                    option.attributes.category === "Beer") ||
                  option.category === "Beer"
              )
              .map((option, key) => (

                <Subcontainer1 key={`page7_option_c_${key}`} >
                  <KegTitleContainer>
                    <KegTitle>Ligne {key + 6}:</KegTitle>
                    <Link href={"/5?keg=" + (key + 6)}>
                      <Button>
                        {" "}
                        <Image src={image} width={19} height={19} alt="" />
                        <span>ÉDITER</span>
                      </Button>
                    </Link>

                  </KegTitleContainer>
                  <BeerCard
                    value={option.id}
                    title={
                      (option.attributes && option.attributes.title) ||
                      option.title
                    }
                    alcohol={
                      (option.attributes && option.attributes.alcohol) ||
                      option.alcohol
                    }
                    description={
                      (option.attributes && option.attributes.descriptionFr) ||
                      option.descriptionFr
                    }
                    saqCode={
                      (option.attributes && option.attributes.saqCode) ||
                      option.saqCode
                    }
                    prices={
                      (option.attributes && option.attributes.cost) || option.cost
                    }
                    option={option}
                    imageUrl={
                      (option.attributes && option.attributes.imageURL) ||
                      option.imageURL
                    }
                    step={step}
                  />
                </Subcontainer1>
              )
              )}

          {state.selections &&
            craftBeer
              .map((option, key) => (

                <Subcontainer1 key={`page7_option_c_${key}`}>
                  <KegTitleContainer>
                    <KegTitle>Ligne {(key + 6 + state.selections
                      .filter(
                        (option) =>
                          (option.attributes &&
                            option.attributes.category === "Beer") ||
                          option.category === "Beer"
                      ).length)}:</KegTitle>
                    <Link href={"/5?keg=" + (key + 6 + state.selections
                      .filter(
                        (option) =>
                          (option.attributes &&
                            option.attributes.category === "Beer") ||
                          option.category === "Beer"
                      ).length)}>
                      <Button>
                        {" "}
                        <Image src={image} width={19} height={19} alt="" />
                        <span>ÉDITER</span>
                      </Button>
                    </Link>

                  </KegTitleContainer>
                  {(option.attributes && option.attributes.title.includes("Bière du moment") || (option.title && option.title.includes("Bière du moment"))) && (
                    <MiniBeerMomentCard
                      value={option.id}
                      title={
                        (option.attributes && option.attributes.title) ||
                        option.title
                      }
                      alcohol={
                        (option.attributes && option.attributes.alcohol) ||
                        option.alcohol
                      }
                      description={
                        (option.attributes && option.attributes.descriptionFr) ||
                        option.type
                      }
                      option={option}
                      step={step}
                      beerMaker={
                        (option.attributes && option.attributes.beerMaker) ||
                        ""}
                    />
                  ) || (
                      <MiniBeerCard
                        value={option.id}
                        title={
                          (option.attributes && option.attributes.title) ||
                          option.title
                        }
                        alcohol={
                          (option.attributes && option.attributes.alcohol) ||
                          option.alcohol
                        }
                        description={
                          (option.attributes && option.attributes.descriptionFr) ||
                          option.type
                        }
                        option={option}
                        step={step}
                        beerMaker={
                          (option.attributes && option.attributes.beerMaker) ||
                          ""}
                      />)}
                </Subcontainer1>
              )
              )}
        </Subcontainer>

        {/* Bières non alcoolisées */}
        <TitleContainer>
          <Title>{"Sans alcool"}</Title>{" "}
          <Link href={"/6"}>
            <Button>
              {" "}
              <Image src={image} width={19} height={19} alt="" />
              <span>ÉDITER</span>
            </Button>
          </Link>

        </TitleContainer>
        <Subcontainer>
          {nonAlcohol.length === 0 ? (
            <Text>Aucun produit sélectionné</Text>
          ) : (
            state.selections &&
            state.selections
              .filter(
                (option) =>
                  (option.attributes &&
                    option.attributes.category === "Non-Alcoholic") ||
                  option.category === "Non-Alcoholic"
              )
              .map((option, key) => (
                <BeerCard2
                  key={`page6_option_e_${key}`}
                  value={option.id}
                  title={
                    (option.attributes && option.attributes.title) ||
                    option.title
                  }
                  alcohol={
                    (option.attributes && option.attributes.alcohol) ||
                    option.alcohol
                  }
                  description={
                    (option.attributes && option.attributes.description) ||
                    option.description
                  }
                  saqCode={
                    (option.attributes && option.attributes.saqCode) ||
                    option.saqCode
                  }
                  prices={
                    (option.attributes && option.attributes.cost) || option.cost
                  }
                  option={option}
                  imageUrl={
                    (option.attributes && option.attributes.imageURL) ||
                    option.imageURL
                  }
                  step={step}
                />
              ))
          )}
        </Subcontainer>
        <Container1>
          <Title2>
            {/*  <span>Prochaine étape :</span> prévisualisez ou modifiez vos choix.{" "} */}
            <div>
              <span>Satisfait?</span> Soumettez votre carte des alcools pour
              impression.
            </div>
          </Title2>
        </Container1>
      </Container>

      <Footer
        first
        returnButtonText={footer.return}
        redirection={true}
        returnHref={"/6"}
        align
        /*  viewButtonText={footer.view} */
        submitButtonText={footer.submit}
        handleSubmit={handleClick}
      />
    </>
  );
};

export default Page7;
