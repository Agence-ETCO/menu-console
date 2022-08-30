import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { postAPI, fetchAPI } from "../../lib/api";
import WineCard from "../../components/WineCard";
import { page3 } from "../../fr";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
} from "./styled";

const Page3 = () => {
  const {
    state,
    actions: { receiveData, receiveSelections, addPreviousStep },
  } = useContext(AppContext);
  const min = 3;
  const [counter, setCounter] = useState(0);
  const max = 6;
  const quantity = 18;
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );
  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Red Wine") ||
      option.category === "Red Wine"
  );
  const limit = max - selections.length - 1 >= 0;

  useEffect(() => {
    if (state.data.length === 0) {
      const token = "";
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYxMjgwOTkyLCJleHAiOjE2NjEzNjczOTJ9.uMJQoYU9_DhjJq8gggRfKIN4G1b9N4Y4yaksTCBOw_g";

  const handleClick = async () => {
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
  };
  console.log(state.selections);
  useEffect(() => {
    const userId = 4;
    if (state.selections.length === 0) {
      fetchAPI("/api/users/4?populate=deep", token)
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
    if (state.previousStep < 2) {
      addPreviousStep(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updatedCounter = selections.length;
    setCounter(updatedCounter);
  }, [selections]);

  return (
    <>
      <Header step={3} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page3.title}</Title>
            <SubTitle>
              Choisissez parmi les <span>{quantity} vins rouges Cellier</span>
              disponibles
            </SubTitle>
          </div>
          <MinMax min={min} max={max} />
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter((option) => option.attributes.category === "Red Wine")
              .map((option) => (
                <WineCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.tasteFr}
                  location={option.attributes.location}
                  country={option.attributes.country}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  red
                />
              ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={page3.return}
        returnHref={"/2"}
        buttonText={page3.buttonText}
        href={"/4"}
        selection={selection}
        stage={"BIÈRES EN FÛT"}
        handleClick={handleClick}
        disabled={counter < min}
      />
    </>
  );
};

export default Page3;
