import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";
import { colors } from "../../constants";
import { TextButton, NumberButton, Container } from "./styled";
import Tooltip from '@mui/material/Tooltip';

const tooltips = {
  1: 'Votre menu',
  2: 'Mousseux et orange',
  3: 'Vins blancs',
  4: 'Vins rouges',
  5: 'Bières',
  6: 'Bières non alcoolisées'
};

const Stepper = (props) => {
  const buttonOptions = [1, 2, 3, 4, 5, 6];
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
          href={(state.previousStep >= element ? `/${element}` : "") + ((element === 5 && state.previousStep >= element ) ? `/?keg=${state.selectedPack}` : "") }
          key={`link_${key}`}
        >
          <Tooltip title={tooltips[key + 1]} arrow placement="top" PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                // color: "deepskyblue",
                fontFamily: 'GTWalsheimBold',
                fontFtyle: 'normal',
                fontWeight: '700',
                fontSize: '19px',
                lineHeight: '23px',
                textAlign: 'center',
                color: '#231F20;',
                bgcolor: '#939598',
                p: '10px'
              },
              "& .MuiTooltip-arrow": {
                "&::before": {
                  backgroundColor: "#939598",
                }
              }
            }
          }}>
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
      <Link href={state.previousStep >= 7 ? "/7" : ""}>
        <TextButton
          color={props.step === 7 ? `${colors.orange}` : `${colors.black}`}
        >
          {"Résumé"}
        </TextButton>
      </Link>
    </Container>
  );
};

export default Stepper;
