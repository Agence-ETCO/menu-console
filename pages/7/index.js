import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import { page6 } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
  Subtitle,
  Body,
  Subcontainer1,
  Button,
} from "./styled";

const Page6 = () => {
  const date = "le 30 septembre 2022";
  /* const user =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("user") || "{}"); */
  return (
    <>
      <Header />
      <Container>
        <Subcontainer>
          <Title>{page6.title}</Title>
          <Subtitle>{page6.subtitle}</Subtitle>
          <Body>{page6.body1}</Body>
        </Subcontainer>
        <Subcontainer1>
          <Button onClick={() => window.open(`http://pdf.etco.tk/${1}`)}>
            {page6.download}
          </Button>
        </Subcontainer1>
      </Container>
    </>
  );
};

export default Page6;
