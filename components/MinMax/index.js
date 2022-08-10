import Hint from "../../components/Hint";
import { Select } from "./styled.js";

const MinMax = (props) => {
  return (
    <>
      <Select beer={props.beer}>
        <Hint />
        {props.beer ? (
          <>Maximum 2 bières de microbrasserie</>
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
