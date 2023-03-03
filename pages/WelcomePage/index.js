import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Help from "../../components/Help";
import { welcomePage } from "../../fr";
import { getUser } from "../../lib/store";
import { fetchAPI, fetchCurrentUser } from "../../lib/api";
import {
  Greeting,
  Title,
  Body,
  Body1,
  Date,
  DateLimit,
  Ending,
  Container,
  Subcontainer,
  Contact,
} from "./styled";

const WelcomePage = () => {
  const {
    state,
    actions: {
      receiveData,
      receiveSelections,
      receivePack,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
      getMenuId,
      receiveBeerSelections
    },
  } = useContext(AppContext);

  const [showHelp, setShowHelp] = useState(false);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUserUid(user.uid);
    }
  }, []);

  const handleClick = () => {
    setShowHelp(!showHelp);
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
          if (res.franchisee_s_menu.craftOptions.beers) {receiveBeerSelections(res.franchisee_s_menu.craftOptions.beers)}

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

  const date = "10 mars 2023";

  return (
    <>
      <Header step={-1} user={userUid} />
      <Container>
        <Help showHelp={showHelp} handleClick={handleClick} />
        <Greeting>
          {welcomePage.greeting}
        </Greeting>
        <Title>{welcomePage.title}</Title>
        <Body>{welcomePage.body}</Body>
        <Subcontainer>
          <DateLimit>{welcomePage.dateLimite}</DateLimit>
          <Body1>{welcomePage.body1}</Body1>
          <Date>{date}</Date>
          <Body1>{welcomePage.body2}</Body1>
          <Body>Merci de votre collaboration. </Body>
        </Subcontainer>
        <Ending>
          {welcomePage.help}
          &nbsp;
          <Contact onClick={() => handleClick()}>{welcomePage.contact}</Contact>
        </Ending>
      </Container>
      <Footer first startText={welcomePage.buttonText} href={"/1"}         redirection={ true } />
    </>
  );
};

export default WelcomePage;
 