import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import WineCard from "../../components/WineCard";
import { page2 } from "../../fr";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  SubTitle,
  Select,
} from "./styled";

const Page2 = () => {
  const min = 3;
  const max = 6;
  const quantity = 18;
  const counter = 0;
  const selection = `Séléctionnez ${min - counter} vins pour continuer`;
  return (
    <>
      <Header step={2} />
      <Container>
        <Subcontainer1>
          <div>
            <Title>{page2.title}</Title>
            <SubTitle>
              Veuillez sélectionner entre{" "}
              <span>
                ${min} et ${max} vins blanc.
              </span>
            </SubTitle>
          </div>
          <Select>
            <span>{quantity}</span> {page2.select}
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
        buttonText1={page2.return}
        href1={"/1"}
        buttonText={page2.buttonText}
        href={"/3"}
        selection={selection}
      />
    </>
  );
};

export default Page2;
