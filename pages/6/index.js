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
  return (
    <>
      <Header />
      <Container>
        <Subcontainer>
          <Title>{page6.title}</Title>
          <Subtitle>{page6.subtitle}</Subtitle>
          <Body>{page6.body1}</Body>
          <Body>{page6.body2}</Body>
        </Subcontainer>
        <Subcontainer1>
          <Button>{page6.download}</Button>
        </Subcontainer1>
      </Container>
    </>
  );
};

export default Page6;
