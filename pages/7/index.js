import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
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

const Page7 = () => {
  /* const [userId, setUserId] = useState(1);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserId(user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

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

export default Page7;
