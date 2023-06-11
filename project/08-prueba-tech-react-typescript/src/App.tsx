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

  const sortByCountry = () => {
    const newSorted =
      sortedByCountry === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSortedByCountry(newSorted);
  };

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        originalUsers.current = data.results;
      });
  }, []);

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
      <ListOfUsers
        sorted={sorted}
        showColors={showColors}
        handleDelete={handleDelete}
        handleOrganisator={handleOrganisator}
      />
    </>
  );
}

export default App;
