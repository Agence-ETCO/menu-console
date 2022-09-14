import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { putAPI, fetchAPI, fetchCurrentUser } from "../../lib/api";
import WineCard from "../../components/WineCard";
import { page3 } from "../../fr";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
} from "./styled";
import useUserID from "../../lib/useUserID";

const Page3 = () => {
  const {
    state,
    actions: {
      receiveData,
      receiveSelections,
      addPreviousStep,
      getMenuId,
      addPack,
      removePack,
      receivePack,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
    },
  } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isSubmitted")) {
      router.push("/9");
    }
  }, []);

  const min = 3;
  const [counter, setCounter] = useState(0);
  const userID = useUserID();

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

  const handleClick = async () => {
    const menuItems = state.selections.map((option) => option.id);
    const menuData = {
      menu_items: [...menuItems],
      franchisee: userID,
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
              offerts
            </SubTitle>
          </div>
          <MinMax min={min} max={max} />
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter((option) => option.attributes.category === "Red Wine")
              .map((option, key) => (
                <WineCard
                  key={`page3_option_${key}`}
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
