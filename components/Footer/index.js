import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Vector from "../Vector";
import {
  Container,
  Button,
  StyledLink,
  StyledButton,
  Select,
  Select1,
  Stage,
  Container1,
} from "./styled.js";

const Footer = (props) => {
  const {
    state
  } = useContext(AppContext);
  console.log('state.previousStep', state.previousStep);
  const link = state.previousStep < 6 ? props.href : "/7/" ;
  return (
    <Container1>
      <Container>
        {props.returnButtonText && (
          <>
          {props.noReturn && (
            <Button viewButtonText={props.viewButtonText} align={props.align} onClick={props.handleReturn}>
              {props.returnButtonText}
            </Button>
          ) || (
          <Link href={props.returnHref}>
            <Button viewButtonText={props.viewButtonText} align={props.align} onClick={props.handleReturn}>
              {props.returnButtonText}
            </Button>
          </Link>
          ) } 
          </>
        )}
        {props.startText  && (
          <Link href={link}>
            <StyledLink first={props.first}>{props.startText}</StyledLink>
          </Link>
        )}
        {props.buttonText && props.redirection == true && (
          <Link href={link}>
            <StyledLink
              first={props.first}
              disabled={props.disabled}
              onClick={props.handleClick}
            >
              {props.buttonText}
            </StyledLink>
          </Link>
        )} 
        {props.buttonText && props.redirection == false && (
            <StyledLink
              first={props.first}
              disabled={props.disabled}
              onClick={props.handleClick}
            >
              {props.buttonText}
            </StyledLink>
        )}

        {props.stage && (
          <Stage>
            <div>PROCHAINE ÉTAPE:</div>
            <Select1>
              <Vector />
              <span>{props.stage}</span>
            </Select1>
          </Stage>
        )}
        {props.viewButtonText && (
          <Link href={"/8"}>
            <StyledButton>{props.viewButtonText}</StyledButton>
          </Link>
        )}
        {props.submitButtonText && (
          <StyledButton onClick={props.handleSubmit}>
            {props.submitButtonText}
          </StyledButton>
        )}
      </Container>
    </Container1>
  );
};

export default Footer;
