import Hint from "../../components/Hint";
import { Select } from "./styled.js";

const HintBox = (props) => {
  return (
    <>
      <Select stage={props.stage} number={props.number}>
        <Hint />
          <p>
            {props.text}
          </p>
      </Select>
    </>
  );
};

export default HintBox;
