import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import { page6 } from "../../fr";
import {
  Container,
  Subcontainer,
  Title,
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
          <Body>{page6.body}</Body>
        </Subcontainer>
        <Subcontainer1>
          <Button>{page6.download}</Button>
          <Button>{page6.print}</Button>
          <Button>{page6.share}</Button>
        </Subcontainer1>
      </Container>
    </>
  );
};

export default Page6;
