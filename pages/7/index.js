import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import { page6 } from "../../fr";
import { fetchCurrentUser } from "../../lib/api";
import { AppContext } from "../../context/AppContext";
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
  const {
    state,
    actions: { getMenuId },
  } = useContext(AppContext);
  useEffect(() => {
    if (state.menuId === 0) {
      fetchCurrentUser()
        .then((res) => {
          if (res.franchisee_s_menu) {
            if (res.franchisee_s_menu.id) {
              getMenuId(res.franchisee_s_menu.id);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const link = state.menuId ? `http://pdf.etco.tk/${state.menuId}`:`http://pdf.etco.tk/${1}`
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
          <Button
            onClick={() => window.open(link)}
          >
            {page6.download}
          </Button>
        </Subcontainer1>
      </Container>
    </>
  );
};

export default Page7;
