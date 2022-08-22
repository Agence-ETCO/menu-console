import Hint from "../../components/Hint";
import { Select } from "./styled.js";

const MinMax = (props) => {
  return (
    <>
      <Select stage={props.stage}>
        <Hint />
        {props.stage === 4 ? (
          <>Maximum 2 bières de microbrasserie</>
        ) : props.stage === 5 ? (
          <>Jusquà 2 bières sans alcool</>
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
