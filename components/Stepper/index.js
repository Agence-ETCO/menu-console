import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";
import { colors } from "../../constants";
import { TextButton, NumberButton, Container } from "./styled";
import Tooltip from '@mui/material/Tooltip';

const tooltips = {
  1: 'Votre menu',
  2: 'Vins blancs',
  3: 'Vins rouges',
  4: 'Bières',
  5: 'Bières non alcoolisées',
  6: 'Résumé',
};

const Stepper = (props) => {
  const buttonOptions = [1, 2, 3, 4, 5];
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
          <Tooltip title={tooltips[key + 1]}>
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
          </Tooltip>
        </Link>
      ))}
      <Link href={state.previousStep >= 5 ? "/6" : ""}>
        <TextButton
          color={props.step === 6 ? `${colors.orange}` : `${colors.black}`}
        >
          {"Résumé"}
        </TextButton>
      </Link>
    </Container>
  );
};

export default Stepper;
