import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import BeerCard from "../../components/BeerCard";
import WineCard from "../../components/WineCard";
import AlertBox from "../../components/AlertBox";
import { AppContext } from "../../context/AppContext";
import { postAPI } from "../../lib/api";
import { page2, page3, beerList, option2, footer } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  Subcontainer1,
  Subtitle1,
  Title1,
} from "./styled";

const Page5 = () => {
  const {
    state,
    actions: { addPreviousStep },
  } = useContext(AppContext);
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [craftBeerId, setCraftBeerId] = useState([]);
  const [craftBeer, setCraftBeer] = useState([]);

  const step = 5;

  const handleClick = () => {
    setShowAlert(true);
  };

  const data = state.micro1.title && {
    title: state.micro1.title,
    description: state.micro1.description,
    beerOptions: "Microbrasserie",
    category: "Caesar",
    alcohol: state.micro1.alcohol,
    cost: [
      {
        Price: "",
        region: "",
        size: state.micro1.size,
      },
    ],
  };

  const data2 = state.micro2.title && {
    title: state.micro2.title,
    description: state.micro2.description,
    beerOptions: "Microbrasserie",
    category: "Caesar",
    alcohol: state.micro2.alcohol,
    cost: [
      {
        Price: "",
        region: "",
        size: state.micro2.size,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const menuItems = state.selections.map((option) => option.id);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYwNzQ1OTU1LCJleHAiOjE2NjA4MzIzNTV9.ZNKjMEObwi2-ETVOCIjSefrV16UH5fOfQhEndAYhqwg";

    if (state.micro1.title && !state.micro2.title) {
      postAPI("api/menu-items?populate=deep", token, data)
        .then((response) => {
          const menuData = {
            data: {
              menu_items: [...menuItems, response.data.id],
              franchisee: (state.userData.user && state.userData.user.id) || 4,
            },
          };
          return postAPI("api/franchisees-menus", token, menuData);
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!state.micro1.title && state.micro2.title) {
      postAPI("api/menu-items?populate=deep", token, data2)
        .then((response) => {
          const menuData = {
            data: {
              menu_items: [...menuItems, response.data.id],
              franchisee: (state.userData.user && state.userData.user.id) || 4,
            },
          };
          return postAPI("api/franchisees-menus", token, menuData);
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (state.micro1.title && state.micro2.title) {
      const id = "";
      postAPI("api/menu-items?populate=deep", token, data)
        .then((response) => {
          id = response.data.id;
          return postAPI("api/menu-items?populate=deep", token, data2);
        })
        .then((response) => {
          const menuData = {
            data: {
              menu_items: [...menuItems, id, response.data.id],
              franchisee: (state.userData.user && state.userData.user.id) || 4,
            },
          };
          return postAPI("api/franchisees-menus", token, menuData);
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!state.micro1.title && !state.micro2.title) {
      const menuData = {
        data: {
          menu_items:
            craftBeerId.length > 0
              ? [...menuItems, ...craftBeerId]
              : [...menuItems],
          franchisee: (state.userData.user && state.userData.user.id) || 4,
        },
      };
      postAPI("api/franchisees-menus", token, menuData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    router.push("/6");
  };

  const onCancel = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (state.micro1.id || state.micro1.title) {
      setCraftBeer([state.micro1]);
    }
    if (state.micro2.id || state.micro2.title) {
      setCraftBeer([...craftBeer, state.micro2]);
    }

    if (state.micro1.id) {
      setCraftBeerId([state.micro1.id]);
    }
    if (state.micro2.id) {
      setCraftBeerId([...craftBeerId, state.micro2.id]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.previousStep < 4) {
      addPreviousStep(4);
    }
  }, []);

  return (
    <>
      <AlertBox
        showAlert={showAlert}
        onCancel={onCancel}
        handleSubmit={handleSubmit}
      />
      <Header step={5} />
      <Container>
        <Subcontainer1>
          <Title1>Nous y sommes presque !</Title1>
          <Subtitle1>
            Voici votre sélection. Relisez vos choix avec attention !
          </Subtitle1>
          <Subtitle1>
            Une fois votre sélection soumise, vous ne pourrez plus la modifier.
          </Subtitle1>
        </Subcontainer1>
        <Title>{page2.title}</Title>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter((option) => option.attributes.category === "White Wine")
              .map((option, i) => (
                <WineCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.taste}
                  location={option.attributes.location}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))}
        </Subcontainer>
        <Title>{page3.title}</Title>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter((option) => option.attributes.category === "Red Wine")
              .map((option, i) => (
                <WineCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.taste}
                  location={option.attributes.location}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))}
        </Subcontainer>
        <Title>{beerList.title}</Title>
        <Subcontainer>
          {state.selections &&
            state.selections
              .filter((option) => option.attributes.category === "Beer")
              .map((option, i) => (
                <BeerCard
                  key={option.id}
                  value={option.id}
                  title={option.attributes.title}
                  description={option.attributes.description}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                  step={step}
                />
              ))}
        </Subcontainer>
        <Title>{option2.title}</Title>{" "}
        <Subcontainer>
          {craftBeer &&
            craftBeer.map((option, i) => (
              <BeerCard
                key={i}
                value={option.id}
                title={option.title}
                description={option.description}
                option={option}
                step={step}
              />
            ))}
        </Subcontainer>
        <Title1>Êtes-vous prêt à valider votre sélection?</Title1>
      </Container>

      <Footer
        returnButtonText={footer.change}
        returnHref={"/4"}
        viewButtonText={footer.view}
        submitButtonText={footer.submit}
        handleSubmit={handleClick}
      />
    </>
  );
};

export default Page5;
