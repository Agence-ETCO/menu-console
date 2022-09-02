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
import AlertBox from "../../components/AlertBox";
import { AppContext } from "../../context/AppContext";
import image from "../../public/edit.svg";
import { postAPI } from "../../lib/api";
import { page2, page3, beerList, option2, footer } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  Subcontainer1,
  Subtitle1,
  Title1,
  Title2,
  Container1,
  Button,
  Text,
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

  const beer =
    state.selections &&
    state.selections.filter(
      (option) => option.attributes && option.attributes.category === "Beer"
    );

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
  }, [
    state.micro1.id,
    state.micro1.title,
    state.micro2.id,
    state.micro2.title,
  ]);

  useEffect(() => {
    if (state.previousStep < 5) {
      addPreviousStep(5);
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
        <Title>{page2.title}</Title>{" "}
        <Link href={"/2"}>
          <Button>
            {" "}
            <Image src={image} width={19} height={19} alt="" />
            <span>ÉDITER</span>
          </Button>
        </Link>
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
        <Title>{page3.title}</Title>{" "}
        <Link href={"/3"}>
          <Button>
            {" "}
            <Image src={image} width={19} height={19} alt="" />
            <span>ÉDITER</span>
          </Button>
        </Link>
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
        <Link href={"/4"}>
          <Button>
            {" "}
            <Image src={image} width={19} height={19} alt="" />
            <span>ÉDITER</span>
          </Button>
        </Link>
        <Subcontainer>
          {beer.length === 0 ? (
            <Text>Aucun produit sélectionné</Text>
          ) : (
            state.selections &&
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
                  alcohol={option.attributes.alcohol}
                  description={option.attributes.description}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))
          )}
        </Subcontainer>
        <Title>{option2.title}</Title>{" "}
        <Link href={"/4"}>
          <Button>
            {" "}
            <Image src={image} width={19} height={19} alt="" />
            <span>ÉDITER</span>
          </Button>
        </Link>
        <Subcontainer>
          {craftBeer.length === 0 ? (
            <Text>Aucun produit sélectionné</Text>
          ) : (
            craftBeer &&
            craftBeer.map((option, i) => (
              <BeerCard3
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
                title={
                  (option.attributes && option.attributes.title) || option.title
                }
                alcohol={
                  (option.attributes && option.attributes.alcohol) ||
                  option.alcohol
                }
                description={
                  (option.attributes && option.attributes.descriptionFr) ||
                  option.description
                }
                prices={
                  (option.attributes && option.attributes.cost) || option.size
                }
                index={option.attributes && option.craftOptions.price}
              />
            ))
          )}
        </Subcontainer>
        <Title>{"Bières non-alcoolisés"}</Title>{" "}
        <Link href={"/5"}>
          <Button>
            {" "}
            <Image src={image} width={19} height={19} alt="" />
            <span>ÉDITER</span>
          </Button>
        </Link>
        <Subcontainer>
          {state.nonAlcohol === 0 || state.nonAlcohol.length === 0 ? (
            <Text>Aucun produit sélectionné</Text>
          ) : (
            state.nonAlcohol.map((option, i) => (
              <BeerCard2
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))
          )}
        </Subcontainer>
        <Container1>
          <Title2>
            <span>Prochaine étape:</span> prévisualisez ou modifiez vos choix.{" "}
            <div>
              <span>Satisfait?</span> Soumettez votre carte des alcools pour
              impression.
            </div>
          </Title2>
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
