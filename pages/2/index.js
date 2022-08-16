import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import MinMax from "../../components/MinMax";
import { AppContext } from "../../context/AppContext";
import { page2 } from "../../fr";
import { fetchAPI } from "../../lib/api";
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
    actions: { receiveData, addPreviousStep },
  } = useContext(AppContext);

  const min = 1;
  const [counter, setCounter] = useState(min);
  const max = 3;
  const quantity = 18;
  const selections = state.selections.filter(
    (option) => option.attributes.category === "White Wine"
  );
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{max}
    </span>
  );
  const limit = max - selections.length - 1 >= 0;

  useEffect(() => {
    if (state.previousStep < 1) {
      addPreviousStep(1);
    }
  }, []);

  useEffect(() => {
    const updatedCounter = selections.length;
    setCounter(updatedCounter);
  }, [selections]);

  useEffect(() => {
    const token = "";
    fetchAPI("/api/menu-items?populate=deep", token)
      .then((res) => {
        receiveData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header step={2} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page2.title} </Title>
            <SubTitle>
              Choisissez parmi les <span>{quantity} produits</span>
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
                  title={option.attributes.title}
                  description={option.attributes.description}
                  taste={option.attributes.taste}
                  location={option.attributes.location}
                  sugar={option.attributes.sugar}
                  saqCode={option.attributes.saqCode}
                  prices={option.attributes.cost}
                  limit={limit}
                  option={option}
                  imageUrl={option.attributes.imageURL}
                />
              ))}
        </Subcontainer2>
      </Container>

      <Footer
        returnButtonText={page2.return}
        returnHref={"/1"}
        buttonText={page2.buttonText}
        href={"/3"}
        selection={selection}
        stage={"VINS ROUGES"}
        disabled={counter < min}
      />
    </>
  );
};

export default Page2;
