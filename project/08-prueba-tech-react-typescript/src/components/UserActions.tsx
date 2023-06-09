interface Props {
  togglePaint: () => void;
  sortByCountry: () => void;
}

export function UserActions({ togglePaint, sortByCountry }: Props) {
  return (
    <header style={{ marginBottom: '32px' }}>
      <button onClick={togglePaint} style={{ margin: '4px' }}>
        Paint files
      </button>
      <button onClick={sortByCountry}>Sort by Country</button>
    </header>
  );
}
