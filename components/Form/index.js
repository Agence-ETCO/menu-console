import { useState } from "react";
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

const Form = (props) => {
  const disabled =
    !props.beer &&
    !props.producer &&
    !props.type &&
    !props.format &&
    !props.alcohol;

  const handleSubmit = () => {
    props.handleClick();

    const data = JSON.stringify({
      beer: props.beer,
      producer: props.producer,
      type: props.type,
      format: props.format,
      alcohol: props.alcohol,
    });
    localStorage.setItem(`microbrasserie${props.order}`, data);

    props.onFormSubmit();
  };

  return (
    <>
      <Container showForm={props.showForm}>
        <BoxContainer>
          <CloseButton onClick={props.handleClick}>
            <Image src={image} width={25} height={25} alt="" />
          </CloseButton>
          <Title>{"Vous désirez ajouter un produit en particulier ?"}</Title>
          <Subtitle>
            {
              "Vous désirez nous faire part d’une demande particulière ? C’est possible ! Pour cela, il vous suffit de nous fournir quelques informations."
            }
          </Subtitle>
          <Label>
            Bière *
            <Input
              name="beer"
              type="text"
              value={props.beer}
              onChange={props.onBeerChange}
            />
          </Label>
          <Label>
            Microbrasserie *
            <Input
              name="producer"
              type="text"
              value={props.producer}
              onChange={props.onProducerChange}
            />
          </Label>
          <Label>
            Type *
            <Input
              name="type"
              type="text"
              value={props.type}
              onChange={props.onTypeChange}
            />
          </Label>
          <Label>
            Format *
            <div>
              <InputSmall
                name="format"
                type="text"
                value={props.format}
                onChange={props.onFormatChange}
                placeholder="241"
              />
              <span>ml</span>
            </div>
          </Label>
          <Label>
            Alcool *
            <div>
              <InputSmall
                name="alcohol"
                type="text"
                value={props.alcohol}
                onChange={props.onAlcoholChange}
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
