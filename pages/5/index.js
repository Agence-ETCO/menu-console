import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import BeerCard from "../../components/BeerCard";
import WineCard from "../../components/WineCard";
import AlertBox from "../../components/AlertBox";
import { page2, page3, page4, option1, option2, footer } from "../../fr";
import { Container, Subcontainer, Title } from "./styled";

const Page5 = () => {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/6");
  };

  const onCancel = () => {
    setShowAlert(false);
  };

  return (
    <>
      <AlertBox
        showAlert={showAlert}
        onCancel={onCancel}
        handleSubmit={handleSubmit}
      />
      <Header step={5} />
      <Container>
        <Title>{page2.title}</Title>
        <Subcontainer>
          <WineCard checked />
          <WineCard />
          <WineCard />
        </Subcontainer>
        <Title>{page3.title}</Title>
        <Subcontainer>
          <WineCard checked />
          <WineCard />
          <WineCard />
        </Subcontainer>
        <Title>{page4.title}</Title>
        <Subcontainer>
          <BeerCard checked />
          <BeerCard />
          <BeerCard />
        </Subcontainer>
        <Title>{option1.title}</Title>
        <Subcontainer>
          <BeerCard checked />
          <BeerCard />
          <BeerCard />
        </Subcontainer>
        <Title>{option2.title}</Title>{" "}
        <Subcontainer>
          <BeerCard checked />
          <BeerCard />
          <BeerCard />
        </Subcontainer>
      </Container>

      <Footer
        returnButtonText={page3.return}
        returnHref={"/4"}
        viewButtonText={footer.view}
        submitButtonText={footer.submit}
        handleSubmit={handleClick}
      />
    </>
  );
};

export default Page5;
