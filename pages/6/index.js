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
import { postAPI, fetchAPI } from "../../lib/api";
import { page2, page3, beerList, option2, footer } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  Subcontainer1,
  Subtitle1,
  Title1,
  Container1,
  Button,
} from "./styled";

const Page6 = () => {
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
    },
  } = useContext(AppContext);
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [craftBeer, setCraftBeer] = useState([]);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const step = 6;

  const handleClick = () => {
    setShowAlert(true);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("jwt") || "";
    if (user) {
      setUserId(user.id);
    }

    setToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("jwt") || "";
    if (state.selections.length === 0) {
      fetchAPI(`/api/users/${user.id}?populate=deep`, token)
        .then((res) => {
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);
          }

          getMenuId(res.franchisee_s_menu.id);

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
                  (option.attributes &&
                    option.attributes.category === "White Wine") ||
                  option.category === "White Wine"
              )
              .map((option, i) => (
                <WineCard
                  key={option.id}
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
                  (option.attributes &&
                    option.attributes.category === "Red Wine") ||
                  option.category === "Red Wine"
              )
              .map((option, i) => (
                <WineCard
                  key={option.id}
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
          {state.selections &&
            state.selections
              .filter(
                (option) =>
                  (option.attributes &&
                    option.attributes.category === "Beer") ||
                  option.category === "Beer"
              )
              .map((option, i) => (
                <BeerCard
                  key={option.id}
                  value={option.id}
                  title={
                    (option.attributes && option.attributes.title) ||
                    option.title
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
              ))}
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
          {craftBeer &&
            craftBeer.map((option, i) => (
              <BeerCard3
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
                title={
                  (option.attributes && option.attributes.title) || option.title
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
            ))}
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
          {state.nonAlcohol > 0 &&
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
