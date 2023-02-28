import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import { AppContext } from "../../context/AppContext";
import { page2, footer } from "../../fr";
import { putAPI, fetchAPI, fetchCurrentUser } from "../../lib/api";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
} from "./styled";
import { getUser } from "../../lib/store";
import Legend from "../../components/Legend";
import HintBox from "../../components/HintBox";

const Page2 = () => {
  const {
    state,
    actions: {
      receiveData,
      receiveSelections,
      addPreviousStep,
      receivePack,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
      getMenuId,
    },
  } = useContext(AppContext);

  const min = 0;
  const [counter, setCounter] = useState(0);
  const [userId, setUserId] = useState(null);

  const max = 2;
  const quantity = 2;
  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "SPARKLING, ROSÉ AND ORANGE WINES") ||
      option.category === "SPARKLING, ROSÉ AND ORANGE WINES"
  );
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );
  const limit = max - selections.length - 1 >= 0;

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUserId(user.id);
    }
  }, []);

  const handleClick = async () => {
    const menuItems = state.selections.map((option) => option.id);
    const menuData = {
      menu_items: [...menuItems],
      franchisee: userId,
    };

    putAPI(`api/franchisees-menus/${state.menuId}?populate=deep`, menuData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  
  return (
    <>
      <Header step={2} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page2.title} </Title>
            <SubTitle>
              {page2.body}
            </SubTitle>
          </div>
          <HintBox text={page2.hintbox} />
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter((option) => option.attributes.category === "SPARKLING, ROSÉ AND ORANGE WINES")
              .map((option, key) => (
                <WineCard
                  key={`page2_option_${key}`}
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
                  isOrganic={option.attributes.isOrganic || option.isOrganic}
                  isFromQuebec={
                    option.attributes.isFromQuebec || option.isFromQuebec
                  }
                  isNature={option.attributes.isNature || option.isNature}
                  isOrange={option.attributes.isOrange || option.isOrange}
                  isCellier={option.attributes.isCellier || option.isCellier}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Legend/>
      
      <Footer
        returnButtonText={footer.return}
        returnHref={"/1"}
        buttonText={page2.buttonText}
        handleClick={handleClick}
        redirection={ true }
        href={"/3"}
        stage={page2.next}
        disabled={counter < min}
      />
    </>
  );
};

export default Page2;
