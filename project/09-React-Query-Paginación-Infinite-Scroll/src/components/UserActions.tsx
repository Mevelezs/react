import { SortBy } from '../types.d';

interface Props {
  togglePaint: () => void;
  sortByCountry: () => void;
  restoreAllUsers: () => void;
  setFilteCountry: React.Dispatch<React.SetStateAction<string | null>>;
  sortedByCountry: SortBy;
}

export function UserActions({
  togglePaint,
  sortByCountry,
  sortedByCountry,
  restoreAllUsers,
  setFilteCountry,
}: Props) {
  return (
    <header style={{ marginBottom: '32px' }}>
      <button onClick={togglePaint}>Paint files</button>
      <button onClick={sortByCountry}>
        {sortedByCountry === SortBy.NONE
          ? 'Sort by Country'
          : 'Unsort by country'}
      </button>
      <button onClick={restoreAllUsers}>Restore Users</button>
      <input
        type='text'
        placeholder='filter by country'
        onChange={(e) => {
          setFilteCountry(e.target.value);
        }}
      />
    </header>
  );
}
