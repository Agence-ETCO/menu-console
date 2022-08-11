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
              <Image src={image} width={25} height={25} alt="" />
            </CloseButton>
            <Title>{"Ajouter une bière de microbrasserie"}</Title>
            <Subtitle>
              {
                "Vous désirez nous faire part d’une demande particulière ? C’est possible ! Pour cela, il vous suffit de renseigner quelques informations."
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
              <div>
                <InputSmall
                  name="format"
                  type="text"
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
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
                  value={alcohol}
                  onChange={(e) => setAlcohol(e.target.value)}
                  placeholder="5.6"
                />
                <span>%</span>
              </div>
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
