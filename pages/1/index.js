import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import image from "../../public/couverture.png";
import { page1, page2 } from "../../fr";
import {
  Container,
  Container1,
  Subcontainer,
  Title,
  Body,
  ImageContainer,
} from "./styled";

const Page1 = () => {
  return (
    <>
      <Header step={1} />
      <Container>
        <Container1>
          <ImageContainer>
            <Image src={image} width={300} height={450} alt="" />
          </ImageContainer>
          <Subcontainer>
            <Title>{page1.title}</Title>
            <Body>{page1.body1}</Body>
            <Body>{page1.body2}</Body>
          </Subcontainer>
        </Container1>
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
