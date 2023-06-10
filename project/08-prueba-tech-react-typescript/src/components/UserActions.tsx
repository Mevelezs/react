interface Props {
  togglePaint: () => void;
  sortByCountry: () => void;
  restoreAllUsers: () => void;
}

export function UserActions({
  togglePaint,
  sortByCountry,
  restoreAllUsers,
}: Props) {
  return (
    <header style={{ marginBottom: '32px' }}>
      <button onClick={togglePaint}>Paint files</button>
      <button onClick={sortByCountry}>Sort by Country</button>
      <button onClick={restoreAllUsers}>Restore Users</button>
    </header>
  );
}
