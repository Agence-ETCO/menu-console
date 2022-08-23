import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { page2 } from "../../fr";
import { postAPI, fetchAPI } from "../../lib/api";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
} from "./styled";

const Page2 = () => {
  const {
    state,
    actions: { receiveData, receiveSelections, addPreviousStep, addSelection },
  } = useContext(AppContext);

  const min = 1;
  const [counter, setCounter] = useState(min);
  const max = 3;
  const quantity = 3;
  const selections =
    /*  state.selections.length > 0 &&
    state.selections.filter( */
    state.selections.filter(
      (option) =>
        (option.attributes && option.attributes.category === "White Wine") ||
        option.category === "White Wine"
    );
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );
  const limit = max - selections.length - 1 >= 0;

  const token =
    state.userData.jwt ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYxMTg3NTA4LCJleHAiOjE2NjEyNzM5MDh9.f11eBpkZU0kW6vpMVZiQ595V2gH9yl-bmRxn8UWOggM";

  /* const handleClick = async () => {
    const menuItems = state.selections.map((option) => option.id);
    const menuData = {
      menu_items: [...menuItems],
      franchisee: 4,
    };

    postAPI("api/franchisees-menus?populate=deep", token, menuData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */

  useEffect(() => {
    if (state.previousStep < 1) {
      addPreviousStep(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updatedCounter = selections.length;
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

  /*  useEffect(() => {
    const userId = 4;
    if (state.selections.length === 0) {
      fetchAPI("/api/users/4?populate=deep", token)
        .then((res) => {
          receiveSelections(res.franchisee_s_menu.menu_items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <>
      <Header step={2} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page2.title} </Title>
            <SubTitle>
              Choisissez parmi les <span>{quantity} vins blancs Cellier</span>
              disponibles
            </SubTitle>
          </div>
          <MinMax min={min} max={max} />
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter((option) => option.attributes.category === "White Wine")
              .map((option) => (
                <WineCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.descriptionFr}
                  taste={option.attributes.tasteFr}
                  location={option.attributes.location}
                  country={option.attributes.country}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={page2.return}
        returnHref={"/1"}
        buttonText={page2.buttonText}
        /*    handleClick={handleClick} */
        href={"/3"}
        selection={selection}
        stage={"VINS ROUGES"}
        disabled={counter < min}
      />
    </>
  );
};

export default Page2;
