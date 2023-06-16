import { useMemo, useState } from 'react';
import { SortBy, type Users } from '../src/types.d';
import './App.css';
import { ListOfUsers } from './components/ListOfUsers.tsx';
import { UserActions } from './components/UserActions.tsx';
import { useUsers } from './hooks/useUsers.ts';

function App() {
  const { isLoading, isError, users, refetch, hasNextPage, fetchNextPage } = useUsers();

  const [showColors, setShowColors] = useState(false);
  const [sortedByCountry, setSortedByCountry] = useState(SortBy.NONE);
  const [filterCountry, setFilteCountry] = useState<string | null>(null);

  const sortByCountry = () => {
    const newSorted =
      sortedByCountry === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSortedByCountry(newSorted);
  };

  const togglePaint = () => {
    setShowColors(!showColors);
  };

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) =>
          user.location.country.toLowerCase().includes(filterCountry.toLocaleLowerCase())
        )
      : users;
  }, [filterCountry, users]);

  const sorted = useMemo(() => {
    if (sortedByCountry === SortBy.NONE) return filteredUsers;
    if (sortedByCountry === SortBy.NAME) {
      return [...filteredUsers].sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
    } else if (sortedByCountry === SortBy.LASTN) {
      return [...filteredUsers].sort((a, b) => {
        return a.name.last.localeCompare(b.name.last);
      });
    } else if (sortedByCountry === SortBy.COUNTRY) {
      return [...filteredUsers].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      });
    }
  }, [filteredUsers, sortedByCountry]);

  const handleDelete = (mail: string) => { // TODO //////////////////
    // const newUsers= users.filter((user) => user.email != mail);
    // setUsers(newUsers);
  };

  const restoreAllUsers = async () => {
    // setUsers(originalUsers.current);
    // setFilteCountry(null);
    await refetch();
    
  };

  const handleOrganisator = (data: SortBy) => {
     setSortedByCountry(data);
  };

  return (
    <>
      <h1>Prueba Técnica</h1>
      <UserActions
        togglePaint={togglePaint}
        sortByCountry={sortByCountry}
        restoreAllUsers={restoreAllUsers}
        setFilteCountry={setFilteCountry}
        sortedByCountry={sortedByCountry}
      />
      {users.length > 0 && (
        <>
          <ListOfUsers
            sorted={sorted}
            showColors={showColors}
            handleDelete={handleDelete}
            handleOrganisator={handleOrganisator}
          />
          {!isLoading &&
            hasNextPage && ( // hasNextPage es un boooleano que es true si hay man paginas (si la linea 20 no es undefine)
              <button onClick={() => fetchNextPage()}>Charge more users</button>
            )}
        </>
      )}
      {isLoading && <h3>Laoding...</h3>}
      {!isLoading && isError && <h3>the request has an error</h3>}
      {!isLoading && !isError && users.length === 0 && <h3>No users</h3>}
      {!isLoading && !hasNextPage && <h3>No more users</h3>}
    </>
  );
}

export default App;
