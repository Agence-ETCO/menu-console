import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import image from "../../public/close.svg";
import CraftBeerCard from "../../components/CraftBeerCard";
import Arrow from "../../components/Arrow";
import Form from "../../components/Form";
import { AppContext } from "../../context/AppContext";
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
  const {
    state,
    actions: { addMicro01, addMicro02 },
  } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  const [beer, setBeer] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [alcohol, setAlcohol] = useState("");

  const onBeerChange = (e) => setBeer(e.target.value);
  const onProducerChange = (e) => setProducer(e.target.value);
  const onTypeChange = (e) => setType(e.target.value);
  const onFormatChange = (e) => {
    const value = e.target.value
      .replace(/[^0-9,]/g, "")
      .replace(/(,.*?),(.*,)?/, "$1");
    setFormat(value);
  };
  const onAlcoholChange = (e) => {
    const value = e.target.value
      .replace(/[^0-9,]/g, "")
      .replace(/(,.*?),(.*,)?/, "$1");
    setAlcohol(value);
  };
  const onFormSubmit = () => {
    const data = {
      description: beer,
      title: producer,
      type,
      size: format,
      alcohol,
    };
    if (props.order === "01") {
      addMicro01(data);
    } else {
      addMicro02(data);
    }
  };

  const options = [
    {
      id: 25,
      attributes: {
        title: "Lagabière",
        isOrganic: true,
        isFromQuebec: true,
        taste: "",
        description: "",
        saqCode: "",
        beerOptions: "",
        category: "Craft Beer",
        location: "",
        alcohol: "",
        imageURL: "",
        titleFr: "Lagabière",
        tasteFr: "",
        descriptionFr: "",
        locationFr: "",
        country: "",
        countryFr: "",
        sugar: "",
        createdAt: "2022-08-11T17:17:49.565Z",
        updatedAt: "2022-08-11T17:44:09.716Z",
        cost: [
          {
            id: 388,
            Price: "29,00",
            region: "QC1",
            size: "Pitcher",
          },
          {
            id: 387,
            Price: "11,75",
            region: "QC1",
            size: "Glass 20 oz",
          },
          {
            id: 386,
            Price: "9,50",
            region: "QC1",
            size: "Glass 10 oz",
          },
        ],
      },
    },
    {
      id: 26,
      attributes: {
        title: "Lagabière",
        isOrganic: true,
        isFromQuebec: true,
        taste: "",
        description: "",
        saqCode: "",
        beerOptions: "",
        category: "Craft Beer",
        location: "",
        alcohol: "",
        imageURL: "",
        titleFr: "Lagabière",
        tasteFr: "",
        descriptionFr: "",
        locationFr: "",
        country: "",
        countryFr: "",
        sugar: "",
        createdAt: "2022-08-11T17:17:49.565Z",
        updatedAt: "2022-08-11T17:44:09.716Z",
        cost: [
          {
            id: 388,
            Price: "29,00",
            region: "QC1",
            size: "Pitcher",
          },
          {
            id: 387,
            Price: "11,75",
            region: "QC1",
            size: "Glass 20 oz",
          },
          {
            id: 386,
            Price: "9,50",
            region: "QC1",
            size: "Glass 10 oz",
          },
        ],
      },
    },
    {
      id: 27,
      attributes: {
        title: "Lagabière",
        isOrganic: true,
        isFromQuebec: true,
        taste: "",
        description: "",
        saqCode: "",
        beerOptions: "",
        category: "Craft Beer",
        location: "",
        alcohol: "",
        imageURL: "",
        titleFr: "Lagabière",
        tasteFr: "",
        descriptionFr: "",
        locationFr: "",
        country: "",
        countryFr: "",
        sugar: "",
        createdAt: "2022-08-11T17:17:49.565Z",
        updatedAt: "2022-08-11T17:44:09.716Z",
        cost: [
          {
            id: 388,
            Price: "29,00",
            region: "QC1",
            size: "Pitcher",
          },
          {
            id: 387,
            Price: "11,75",
            region: "QC1",
            size: "Glass 20 oz",
          },
          {
            id: 386,
            Price: "9,50",
            region: "QC1",
            size: "Glass 10 oz",
          },
        ],
      },
    },
  ];
  /* const options = ["01", "02", "03", "04", "05", "06"]; */
  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {props.showCraft ? (
        <Container>
          <Form
            showForm={showForm}
            handleClick={handleClick}
            order={props.order}
            beer={beer}
            producer={producer}
            type={type}
            format={format}
            alcohol={alcohol}
            onBeerChange={onBeerChange}
            onProducerChange={onProducerChange}
            onTypeChange={onTypeChange}
            onFormatChange={onFormatChange}
            onAlcoholChange={onAlcoholChange}
            onFormSubmit={onFormSubmit}
          />
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
                <CraftBeerCard
                  key={i}
                  value={option}
                  option={option}
                  order={props.order}
                />
              ))}
            </Container2>
            <ButtonContainer>
              <Button
                /* disabled={state.micro1.id || state.micro2.id} */ onClick={
                  props.handleClick
                }
              >
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
