import { useRouter } from "next/router";
import { TextButton, NumberButton, Container } from "./styled";

const Stepper = (props) => {
  const buttonOptions = ["1", "2", "3", "4"];
  const { pathname } = useRouter();

  return (
    <Container>
      <TextButton>{"bienvenue"}</TextButton>
      {buttonOptions.map((element) => (
        <NumberButton>{element}</NumberButton>
      ))}
      <TextButton>{"resume"}</TextButton>
    </Container>
  );
};

export default Stepper;
