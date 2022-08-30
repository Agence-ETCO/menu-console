import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

const Page8 = () => {
  /*  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserId(user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <>
      <Header step={6} />
      <Container>
        <Container1>
          <Subcontainer>
            <iframe
              src={`http://pdf.etco.tk/${1}`}
              width="1240"
              height="1300"
            ></iframe>
          </Subcontainer>
        </Container1>
      </Container>
      <Container2>
        <Container3>
          <Link href={"/7"}>
            <StyledLink first>SOUMETTRE</StyledLink>
          </Link>
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
