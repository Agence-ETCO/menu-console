import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import image from "../../public/close.svg";
import CraftBeerCard from "../../components/CraftBeerCard";
import Arrow from "../../components/Arrow";
import Form from "../../components/Form";
import {
  Container,
  BoxContainer,
  CloseButton,
  StyledButton,
  Title,
  Subtitle,
  Container1,
  Container2,
  Button,
  ButtonContainer,
} from "./styled.js";

const CraftList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const options = ["01", "02", "03", "04", "05", "06"];
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      {props.showCraft ? (
        <Container>
          <Form showForm={showForm} handleClick={handleClick} />
          <BoxContainer>
            <CloseButton onClick={props.handleClick}>
              <Image src={image} width={25} height={25} alt="" />
            </CloseButton>
            <Container1>
              <div>
                <Title>{"Titre"}</Title>
                <Subtitle>
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  }
                </Subtitle>
              </div>
              <StyledButton onClick={handleClick}>
                <Arrow />
                <span>{"Ajouter votre microbrasserie"}</span>
              </StyledButton>
            </Container1>
            <Container2>
              {options.map((option, i) => (
                <CraftBeerCard key={i} value={option} option={option} />
              ))}
            </Container2>
            <ButtonContainer>
              <Button /* disabled={disabled} */ onClick={() => handleSubmit()}>
                {"ajouter"}
              </Button>
            </ButtonContainer>
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default CraftList;
