import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";

type CountButtonsProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

type CountButtonOperation = "increment" | "decrement";

function CountButtons({ setCount }: CountButtonsProps) {
  function handleUpdateCount(operation: CountButtonOperation = "increment") {
    if (operation === "decrement") {
      setCount((prev) => Math.max(prev - 1, 0));
    } else {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <div className="button-container">
      <button
        className="count-btn"
        onClick={() => handleUpdateCount("decrement")}
      >
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={() => handleUpdateCount()}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}

export default CountButtons;
