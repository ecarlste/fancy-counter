type CountProps = {
  number: number;
};

function Count({ number }: CountProps) {
  return <p>{number}</p>;
}

export default Count;
