import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";
import { CountButtonOperation } from "./ButtonContainer";

type CountButtonProps = {
  setCount: Dispatch<SetStateAction<number>>;
  operation: CountButtonOperation;
};

export default function CountButton({ setCount, operation }: CountButtonProps) {
  function handleUpdateCount() {
    if (operation === "decrement") {
      setCount((prev) => Math.max(prev - 1, 0));
    } else {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <button className="count-btn" onClick={handleUpdateCount}>
      {operation === "decrement" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
