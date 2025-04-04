import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";
import { CountButtonOperation } from "./ButtonContainer";

type CountButtonProps = {
  type: CountButtonOperation;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function CountButton({ type, setCount }: CountButtonProps) {
  function handleUpdateCount() {
    if (type === "decrement") {
      setCount((prev) => Math.max(prev - 1, 0));
    } else {
      setCount((prev) => Math.min(prev + 1, 5));
    }
  }

  return (
    <button className="count-btn" onClick={handleUpdateCount}>
      {type === "decrement" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
