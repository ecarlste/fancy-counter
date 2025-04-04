import { Dispatch, SetStateAction } from "react";
import CountButton from "./CountButton";

type ButtonContainerProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

export type CountButtonOperation = "increment" | "decrement";

function ButtonContainer({ setCount }: ButtonContainerProps) {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type="decrement" />
      <CountButton setCount={setCount} type="increment" />
    </div>
  );
}

export default ButtonContainer;
