import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import { page6 } from "../../fr";
import useUserID from "../../lib/useUserID";
import {
  Container,
  Subcontainer,
  Title,
  Subtitle,
  Body,
  Subcontainer1,
  Button,
} from "./styled";

const Page7 = () => {
  const userID = useUserID();

  const link = userID
    ? ` https://pdf.selections-sthubert.ca/preview/${userID}`
    : ` https://pdf.selections-sthubert.ca/preview/1`;
  return (
    <>
      <Header />
      <Container>
        <Subcontainer>
          <Title>{page6.title}</Title>
          <Subtitle>{page6.subtitle}</Subtitle>
          <Body>{page6.body1}</Body>
        </Subcontainer>
        {/* <Subcontainer1>
          <Button onClick={() => window.open(link)}>{page6.download}</Button>
        </Subcontainer1> */}
      </Container>
    </>
  );
};

export default Page7;
