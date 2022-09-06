import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard2 from "../../components/BeerCard2";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { putAPI, fetchAPI } from "../../lib/api";
import { beerList, page4, footer } from "../../fr";
import {
  Title1,
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
      addNonAlcohol,
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
  const min = 0;
  const max = 2;
  const options = [1, 2];
  const intialState = state.nonAlcohol.length > 0 ? state.nonAlcohol : [];
  const [selections, setSelections] = useState(intialState);
  const [updated, setUpdated] = useState(false);
  const [counter, setCounter] = useState(0);
  const userID = useUserID();

  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );

  const handleCheckboxChange = (option) => {
    let updatedSelections = [];
    let checked = selections.find((selection) => selection === option);
    let limit = max - selections.length - 1 >= 0;

    if (checked) {
      updatedSelections = selections.filter(
        (selection) => selection !== option
      );
    } else if (!checked && limit) {
      updatedSelections = [...selections, option];
    } else if (!checked && !limit) {
      updatedSelections = [...selections];
    }

    setSelections(updatedSelections);
    addNonAlcohol(updatedSelections);
    setUpdated(!updated);
  };

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
      fetchAPI(`/api/users/${userID}?populate=deep`)
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
          <Title>Bières non-alcoolisés </Title>
          <SubTitle>
            Choisissez jusqu’à 2 bières non-alcoolisées (optionnel).
          </SubTitle>
        </Container1>
        <MinMax stage={5} />
      </Subcontainer>
      <Container>
        <Subcontainer1>
          <div></div>
        </Subcontainer1>
        <Subcontainer2>
          {options.map((option, key) => (
            <BeerCard2
              key={`page5_option_${key}`}
              checked={!!selections.includes(option)}
              handleCheckboxChange={() => handleCheckboxChange(option)}
              value={option}
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
