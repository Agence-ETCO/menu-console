import React, { useState, useContext } from "react";
import Image from "next/image";
import image from "../../public/close.svg";
import CraftBeerCard from "../../components/CraftBeerCard";
import Arrow from "../../components/Arrow";
import Form from "../../components/Form";
import { AppContext } from "../../context/AppContext";
import * as _ from "lodash";

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
  AddButton,
  ButtonContainer,

} from "./styled.js";
import MiniBeerCard from "../MiniBeerCard";

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
  console.log(props.order);
  const onFormSubmit = () => {
    const data = {
      beerMaker: producer,
      title: beer,
      type,
      size: format,
      alcohol,
      cost: [
        {
          Price: "11,75",
          size: "Glass 20 oz",
        },
        {
          Price: "29,00",
          size: "Pitcher",
        },
      ],
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

  const microSelections = state.selections.filter(
    (option) => option.attributes.category === "Craft Beer"
  );
  return (
    <>
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
      <>
        <Container2>
          {craftBeerOptions.filter(
      (option) => props.step ===12 ? microSelections[0].id !== option.id : true
    ).map((option, i) => (
            <MiniBeerCard
              index={i + 1}
              type={option.attributes.descriptionFr}
              key={option.id}
              value={option.id}
              title={option.attributes.title}
              alcohol={option.attributes.alcohol}
              description={option.attributes.descriptionFr}
              saqCode={option.attributes.saqCode}
              prices={option.attributes.cost}
              limit={props.limit}
              beerMaker={option.attributes.beerMaker}
              option={option}
              order={props.order}
            />

            // <CraftBeerCard
            //   key={`craftlist_${i}`}
            //   value={option}
            //   option={option}
            //   order={props.order}
            //   onChange={onChange}
            //   handleClick2={handleClick2}
            // />
          ))}
        </Container2>

        <Subtitle>
          Vous ne trouvez pas la bière de microbrasserie que vous souhaitez avoir à votre carte? Ajoutez-là ici.
        </Subtitle>
        {_.isEmpty(state.micro1) && (
          <AddButton
            onClick={() => handleClick()}>
            Ajouter
          </AddButton>
        )}
        <Container1>
          {_.isEmpty(state.micro1) == false && (
            <MiniBeerCard
              index={1}
              key={"01"}
              value={"01"}
              title={state.micro1.title}
              alcohol={state.micro1.alcohol}
              description={state.micro1.type}
              beerMaker={state.micro1.beerMaker}
              limit={props.limit}
              option={state.micro1}
            />
          )}
        </Container1>
      </>
    </>
  );
};

export default CraftList;
