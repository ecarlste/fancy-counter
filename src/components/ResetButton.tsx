import { ResetIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";

type ResetButtonProps = { setCount: Dispatch<SetStateAction<number>> };

function ResetButton({ setCount }: ResetButtonProps) {
  function handleResetCount(event: React.MouseEvent<HTMLButtonElement>) {
    setCount(0);

    event.currentTarget.blur();
  }

  return (
    <button className="reset-btn" onClick={handleResetCount}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
