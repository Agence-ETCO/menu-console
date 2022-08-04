import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OptionButton from "../../components/OptionButton";
import BeerList from "../../components/BeerList";
import { page4, footer } from "../../fr";
import {
  Container1,
  Container2,
  Subcontainer,
  OptionsContainer,
  Title,
  SubTitle,
} from "./styled";

const Page4 = () => {
  const min = 2;
  const counter = 0;
  const selection = `Séléctionnez ${min - counter} vins pour continuer`;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Header step={4} />
      <Container1>
        <Subcontainer>
          <Title>{page4.title}</Title>
          <SubTitle>{page4.subtitle}</SubTitle>
          <OptionsContainer>
            <OptionButton
              option="Option 1"
              description="1 Labatt + 1 de microbrasserie "
              checked={selectedOption === 1}
              handleCheckboxChange={() => setSelectedOption(1)}
            />
            <OptionButton
              option="Option 2"
              description="2 de microbrasserie"
              checked={selectedOption === 2}
              handleCheckboxChange={() => setSelectedOption(2)}
            />
          </OptionsContainer>
        </Subcontainer>
      </Container1>

      {selectedOption === 1 ? (
        <BeerList />
      ) : (
        <Container2>{page4.body}</Container2>
      )}
      <Footer
        secondButton
        buttonText1={footer.return}
        href1={"/3"}
        buttonText={footer.buttonText}
        href={"/5"}
        selection={selection}
      />
    </>
  );
};

export default Page4;
