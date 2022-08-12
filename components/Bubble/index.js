import Lock2 from "../../components/Lock2";
import { Select } from "./styled.js";

const Bubble = (props) => {
  return (
    <>
      <Select show={props.show} duration={props.duration}>
        {props.count >= 2 ? (
          <>
            <Lock2 />
            <div>
              <div> Vous avez débloqué</div>
              <span> 2 choix de microbrasserie</span>
            </div>
          </>
        ) : (
          <>
            <Lock2 />
            <div>
              <div>Vous avez débloqué</div>{" "}
              <span> 1 choix de microbrasserie</span>
            </div>
          </>
        )}
      </Select>
    </>
  );
};

export default Bubble;
