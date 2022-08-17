import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";
import { colors } from "../../constants";
import { TextButton, NumberButton, Container } from "./styled";

const Stepper = (props) => {
  const buttonOptions = [1, 2, 3, 4];
  const { state } = useContext(AppContext);

  return (
    <Container>
      <Link href={state.previousStep >= -1 ? "/" : ""}>
        <TextButton
          color={
            props.step === -1 ? `${colors.orange}` : "rgba(147, 149, 152, 0.15)"
          }
        >
          {"bienvenue"}
        </TextButton>
      </Link>
      {buttonOptions.map((element, key) => (
        <Link
          href={state.previousStep >= element ? `/${element}` : ""}
          key={`link_${key}`}
        >
          <NumberButton
            color={
              props.step === element
                ? `${colors.orange}`
                : props.step > element
                ? "rgba(147, 149, 152, 0.15)"
                : `${colors.black}`
            }
          >
            {element}
          </NumberButton>
        </Link>
      ))}
      <Link href={state.previousStep >= 4 ? "/5" : ""}>
        <TextButton
          color={props.step === 5 ? `${colors.orange}` : `${colors.black}`}
        >
          {"Résumé"}
        </TextButton>
      </Link>
    </Container>
  );
};

export default Stepper;
