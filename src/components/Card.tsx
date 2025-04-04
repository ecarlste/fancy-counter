import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import { Title } from "./Title";
import CountButton from "./CountButton";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5;

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setCount(Math.min(count + 1, 5));
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count number={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton setCount={setCount} type="decrement" locked={locked} />
        <CountButton setCount={setCount} type="increment" locked={locked} />
      </ButtonContainer>
    </div>
  );
}

export default Card;
