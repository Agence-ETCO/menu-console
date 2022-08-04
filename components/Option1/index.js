import BeerCard from "../../components/BeerCard";
import { option1 } from "../../fr";
import DropDown from "../DropDown";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  Select,
} from "./styled";

const Option1 = () => {
  const quantity = 10;
  const options = [
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
  ];
  return (
    <>
      <Container>
        <Subcontainer1>
          <div>
            <Title>{option1.title}</Title>
          </div>
          <Select>
            <span>{quantity}</span> {option1.select}
          </Select>
        </Subcontainer1>
        <Subcontainer2>
          <BeerCard />
          <BeerCard />
          <BeerCard />
        </Subcontainer2>
        <div>
          <Title>{option1.title2}</Title>
          <DropDown options={options} />
        </div>
      </Container>
    </>
  );
};

export default Option1;
