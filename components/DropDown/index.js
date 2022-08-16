import React, { useEffect, useState, useRef } from "react";
import Lock from "../Lock";
import Lock1 from "../Lock1";
import Form from "../Form";
import CheckMark from "../CheckMark.js";
import RectangleSmall from "../RectangleSmall";
import {
  Container,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  SubContainer,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  Header,
  Button,
  Text,
  Text1,
  Container1,
  Container3,
  CheckboxContainer,
  StyledCheckbox,
} from "./styled";

const DropDown = ({ options, disabled, order, count }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [beer, setBeer] = useState(null);
  const [producer, setProducer] = useState(null);
  const [type, setType] = useState(null);
  const [format, setFormat] = useState(null);
  const [alcohol, setAlcohol] = useState(null);

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
  const onFormSubmit = () => setSelectedOption(null);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  const toggling = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const onOptionClick = (value) => {
    setIsOpen(false);
    setSelectedOption(value);
    localStorage.setItem(`microbrasserie${order}`, value);
  };

  useEffect(() => {
    const closeDropDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropDown);

    return () => {
      document.removeEventListener("click", closeDropDown);
    };
  }, []);

  return (
    <>
      <Form
        showForm={showForm}
        handleClick={handleClick}
        order={order}
        count={count}
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
              <DropDownHeader disabled={disabled} onClick={toggling} ref={ref}>
                {selectedOption || beer ? (
                  <div>
                    <SubContainer1>
                      <span>{beer || "Nom de la bière"}</span>
                      {selectedOption ? selectedOption : producer}
                    </SubContainer1>
                    <SubContainer2>
                      <span> {selectedOption ? "Blonde" : type}</span>{" "}
                      <span>{selectedOption ? "341ml" : format} </span>{" "}
                      <span>{selectedOption ? "4.5%" : alcohol}</span>
                    </SubContainer2>
                  </div>
                ) : (
                  <Header disabled={disabled}>{"Veuillez choisir"}</Header>
                )}

                <SubContainer>
                  <RectangleSmall />
                </SubContainer>
              </DropDownHeader>
            </Container1>
          </Container3>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map((option) => (
                  <ListItem
                    onClick={() => onOptionClick(option)}
                    key={Math.random()}
                    checked={option === selectedOption}
                  >
                    <SubContainer1>
                      {option === selectedOption && (
                        <SubContainer3>
                          <CheckboxContainer>
                            <CheckMark />
                            <StyledCheckbox></StyledCheckbox>
                          </CheckboxContainer>
                        </SubContainer3>
                      )}
                      <span>{"Nom de la bière"}</span>
                      {option}
                    </SubContainer1>
                    <SubContainer2>
                      <span> {"Blonde"}</span> <span>{"341ml"} </span>{" "}
                      <span>{"4.5%"}</span>
                    </SubContainer2>
                  </ListItem>
                ))}
              </DropDownList>
              <Button onClick={handleClick}>
                {"Ajouter votre microbrasserie"}
              </Button>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropDown;
