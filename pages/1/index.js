import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import Rectangle from "../../components/Rectangle";
import { page1 } from "../../fr";
import { Container, Subcontainer, Title, Body, Date, Ending } from "./styled";

const Page1 = () => {
  return (
    <>
      <Header step={1} />
      <Container>
        <Rectangle />
        <Subcontainer>
          <Title>{page1.title}</Title>
          <Body>
            Au format <span style={{ fontWeight: "700" }}>8.5 x 11.5</span>, il
            permettra à vos clients de choisir facilement leurs boissons.
          </Body>
          <Body>{page1.body1}</Body>
          <Body>{page1.body2}</Body>
        </Subcontainer>
      </Container>

      <Footer buttonText={page1.buttonText} href={"/2"} />
    </>
  );
};

export default Page1;
