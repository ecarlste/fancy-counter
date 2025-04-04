type TitleProps = {
  locked: boolean;
};

export function Title({ locked }: TitleProps) {
  return (
    <h1 className="title">
      {locked ? (
        <>
          Limit! Buy <b>Pro</b> for &gt;5
        </>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
