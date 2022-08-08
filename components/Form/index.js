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
  const [beer, setBeer] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [alcohol, setAlcohol] = useState("");

  const disabled = !beer && !producer && !type && !format && !alcohol;

  const handleSubmit = () => {
    props.handleClick();

    const data = JSON.stringify({
      beer: beer,
      producer: producer,
      type: type,
      format: format,
      alcohol: alcohol,
    });
    localStorage.setItem(`microbrasserie${props.order}`, data);

    props.count();
  };

  return (
    <>
      {props.showForm ? (
        <Container>
          <BoxContainer>
            <CloseButton onClick={props.handleClick}>
              <Image src={image} width={25} height={25} />
            </CloseButton>
            <Title>{"Ajouter une bière de microbrasserie"}</Title>
            <Subtitle>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elitulvinar acultricies sed non consequat malesuada libero."
              }
            </Subtitle>
            <Label>
              Bière *
              <Input
                name="beer"
                type="text"
                value={beer}
                onChange={(e) => setBeer(e.target.value)}
              />
            </Label>
            <Label>
              Microbrasserie *
              <Input
                name="producer"
                type="text"
                value={producer}
                onChange={(e) => setProducer(e.target.value)}
              />
            </Label>
            <Label>
              Type *
              <Input
                name="type"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Label>
            <Label>
              Format *
              <InputSmall
                name="format"
                type="text"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              />
            </Label>
            <Label>
              Alcool *
              <InputSmall
                name="alcohol"
                type="text"
                value={alcohol}
                onChange={(e) => setAlcohol(e.target.value)}
              />
            </Label>
            <Button disabled={disabled} onClick={() => handleSubmit()}>
              {"ajouter"}
            </Button>
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default Form;
