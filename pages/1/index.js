import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import image from "../../public/Menu.png";
import { page1, page2 } from "../../fr";
import { Container, Subcontainer, Title, Body, ImageContainer } from "./styled";

const Page1 = () => {
  return (
    <>
      <Header step={1} />
      <Container>
        <ImageContainer>
          <Image src={image} width={300} height={450} alt="" />
        </ImageContainer>
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

      <Footer
        returnButtonText={page2.return}
        returnHref={"/"}
        buttonText={page1.buttonText}
        href={"/2"}
        stage={"VINS BLANCS"}
      />
    </>
  );
};

export default Page1;
