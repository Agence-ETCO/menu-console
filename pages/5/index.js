import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard2 from "../../components/BeerCard2";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { putAPI, fetchAPI, fetchCurrentUser } from "../../lib/api";
import { footer } from "../../fr";
import {
  SubTitle,
  Subcontainer,
  Container,
  Subcontainer1,
  Subcontainer2,
  Container1,
  Title,
} from "./styled";
import useUserID from "../../lib/useUserID";

const Page5 = () => {
  const {
    state,
    actions: {
      getMenuId,
      receivePack,
      receiveSelections,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
      receiveData,
      addPreviousStep,
      addPack,
      removePack,
    },
  } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    fetchCurrentUser()
      .then((response) => {
        if (response.isSubmitted === true) {
          router.push("/9");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const min = 0;
  const max = 2;
  const [counter, setCounter] = useState(0);
  const userID = useUserID();

  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );

  const selections = state.selections.filter(
    (option) =>
      (option.attributes && option.attributes.category === "Non-Alcoholic") ||
      option.category === "Non-Alcoholic"
  );

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
    const craft1 = state.micro1.title ? state.micro1 : {};
    const craft2 = state.micro2.title ? state.micro2 : {};

    const menuItems = state.selections.map((option) => option.id);

    const totalItems = [...menuItems, state.micro1.id, state.micro2.id].filter(
      (n) => n !== undefined
    );
    const menuData = {
      menu_items: totalItems,
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
    if (state.previousStep < 4) {
      addPreviousStep(4);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const updatedCounter = selections.length;
    setCounter(updatedCounter);
  }, [selections]);

  return (
    <>
      <Header step={5} />
      <Subcontainer>
        <Container1>
          <Title>Bières non alcoolisées </Title>
          <SubTitle>
            Choisissez jusqu’à 2 bières non alcoolisées (optionnel).
          </SubTitle>
        </Container1>
        <MinMax stage={5} />
      </Subcontainer>
      <Container>
        <Subcontainer1>
          <div></div>
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter(
                (option) => option.attributes.category === "Non-Alcoholic"
              )
              .map((option) => (
                <BeerCard2
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  alcohol={option.attributes.alcohol}
                  description={option.attributes.description}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/4"}
        buttonText={footer.buttonText}
        href={"/6"}
        stage={"RÉSUMÉ"}
        selection={selection}
        handleClick={handleClick}
      />
    </>
  );
};

export default Page5;
