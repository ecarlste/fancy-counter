import { useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import { Title } from "./Title";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5;

  return (
    <div className="card">
      <Title />
      <Count number={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}

export default Card;
