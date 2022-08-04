import { useState } from "react";

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
  Input,
} from "./styled";

const DropDown = ({ options, header }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <Container>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {header ? (
            <Header>{header}</Header>
          ) : (
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
          )}
          <SubContainer>
            <RectangleSmall />
          </SubContainer>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
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
            <Input type="text" placeholder="Nom de la bière de votre choix" />
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Container>
  );
};

export default DropDown;
