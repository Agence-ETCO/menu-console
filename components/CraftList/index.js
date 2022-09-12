import React, { useState, useContext } from "react";
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
  Container3,
  Button,
  ButtonContainer,
} from "./styled.js";

const CraftList = (props) => {
  const {
    state,
    actions: { addMicro01, addMicro02, removeSelection },
  } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  const [beer, setBeer] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [selected, setSelected] = useState(false);

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
      description: producer,
      title: beer,
      type,
      size: format,
      alcohol,
    };
    if (props.order === "01") {
      if (state.micro1 && state.micro1.id) {
        removeSelection(state.micro1.id);
      }
      addMicro01(data);
      onChange(true);
    } else {
      if (state.micro2 && state.micro2.id) {
        removeSelection(state.micro2.id);
      }
      addMicro02(data);
      onChange(true);
    }
  };

  const onChange = (value) => {
    setSelected(value);
  };

  const craftBeerOptions = state.data.filter(
    (option) => option.attributes.category === "Craft Beer"
  );

  const handleClick = () => {
    setShowForm(!showForm);
  };
  const handleClick2 = (oprion) => {
    removeMicro01();
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
                <Title>{"Microbrasseries"}</Title>
                <Subtitle>
                  {
                    "Sélectionnez les bières de microbrasseries que vous souhaitez avoir au menu ainsi que les formats."
                  }
                </Subtitle>
              </div>
              <Container3>
                <span>
                  {
                    " Vous ne trouvez pas votre microbrasserie parmi les choix ci-dessous?"
                  }
                </span>
                <StyledButton onClick={handleClick}>
                  <span>{"Ajoutez-là ici"}</span>
                </StyledButton>
              </Container3>
            </Container1>
            <Container2>
              {craftBeerOptions.map((option, i) => (
                <CraftBeerCard
                  key={`craftlist_${i}`}
                  value={option}
                  option={option}
                  order={props.order}
                  onChange={onChange}
                  handleClick2={handleClick2}
                />
              ))}
            </Container2>
            <ButtonContainer>
              <Button disabled={!selected} onClick={props.handleClick}>
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
