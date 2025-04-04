import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";
import { CountButtonOperation } from "./ButtonContainer";

type CountButtonProps = {
  type: CountButtonOperation;
  setCount: Dispatch<SetStateAction<number>>;
  locked: boolean;
};

export default function CountButton({
  type,
  setCount,
  locked,
}: CountButtonProps) {
  function handleUpdateCount() {
    if (type === "decrement") {
      setCount((prev) => Math.max(prev - 1, 0));
    } else {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <button disabled={locked} className="count-btn" onClick={handleUpdateCount}>
      {type === "decrement" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
