import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import { page8 } from "../../fr";
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

const Page8 = () => {
  const userID = useUserID();
  const router = useRouter();

  useEffect(() => { 
    if (router.asPath === '/8/') {
      window.onpopstate = () => { 
        history.go(1);
      };
    }
  }, [router]);

  const link = userID
    ? ` https://pdf.selections-sthubert.ca/preview/${userID}`
    : ` https://pdf.selections-sthubert.ca/preview/1`;
  return (
    <>
      <Header />
      <Container>
        <Subcontainer>
          <Title>{page8.title}</Title>
          <Body>{page8.subtitle}</Body>
            <Body>{page8.body1}</Body>
            <Body>{page8.body2}</Body>
        </Subcontainer>
        {/* <Subcontainer1>
          <Button onClick={() => window.open(link)}>{page6.download}</Button>
        </Subcontainer1> */}
      </Container>
    </>
  );
};

export default Page8;
