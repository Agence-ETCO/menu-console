import {
  Container,
  SubContainer,
  Title,
  TwoColumns,
  Column,
  Row,
  Icon,
  Img
} from "./styled";import { legend } from "../../fr";

const Legend = (props) => {

  return (
    <div>
      <Container>
        <SubContainer>
            <Title>{legend.title}</Title>
            <TwoColumns>
              <Column>
                <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-terroir.svg"></Img></Icon><span>Origine Québec</span></Row>
                <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-bio.svg"></Img></Icon><span>Biologique</span></Row>
                {/* <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-embouteille.svg"></Img></Icon><span>Embouteillé au Québec</span></Row> */}
                <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-origin.svg"></Img></Icon><span>Préparé ou embouteillé <br />au Québec</span></Row>
              </Column>
              <Column>
                <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-cellier.svg"></Img></Icon><span>Cellier</span></Row>
                <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-nature.svg"></Img></Icon><span>Nature</span></Row>
                <Row><Icon><Img src="https://rsh.nyc3.digitaloceanspaces.com/images%2Ficon-microbrasserie.svg"></Img></Icon><span>Microbrasserie artisanale locale</span></Row>
              </Column>
            </TwoColumns>
          </SubContainer>
      </Container>
    </div>
  );
};

export default Legend;
