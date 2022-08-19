import React, { useEffect, useState, useRef, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Lock from "../Lock";
import Lock1 from "../Lock1";
import Form from "../Form";
import CheckMark from "../CheckMark.js";
import CraftList from "../CraftList";
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

const DropDown = ({ options, disabled, order }) => {
  const {
    state,
    actions: { addMicro01, addMicro02 },
  } = useContext(AppContext);

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const [showForm, setShowForm] = useState(false);
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
  const isSelected = (option) => {
    if (
      (state.micro1.id && state.micro1.id === option.id) ||
      (state.micro2.id && state.micro2.id === option.id)
    ) {
      return true;
    }
    return false;
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
    setShowCraft(!showCraft);
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };
  const toggling = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const onOptionClick = (value) => {
    if (isSelected(value)) {
      return null;
    }
    setIsOpen(false);

    setSelectedOption(value);

    if (order === "01") {
      addMicro01(value);
    } else {
      addMicro02(value);
    }
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
      <CraftList
        showCraft={showCraft}
        handleClick={handleClick1}
        /* onCancel={onCancel}
        handleSubmit={handleSubmit} */
      />
      <Form
        showForm={showForm}
        handleClick={handleClick}
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
              <DropDownHeader
                disabled={disabled}
                onClick={handleClick1}
                ref={ref}
              >
                {/*   {(selectedOption && selectedOption.id) || beer ? (
                  <div>
                    <SubContainer1>
                      <span>
                        {selectedOption && selectedOption.id
                          ? "Nom de la bière"
                          : beer}
                      </span>
                      {selectedOption && selectedOption.id
                        ? selectedOption.attributes.title
                        : producer}
                    </SubContainer1>
                    <SubContainer2>
                      <span>
                        {" "}
                        {selectedOption && selectedOption.id ? "Blonde" : type}
                      </span>{" "}
                      <span>
                        {selectedOption && selectedOption.id ? "341ml" : format}{" "}
                      </span>{" "}
                      <span>
                        {selectedOption && selectedOption.id ? "4.5%" : alcohol}
                      </span>
                    </SubContainer2>
                  </div>
                ) : ( */}
                <Header disabled={disabled}>{"Veuillez choisir"}</Header>
                {/*  )} */}

                <SubContainer>
                  <RectangleSmall />
                </SubContainer>
              </DropDownHeader>
            </Container1>
          </Container3>
          {/*   {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map((option) => (
                  <ListItem
                    onClick={() => onOptionClick(option)}
                    key={Math.random()}
                    checked={isSelected(option)}
                  >
                    <SubContainer1>
                      {isSelected(option) && (
                        <SubContainer3>
                          <CheckboxContainer>
                            <CheckMark />
                            <StyledCheckbox></StyledCheckbox>
                          </CheckboxContainer>
                        </SubContainer3>
                      )}
                      <span>{option.attributes.title}</span>
                      
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
          )} */}
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropDown;
