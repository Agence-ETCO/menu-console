import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import BeerCard from "../../components/BeerCard";
import WineCard from "../../components/WineCard";
import AlertBox from "../../components/AlertBox";
import { page2, page3, beerList, option2, footer } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  Subcontainer1,
  Subtitle1,
  Title1,
} from "./styled";

const Page5 = () => {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [white, setWhite] = useState(null);
  const [red, setRed] = useState(null);
  const [beer, setBeer] = useState(null);
  const [micro, setMicro] = useState(null);
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

  const value1 =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("white"));

  const value2 =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("red"));

  const value3 =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("beer"));

  const value4 =
    typeof window !== "undefined" && localStorage.getItem("microbrasserie01");

  const value5 =
    typeof window !== "undefined" && localStorage.getItem("microbrasserie02");

  useEffect(() => {
    setWhite(value1);
    setRed(value2);
    setBeer(value3);
    if (value4 !== null) {
      setMicro([1]);
    }
    if (value5 !== null) {
      setMicro([1, 2]);
    }
  }, []);
  return (
    <>
      <AlertBox
        showAlert={showAlert}
        onCancel={onCancel}
        handleSubmit={handleSubmit}
      />
      <Header step={5} />
      <Container>
        <Subcontainer1>
          <Title1>Nous y sommes presque !</Title1>
          <Subtitle1>
            Voici votre sélection. Relisez vos choix avec attention !
          </Subtitle1>
          <Subtitle1>
            Une fois votre sélection soumise, vous ne pourrez plus la modifier.
            Assurez-vous de bien relire vos choix.
          </Subtitle1>
        </Subcontainer1>
        <Title>{page2.title}</Title>
        <Subcontainer>
          {white &&
            white.length > 0 &&
            white.map((option, i) => (
              <WineCard
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))}
        </Subcontainer>
        <Title>{page3.title}</Title>
        <Subcontainer>
          {red &&
            red.length > 0 &&
            red.map((option, i) => (
              <WineCard
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))}
        </Subcontainer>
        <Title>{beerList.title}</Title>
        <Subcontainer>
          {beer &&
            beer.length > 0 &&
            beer.map((option, i) => (
              <BeerCard
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))}
        </Subcontainer>
        <Title>{option2.title}</Title>{" "}
        <Subcontainer>
          {micro &&
            micro.length > 0 &&
            micro.map((option, i) => (
              <BeerCard
                key={i}
                checked
                handleCheckboxChange={() => {}}
                value={option}
              />
            ))}
        </Subcontainer>
        <Title1>Êtes-vous sûr de votre sélection ?</Title1>
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
