type CountProps = {
  number: number;
};

function Count({ number }: CountProps) {
  return <p className="count">{number}</p>;
}

export default Count;
