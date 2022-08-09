import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import { page3 } from "../../fr";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
  Select,
} from "./styled";

const Page3 = () => {
  const min = 3;
  const [selections, setSelections] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [counter, setCounter] = useState(min);
  const options = [1, 2, 3, 4, 5, 6, 7];
  const max = 6;
  const quantity = 12;
  const selection = (
    <span style={{ fontSize: "21px" }}>
      {counter}/{min}
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

    setUpdated(!updated);
    localStorage.setItem("red", JSON.stringify(updatedSelections));
  };

  useEffect(() => {
    localStorage.removeItem("red");
  }, []);

  useEffect(() => {
    const updatedCounter = selections.length <= min ? selections.length : min;
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
              Veuillez sélectionner entre <span>{quantity} références</span>
              disponibles
            </SubTitle>
          </div>
          <Select>
            Minimum {min} - Maximum {max}
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
        returnButtonText={page3.return}
        returnHref={"/2"}
        buttonText={page3.buttonText}
        href={"/4"}
        selection={selection}
        disabled={counter !== min}
      />
    </>
  );
};

export default Page3;
