import Header from "../../components/Header";
import { welcomePage, page6 } from "../../fr";
import { Container, Subcontainer, Title, Body } from "./styled";

const Page6 = () => {
  return (
    <>
      <Header />
      <Container>
        <Subcontainer>
          <Title>Votre sélection a déjà été envoyée !</Title>
          <Body>
            Nous avons bien reçu vos choix et allons préparer votre menu pour
            l’impression.
          </Body>
          <Body>
            {welcomePage.help}
            &nbsp;
            <a href="mailto:info@st-hubert.com">
              <span>{welcomePage.contact}</span>
            </a>
          </Body>
        </Subcontainer>
      </Container>
    </>
  );
};

export default Page6;
