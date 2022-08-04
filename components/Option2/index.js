import DropDown from "../DropDown";
import { option2 } from "../../fr";
import {
  Container,
  Subcontainer1,
  Subcontainer2,
  Title,
  Select,
} from "./styled";

const Option2 = () => {
  const min = 2;
  const quantity = 10;
  const options = [
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
    "La Mcrobrasserie, Montréal, QC",
  ];
  return (
    <>
      <Container>
        <Subcontainer1>
          <div>
            <Title>{option2.title}</Title>
          </div>
          <Select>
            <span>{quantity}</span> {option2.select}
          </Select>
        </Subcontainer1>
        <Subcontainer2>
          <DropDown options={options} />
          <DropDown options={options} header={"Veuillez choisir "} />
        </Subcontainer2>
      </Container>
    </>
  );
};

export default Option2;
