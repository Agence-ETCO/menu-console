import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Lock from "../Lock";
import Lock1 from "../Lock1";
import CraftList from "../CraftList";
import CraftBeerCard3 from "../CraftBeerCard3";
import RectangleSmall from "../RectangleSmall";
import {
  Container,
  DropDownContainer,
  DropDownHeader,
  SubContainer,
  SubContainer1,
  SubContainer2,
  Header,
  Text,
  Text1,
  Container1,
  Container3,
} from "./styled";

const DropDown = ({ options, disabled, order }) => {
  const {
    state,
    actions: { addMicro01, addMicro02 },
  } = useContext(AppContext);

  const [beer, setBeer] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [showCraft, setShowCraft] = useState(false);
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
    setSelectedOption(null);
    const data = {
      description: beer,
      title: producer,
      type,
      size: format,
      alcohol,
    };
    if (order === "01") {
      addMicro01(data);
    } else {
      addMicro02(data);
    }
  };

  const handleClick1 = () => {
    if (disabled) {
      return;
    }
    setShowCraft(!showCraft);
  };

  const index1 =
    state.micro1 &&
    state.micro1.craftOptions &&
    state.micro1.craftOptions.price;

  const index2 =
    state.micro2 &&
    state.micro2.craftOptions &&
    state.micro2.craftOptions.price;

  const format1 = () => {
    if (index1 && !index1[1] && index1[0]) {
      if (state.micro1.attributes.cost[index1[0]].size.includes("20")) {
        return "20oz";
      } else {
        return "Pichet";
      }
    } else {
      return "20oz Pichet";
    }
  };

  const format2 = () => {
    if (index2 && !index2[1] && index2[0]) {
      if (state.micro2.attributes.cost[index2[0]].size.includes("20")) {
        return "20oz";
      } else {
        return "Pichet";
      }
    } else {
      return "20oz Pichet";
    }
  };

  return (
    <>
      <CraftList
        showCraft={showCraft}
        handleClick={handleClick1}
        order={order}
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

      <Container disabled={disabled}>
        <DropDownContainer>
          <Container3>
            <Text disabled={disabled} order={order}>
              {disabled ? (
                <>
                  <Lock />
                  {order === "01" ? (
                    <span>
                      {" "}
                      Sélectionnez au moins 1 référence Labatt pour débloquer un
                      choix de microbrasserie{" "}
                    </span>
                  ) : (
                    <span>
                      Vous devez sélectionner un autre produit Labatt pour
                      ajouter une 2e microbrasserie.
                    </span>
                  )}
                </>
              ) : (
                <>
                  <Lock1 />
                  {order === "01" ? (
                    <span>
                      Vous pouvez maintenent selectionner une microbrasserie de
                      votre choix
                    </span>
                  ) : (
                    <span>
                      Vous pouvez maintanent sélectionner une seconde
                      microbrasserie de votre choix
                    </span>
                  )}
                </>
              )}
            </Text>
            <Container1>
              <Text1 disabled={disabled}>{order}</Text1>
              {order === "01" &&
              state.micro1 &&
              (state.micro1.id || state.micro1.description) ? (
                <CraftBeerCard3
                  option={state.micro1}
                  order={order}
                  handleClick={handleClick1}
                />
              ) : order === "02" &&
                state.micro2 &&
                (state.micro2.id || state.micro2.description) ? (
                <CraftBeerCard3
                  option={state.micro2}
                  order={order}
                  handleClick={handleClick1}
                />
              ) : (
                <DropDownHeader disabled={disabled} onClick={handleClick1}>
                  {order === "01" && state.micro1 && state.micro1.title ? (
                    <div>
                      <SubContainer1>
                        <span>
                          {state.micro1.id
                            ? "Nom de la bière"
                            : state.micro1.title}
                        </span>
                        {state.micro1.id
                          ? state.micro1.attributes.title
                          : state.micro1.description}
                      </SubContainer1>
                      <SubContainer2>
                        <span>
                          {" "}
                          {state.micro1.id
                            ? state.micro1.attributes.descriptionFr
                            : state.micro1.type}
                        </span>{" "}
                        <span>
                          {state.micro1.id
                            ? format1()
                            : `${state.micro1.size}ml`}{" "}
                        </span>{" "}
                        <span>
                          {state.micro1.id
                            ? state.micro1.attributes.alcohol
                            : `${state.micro1.alcohol}%`}
                        </span>
                      </SubContainer2>
                    </div>
                  ) : order === "01" &&
                    state.micro1 &&
                    state.micro1.id && (
                      <CraftBeerCard2 option={state.micro1} />
                    ) ? (
                    order === "02" &&
                    state.micro2 &&
                    state.micro2.id && <div></div>
                  ) : order === "02" && state.micro2 && state.micro2.title ? (
                    <div>
                      <SubContainer1>
                        <span>
                          {" "}
                          {state.micro2.id
                            ? "Nom de la bière"
                            : state.micro2.title}
                        </span>
                        {state.micro2.id
                          ? state.micro2.attributes.title
                          : state.micro2.description}
                      </SubContainer1>
                      <SubContainer2>
                        <span>
                          {" "}
                          {state.micro2.id
                            ? state.micro2.attributes.descriptionFr
                            : state.micro2.type}
                        </span>{" "}
                        <span>
                          {state.micro2.id
                            ? format2()
                            : `${state.micro2.size}ml`}{" "}
                        </span>{" "}
                        <span>
                          {state.micro2.id
                            ? state.micro2.attributes.alcohol
                            : `${state.micro2.alcohol}%`}
                        </span>
                      </SubContainer2>
                    </div>
                  ) : (
                    <Header disabled={disabled}>{"Veuillez choisir"}</Header>
                  )}

                  <SubContainer>
                    <RectangleSmall />
                  </SubContainer>
                </DropDownHeader>
              )}
            </Container1>
          </Container3>
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropDown;
