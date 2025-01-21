import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { page3, footer } from "../../fr";
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
import { useRouter } from "next/router";

const Page3 = () => {
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
      receiveBeerSelections,
      isSubmitted,
      setIsSubmitted,
      addWineOptions
    },
  } = useContext(AppContext);
  const router = useRouter();

  const min = 1;
  const [counter, setCounter] = useState(0);
  const [userId, setUserId] = useState(null);

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
    const user = getUser();
    if (user) {
      setUserId(user.id);
    }
  }, []);

  const handleClick = async () => {
    const menuItems = state.selections.map((option) => option.id);
    const menuData = {
      menu_items: [...menuItems],
      craftOptions: {
        wineOptions: state.wineOptions,
      },
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

          if (res.franchisee_s_menu.craftOptions.wineOptions ) {
            res.franchisee_s_menu.craftOptions.wineOptions.forEach(element => {
              addWineOptions(element);
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
      <Header step={3} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page3.title} </Title>
            <SubTitle>
              {page3.body}
            </SubTitle>
          </div>
          <MinMax min={min} max={max} />
        </Subcontainer1>
        <Subcontainer2>
          {state.data &&
            state.data
              .filter((option) => option.attributes.category === "White Wine" && option.attributes.isOptional == true )
              .map((option, key) => (
                <WineCard
                  key={`page3_option_${key}`}
                  value={option.id}
                  title={option.attributes.title || option.tile}
                  description={
                    option.attributes.descriptionFr || option.descriptionFr
                  }
                  taste={option.attributes.tasteFr || option.tasteFr}
                  location={option.attributes.locationFr || option.locationFr}
                  country={option.attributes.countryFr || option.countryFr}
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
                  showGlassOption = {true}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Legend/>

      <Footer
        returnButtonText={footer.return}
        returnHref={"/2"}
        buttonText={page3.buttonText}
        handleClick={handleClick}
        redirection={ true }
        href={"/4"}
        stage={page3.next}
        disabled={counter < min}
      />
    </>
  );
};

export default Page3;
