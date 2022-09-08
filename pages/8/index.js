import React, { useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppContext } from "../../context/AppContext";
import Header from "../../components/Header";
import image from "../../public/close.svg";
import {
  Container,
  Container1,
  Subcontainer,
  Container3,
  Container2,
  StyledLink,
  CloseButton,
} from "./styled";
import { fetchCurrentUser, fetchAPI } from "../../lib/api";
import useUserID from "../../lib/useUserID";

const Page8 = () => {
  const {
    state,
    actions: { getMenuId },
  } = useContext(AppContext);
  const userID = useUserID();
  const router = useRouter();

  const handleClick = async () => {
    fetchAPI("/api/users-permissions/sendmemail")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/7");
  };

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
  const link = state.menuId
    ? `http://pdf.etco.tk/${state.menuId}`
    : `http://pdf.etco.tk/${1}`;
  return (
    <>
      <Header step={6} />
      <Container>
        <Container1>
          <Subcontainer>
            <iframe src={link} width="1240" height="1300"></iframe>
          </Subcontainer>
        </Container1>
      </Container>
      <Container2>
        <Container3>
          <StyledLink onClick={() => handleClick()} first>
            SOUMETTRE
          </StyledLink>

          <Link href={"/6"}>
            <CloseButton onClick={() => {}}>
              <Image src={image} width={25} height={25} alt="" />
            </CloseButton>
          </Link>
        </Container3>
      </Container2>
    </>
  );
};

export default Page8;
