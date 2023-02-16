import {
  Container,
  SubContainer,
  Title,
  TwoColumns,
  Column,
  Row,
  Icon
} from "./styled";import { legend } from "../../fr";

const Legend = (props) => {

  return (
    <div>
      <h1>
      </h1>
      <Container>
        <SubContainer>
            <Title>{legend.title}</Title>
            <TwoColumns>
              <Column>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-bio.svg"></img></Icon><span>Alcool du terroir</span></Row>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-terroir.svg"></img></Icon><span>Biologique</span></Row>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-embouteille.svg"></img></Icon><span>Embouteillé</span></Row>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-origin.svg"></img></Icon><span>Origine Québec</span></Row>
              </Column>
              <Column>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-cellier.svg"></img></Icon><span>Cellier</span></Row>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-nature.svg"></img></Icon><span>Nature</span></Row>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-orange.svg"></img></Icon><span>Orange</span></Row>
                <Row><Icon><img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-microbrasserie.svg"></img></Icon><span>Microbrasserie artisanale locale</span></Row>
              </Column>
            </TwoColumns>
          </SubContainer>
      </Container>
    </div>
  );
};

export default Legend;
