import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BeerCard2 from "../../components/BeerCard2";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { putAPI, fetchAPI, fetchCurrentUser } from "../../lib/api";
import { footer, page6 } from "../../fr";
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
import { useRouter } from "next/router";

const Page6 = () => {
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
      receiveBeerSelections,
      isSubmitted,
      setIsSubmitted,
      addWineOptions
    },
  } = useContext(AppContext);
  const min = 0;
  const max = 1;
  const [counter, setCounter] = useState(0);
  const userID = useUserID();
  const router = useRouter();

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
    const craft1 = state.micro1.title ? state.micro1 : {};
    const craft2 = state.micro2.title ? state.micro2 : {};

    const menuItems = state.selections.map((option) => option.id);

    // const totalItems = [...menuItems, state.micro1.id, state.micro2.id].filter(
    //   (n) => n !== 999999002 || n !== 999999001
    // );
    const menuData = {
      menu_items: menuItems,
      franchisee: userID,
    };
    console.log('menuData', menuData);

    putAPI(`api/franchisees-menus/${state.menuId}?populate=deep`, menuData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const disabled = () => {
      return selections.filter(el => el.attributes && el.attributes.category === "Non-Alcoholic" ||
      el.category === "Non-Alcoholic").length < min  ;
    }

    useEffect(() => {
      if(isSubmitted) {
        router.push("/8");
      }
    }, [router]);


  useEffect(() => {
    if (state.selections.length === 0) {
      fetchCurrentUser()
        .then((res) => {
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);
          }
                    if (res.isSubmitted) {
            router.push("/8");
            setIsSubmitted(true);
          }
          if (res.franchisee_s_menu.id) {
            getMenuId(res.franchisee_s_menu.id);
          }
          receiveCraftOptions(res.franchisee_s_menu.craftOptions);

                   const wineOptions = res.franchisee_s_menu.craftOptions.wineOptions
          if ( wineOptions ) {
            Object.entries(wineOptions).forEach(([key, value]) => {
              addWineOptions(key, { "glass": value });
            });
          }  

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
    if (state.previousStep < 5) {
      addPreviousStep(5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const updatedCounter = selections.length;
    setCounter(updatedCounter);
  }, [selections]);

  return (
    <>
      <Header step={6} />
      <Subcontainer>
        <Container1>
          <Title>{page6.title} </Title>
          <SubTitle>
            {page6.subtitle}
          </SubTitle>
        </Container1>
        <MinMax min={min} max={max}  />
      </Subcontainer>
      <Container>
        <Subcontainer1>
          <div></div>
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter(
                (option) => option.attributes && option.attributes.category === "Non-Alcoholic" && option.attributes.isOptional == true
              )
              .map((option) => (
                <BeerCard2
                recommanded={option.id===1804}
                  key={option.id}
                  value={option.id}
                  title={option.attributes.titleFr}
                  alcohol={option.attributes.alcohol}
                  description={option.attributes.description}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  sugar={option.attributes.sugar}
                  limit={limit}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/5?keg="+state.selectedPack}
        buttonText={footer.buttonText}
        redirection={ true }
        href={"/7"}
        stage={page6.next}
        disabled={disabled()}
        handleClick={handleClick}
      />
    </>
  );
};

export default Page6;
