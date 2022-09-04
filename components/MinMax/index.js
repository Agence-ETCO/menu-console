import Hint from "../../components/Hint";
import { Select } from "./styled.js";

const MinMax = (props) => {
  return (
    <>
      <Select stage={props.stage} number={props.number}>
        <Hint />
        {props.stage === 4 ? (
          <>
            {props.number === 6 && "Maximum de 6 bières en fût"}
            {props.number === 8 && " Minimum de 1 microbrasserie en fût"}
            {props.number >= 10 && "Minimum de 2 microbrasseries en fût"}
          </>
        ) : props.stage === 5 ? (
          <>Maximum 2 bières non-alcoolisées</>
        ) : (
          <span>
            Minimum {props.min} - Maximum {props.max}
          </span>
        )}
      </Select>
    </>
  );
};

export default MinMax;
