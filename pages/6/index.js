import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import BeerCard from "../../components/BeerCard";
import BeerCard2 from "../../components/BeerCard2";
import WineCard from "../../components/WineCard";
import AlertBox from "../../components/AlertBox";
import { AppContext } from "../../context/AppContext";
import { postAPI } from "../../lib/api";
import { page2, page3, beerList, option2, footer } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  Subcontainer1,
  Subtitle1,
  Title1,
  Container1,
} from "./styled";

const Page6 = () => {
  const {
    state,
    actions: { addPreviousStep },
  } = useContext(AppContext);
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [craftBeer, setCraftBeer] = useState([]);

  const step = 6;

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/7");
  };

  const onCancel = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (state.micro1.id || state.micro1.title) {
      setCraftBeer([...craftBeer, state.micro1]);
    }
    if (state.micro2.id || state.micro2.title) {
      setCraftBeer([...craftBeer, state.micro1, state.micro2]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.previousStep < 4) {
      addPreviousStep(4);
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
      <Header step={6} />
      <Container>
        <Subcontainer1>
          <Title1>Nous y sommes presque !</Title1>
          <Subtitle1>
            Voici votre sélection. Révisez vos choix avec attention !
          </Subtitle1>
          <Subtitle1>
            Une fois votre sélection soumise, il vous sera impossible de faire
            des modifications.
          </Subtitle1>
          <Subtitle1>Merci de votre collaboration.</Subtitle1>
        </Subcontainer1>
        <Title>{page2.title}</Title>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  option.attributes &&
                  option.attributes.category === "White Wine"
              )
              .map((option, i) => (
                <WineCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.taste}
                  location={option.attributes.location}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))}
        </Subcontainer>
        <Title>{page3.title}</Title>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  option.attributes && option.attributes.category === "Red Wine"
              )
              .map((option, i) => (
                <WineCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.taste}
                  location={option.attributes.location}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))}
        </Subcontainer>
        <Title>{beerList.title}</Title>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  option.attributes && option.attributes.category === "Beer"
              )
              .map((option, i) => (
                <BeerCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))}
        </Subcontainer>
        <Title>{option2.title}</Title>{" "}
        <Subcontainer>
          {craftBeer &&
            craftBeer.map((option, i) => (
              <BeerCard2
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))}
        </Subcontainer>
        <Title>{"Bières non-alcoolisés"}</Title>{" "}
        <Subcontainer>
          {state.nonAlcohol &&
            state.nonAlcohol.map((option, i) => (
              <BeerCard2
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))}
        </Subcontainer>
        <Container1>
          <Title1>Êtes-vous prêt à valider votre sélection?</Title1>
        </Container1>
      </Container>

      <Footer
        returnButtonText={footer.change}
        returnHref={"/5"}
        viewButtonText={footer.view}
        submitButtonText={footer.submit}
        handleSubmit={handleClick}
      />
    </>
  );
};

export default Page6;
