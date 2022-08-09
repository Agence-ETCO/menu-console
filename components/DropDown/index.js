import { useEffect, useState, useRef } from "react";
import Lock from "../Lock";
import Lock1 from "../Lock1";
import Form from "../Form";
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
  Header,
  Button,
  Text,
  Text1,
  Container1,
  Container3,
} from "./styled";

const DropDown = ({ options, disabled, order, onOptionSelect, count }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showForm, setShowForm] = useState(false);
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
    count();
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
      />
      <Container disabled={disabled}>
        <DropDownContainer>
          <Container3>
            <Text disabled={disabled}>
              {disabled ? (
                <>
                  <Lock />
                  <span>
                    Vous devez sélectionner un autre produit Labatt pour ajouter
                    une 2e microbrasserie.
                  </span>
                </>
              ) : (
                <>
                  <Lock1 />
                  <span>
                    Vous pouvez maintenent choisir une microbrasserie de votre
                    choix
                  </span>
                </>
              )}
            </Text>
            <Container1>
              <Text1 disabled={disabled}>{order}</Text1>
              <DropDownHeader disabled={disabled} onClick={toggling} ref={ref}>
                {selectedOption ? (
                  <div>
                    <SubContainer1>
                      <span>{"Nom de la bière"}</span>
                      {selectedOption || options[0]}
                    </SubContainer1>
                    <SubContainer2>
                      <span> {"Blonde"}</span> <span>{"341ml"} </span>{" "}
                      <span>{"4.5%"}</span>
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
                  >
                    <SubContainer1>
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
                {"Nom de la bière de votre choix"}
              </Button>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Container>
    </>
  );
};

export default DropDown;
