type ButtonContainerProps = {
  children: React.ReactNode;
};

export type CountButtonOperation = "increment" | "decrement";

function ButtonContainer({ children }: ButtonContainerProps) {
  return <div className="button-container">{children}</div>;
}

export default ButtonContainer;
