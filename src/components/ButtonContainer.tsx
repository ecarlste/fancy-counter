import { Dispatch, SetStateAction } from "react";
import CountButton from "./CountButton";

type ButtonContainerProps = {
  setCount: Dispatch<SetStateAction<number>>;
  locked: boolean;
};

export type CountButtonOperation = "increment" | "decrement";

function ButtonContainer({ setCount, locked }: ButtonContainerProps) {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type="decrement" locked={locked} />
      <CountButton setCount={setCount} type="increment" locked={locked} />
    </div>
  );
}

export default ButtonContainer;
