import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import { Title } from "./Title";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count number={count} />
      <ResetButton />
      <CountButtons setCount={setCount} />
    </div>
  );
}

export default Card;
