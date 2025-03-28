import React from "react";
import Image from "next/image";
import image from "../../public/close.svg";
import {
  Container,
  BoxContainer,
  Button,
  CloseButton,
  Title,
  Subtitle,
  Input,
  InputSmall,
  Label,
} from "./styled.js";
import { setMicroBrasserie } from "../../lib/store";

const Form = ({
  beer,
  producer,
  type,
  format,
  alcohol,
  showForm,
  handleClick,
  onBeerChange,
  onProducerChange,
  onTypeChange,
  onFormatChange,
  onAlcoholChange,
  onFormSubmit,
}) => {
  const disabled = !beer && !producer && !type;

  const handleSubmit = () => {
    handleClick();
    onFormSubmit();
  };

  return (
    <>
      <Container showForm={showForm}>
        <BoxContainer>
          <CloseButton onClick={handleClick}>
            <Image src={image} width={25} height={25} alt="" />
          </CloseButton>
          <Title>{"Vous désirez ajouter un produit en particulier ?"}</Title>
          <Subtitle>
            {
              "Il suffit de nous fournir les détails suivants. La bière doit déjà être programmée dans vos caisses."
            }
          </Subtitle>
          <Label>
            Nom de la bière*
            <Input
              name="beer"
              type="text"
              value={beer}
              onChange={onBeerChange}
            />
          </Label>
          <Label>
            Microbrasserie*
            <Input
              name="producer"
              type="text"
              value={producer}
              onChange={onProducerChange}
            />
          </Label>
          <Label>
            Type (Ex. : Lager, Pislner, Ale, blanche…)*
            <Input
              name="type"
              type="text"
              value={type}
              onChange={onTypeChange}
            />
          </Label>
          {/* <Label>
            Format*
            <div>
              <InputSmall
                name="format"
                type="text"
                value={format}
                onChange={onFormatChange}
                placeholder="241"
              />
              <span>ml</span>
            </div>
          </Label> */}
          <Label>
            {" Taux d'alcool"}
            <div>
              <InputSmall
                name="alcohol"
                type="text"
                value={alcohol}
                onChange={onAlcoholChange}
                placeholder="5,6"
              />
              <span>%</span>
            </div>
          </Label>
          <Button disabled={disabled} onClick={() => handleSubmit()}>
            {"ajouter"}
          </Button>
        </BoxContainer>
      </Container>
    </>
  );
};

export default Form;
