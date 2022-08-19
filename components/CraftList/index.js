import Image from "next/image";
import image from "../../public/close.svg";
import CraftBeerCard from "../../components/CraftBeerCard";
import {
  Container,
  BoxContainer,
  CloseButton,
  StyledButton,
  Title,
  Subtitle,
  Container1,
  Container2,
} from "./styled.js";

const CraftList = (props) => {
  const options = ["01", "02", "03", "04", "05", "06"];
  return (
    <>
      {props.showCraft ? (
        <Container>
          <BoxContainer>
            <CloseButton onClick={props.handleClick}>
              <Image src={image} width={25} height={25} alt="" />
            </CloseButton>
            <Container1>
              <div>
                <Title>{"Titre"}</Title>
                <Subtitle>
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  }
                </Subtitle>
              </div>
              <StyledButton /* onClick={handleClick} */>
                {"Ajouter votre microbrasserie"}
              </StyledButton>
            </Container1>
            <Container2>
              {options.map((option, i) => (
                <CraftBeerCard key={i} value={option} option={option} />
              ))}
            </Container2>
            {/* <ButtonContainer>
              <Button disabled={disabled} onClick={() => handleSubmit()}>
                {"ajouter"}
              </Button>
            </ButtonContainer> */}
          </BoxContainer>
        </Container>
      ) : null}
    </>
  );
};

export default CraftList;
