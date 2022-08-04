import BeerCard from "../../components/BeerCard";
import { beerList } from "../../fr";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  Select,
} from "./styled";

const BeerList = () => {
  const min = 4;
  const max = 8;
  const quantity = 10;

  return (
    <>
      <Container>
        <Subcontainer1>
          <div>
            <Title>{beerList.title}</Title>
          </div>
          <Select>
            <span>{quantity}</span> {beerList.select}
          </Select>
        </Subcontainer1>
        <Subcontainer2>
          <BeerCard />
          <BeerCard />
          <BeerCard />
        </Subcontainer2>
      </Container>
    </>
  );
};

export default BeerList;
