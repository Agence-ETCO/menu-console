import { colors } from "../../constants";
import { TextButton, NumberButton, Container } from "./styled";

const Stepper = (props) => {
  const buttonOptions = [1, 2, 3, 4];

  return (
    <Container>
      <TextButton
        color={props.step === 0 ? `${colors.orange}` : `${colors.grey}`}
      >
        {"bienvenue"}
      </TextButton>
      {buttonOptions.map((element) => (
        <NumberButton
          color={
            props.step === element
              ? `${colors.orange}`
              : props.step > element
              ? `${colors.orange}`
              : `${colors.black}`
          }
        >
          {element}
        </NumberButton>
      ))}
      <TextButton
        color={props.step === 5 ? `${colors.orange}` : `${colors.black}`}
      >
        {"resume"}
      </TextButton>
    </Container>
  );
};

export default Stepper;
