import { useEffect, useMemo, useRef, useState } from 'react';
import { SortBy, type Users } from '../src/types.d';
import './App.css';
import { ListOfUsers } from './components/ListOfUsers.tsx';
import { UserActions } from './components/UserActions.tsx';

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [showColors, setShowColors] = useState(false);
  const [sortedByCountry, setSortedByCountry] = useState(SortBy.NONE);
  const originalUsers = useRef<Users[]>([]);
  const [filterCountry, setFilteCountry] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const sortByCountry = () => {
    const newSorted =
      sortedByCountry === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSortedByCountry(newSorted);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(
      `https://randomuser.me/api/?results=3&seed=Mauricio&page=${currentPage}`
    ) // seed : semillas revisar doc de la api
      .then((res) => {
        console.log(res.ok, res.status, res.statusText);

        if (!res.ok) throw new Error('error de la petición'); // validación correcta (cons axios no es necesario el catch getiona esta linea por debajo)
        return res.json();
      })
      .then((data) => {
        setUsers((prev) => {
          console.log(prev);
          const newUsers = prev.concat(data.results);
          originalUsers.current = newUsers;
          return newUsers;
        });
      })
      .catch((error) => {
        // aqui se valida si el fetch no responde por conección
        setError(true);
        setLoading(false);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  const togglePaint = () => {
    setShowColors(!showColors);
  };

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) =>
          user.location.country.toLowerCase().includes(filterCountry)
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

  const handleDelete = (mail: string) => {
    const newUsers = users.filter((user) => user.email != mail);
    setUsers(newUsers);
  };

  const restoreAllUsers = () => {
    setUsers(originalUsers.current);
    setFilteCountry(null);
  };

  const handleOrganisator = (data: SortBy) => {
    setSortedByCountry(data);
  };

  return (
    <>
      <h1>Prueba Tecnica</h1>
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
          {!loading && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Charge more users
            </button>
          )}
        </>
      )}
      {loading && <h3>Laoding...</h3>}
      {!loading && error && <h3>the request has an error</h3>}
      {!loading && !error && users.length === 0 && <h3>No users</h3>}
    </>
  );
}

export default App;
