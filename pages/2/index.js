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
  const [counter, setCounter] = useState(0);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const max = 3;
  const quantity = 3;
  const selections = state.selections.filter(
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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("jwt") || "";
    if (user) {
      setUserId(user.id);
    }

    setToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const token1 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYxNzkwODQ5LCJleHAiOjE2NjE4NzcyNDl9.D84sBq57zoGjMw2b7qhhJvxApz2GIUSbJjTCQEpjlpA";

  const handleClick = async () => {
    const menuItems = state.selections.map((option) => option.id);
    const menuData = {
      menu_items: [...menuItems],
      franchisee: userId,
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
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("jwt") || "";

    if (state.selections.length === 0) {
      fetchAPI(`/api/users/${user.id}?populate=deep`, token)
        .then((res) => {
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      const token = localStorage.getItem("jwt") || "";
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
                  title={option.attributes.title || option.tile}
                  description={
                    option.attributes.descriptionFr || option.descriptionFr
                  }
                  taste={option.attributes.tasteFr || option.tasteFr}
                  location={option.attributes.location || option.location}
                  country={option.attributes.country || option.country}
                  sugar={option.attributes.sugar || option.sugar}
                  saqCode={option.attributes.saqCode || option.saqCode}
                  prices={option.attributes.cost || option.cost}
                  limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL || option.imageURL}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={page2.return}
        returnHref={"/1"}
        buttonText={page2.buttonText}
        handleClick={handleClick}
        href={"/3"}
        selection={selection}
        stage={"VINS ROUGES"}
        disabled={counter < min}
      />
    </>
  );
};

export default Page2;
