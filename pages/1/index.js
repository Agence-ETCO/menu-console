import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Rectangle from "../../components/Rectangle";
import { page1 } from "../../fr";
import { Container, Subcontainer, Title, Body, Date, Ending } from "./styled";

const Page1 = () => {
  const date = "le 30 septembre 2022";
  return (
    <>
      <Header step={1} />
      <Container>
        <Rectangle />
        <Subcontainer>
          <Title>{page1.title}</Title>
          <Body>{page1.body}</Body>
          <Body>
            {page1.date} <span>{date}</span>
          </Body>
        </Subcontainer>
      </Container>

      <Footer buttonText={page1.buttonText} href={"/2"} />
    </>
  );
};

export default Page1;
