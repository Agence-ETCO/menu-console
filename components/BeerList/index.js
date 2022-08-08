import { useEffect, useState } from "react";
import BeerCard from "../../components/BeerCard";
import { beerList } from "../../fr";
import DropDown from "../DropDown";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Subcontainer3,
  Title,
} from "./styled";

const BeerList = () => {
  const options = [
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
  ];

  const [first, setFirst] = useState(null);

  const [disabled, setDisabled] = useState(true);
  const [updated, setUpdated] = useState(false);
  const value =
    typeof window !== "undefined" &&
    JSON.stringify(localStorage.getItem("microbrasserie1"));

  const onOptionSelect = () => setUpdated(true);

  useEffect(() => {
    setFirst(value);
    if (updated && value !== null) {
      setDisabled(false);
    }
  }, [value]);

  return (
    <>
      <Container>
        <Subcontainer1>
          <div>
            <Title>
              {beerList.title} {first}
            </Title>
          </div>
        </Subcontainer1>
        <Subcontainer2>
          <BeerCard />
          <BeerCard />
          <BeerCard />
        </Subcontainer2>
        <Subcontainer3>
          <Title>{beerList.title2}</Title>
          <DropDown
            options={options}
            onOptionSelect={onOptionSelect}
            order="01"
          />
          <DropDown options={options} disabled={disabled} order="02" />
        </Subcontainer3>
      </Container>
    </>
  );
};

export default BeerList;
