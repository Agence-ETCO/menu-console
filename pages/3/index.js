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
  const min = 4;
  const max = 8;
  const quantity = 12;
  const counter = 0;
  const selection = `Séléctionnez ${min - counter} vins pour continuer`;
  return (
    <>
      <Header step={3} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page3.title}</Title>
            <SubTitle>
              Veuillez sélectionner entre{" "}
              <span>
                {min} et {max} vins rouges.
              </span>
            </SubTitle>
          </div>
          <Select>
            <span>{quantity}</span> {page3.select}
          </Select>
        </Subcontainer1>
        <Subcontainer2>
          <WineCard />
          <WineCard />
          <WineCard />
        </Subcontainer2>
      </Container>

      <Footer
        secondButton
        buttonText1={page3.return}
        href1={"/2"}
        buttonText={page3.buttonText}
        href={"/4"}
        selection={selection}
      />
    </>
  );
};

export default Page3;
