import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import { page2 } from "../../fr";
/* import { fetchAPI } from "../../lib/api"; */
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
  Select,
} from "./styled";

const Page2 = () => {
  const min = 1;
  const [selections, setSelections] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [counter, setCounter] = useState(min);
  const options = [1, 2, 3, 4, 5, 6, 7];
  const max = 3;
  const quantity = 18;

  const selection = `Séléctionnez au minimum ${counter} vin pour continuer`;

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

    setUpdated(!updated);
    localStorage.setItem("white", JSON.stringify(updatedSelections));
  };

  useEffect(() => {
    localStorage.removeItem("white");
  }, []);

  useEffect(() => {
    const updatedCounter =
      min - selections.length > 0 ? min - selections.length : 0;
    setCounter(updatedCounter);
  }, [selections]);

  /* useEffect(() => {
    const token =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("token"));
    fetchAPI("/api/menu-items?populate=*", token)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  return (
    <>
      <Header step={2} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page2.title}</Title>
            <SubTitle>
              Veuillez sélectionner entre <span>{quantity} références</span>
              disponibles
            </SubTitle>
          </div>
          <Select>
            <span>
              Minimum {min} - Maximum {max}
            </span>{" "}
          </Select>
        </Subcontainer1>
        <Subcontainer2>
          {options.map((option, i) => (
            <WineCard
              key={i}
              checked={!!selections.includes(option)}
              handleCheckboxChange={() => handleCheckboxChange(option)}
              value={option}
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
        disabled={counter !== 0}
      />
    </>
  );
};

export default Page2;
