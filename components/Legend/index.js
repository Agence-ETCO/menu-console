import {
  Container,
  SubContainer,
  Title,
  SubTitle,
  Hr
} from "./styled";import { legend } from "../../fr";

const Legend = (props) => {

  return (
    <>
    <div>
      <h1>
      </h1>
      <Container>
      <SubContainer>
          <Title>{legend.title} </Title>
          <Hr/> 
          <SubTitle>
            pastilleeee 
            xxxxxxx Choisissez parmi les <span> vins blancs Cellier</span>
            offerts
          </SubTitle>
        </SubContainer>
      </Container>
      </div>
    </>
  );
};

export default Legend;
