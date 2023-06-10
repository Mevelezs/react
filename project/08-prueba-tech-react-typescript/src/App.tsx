import { useEffect, useState } from 'react';
import { type Users } from '../src/types.ts';
import './App.css';
import { ListOfUsers } from './components/ListOfUsers.tsx';
import { UserActions } from './components/UserActions.tsx';

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [showColors, setShowColors] = useState(false);
  const [sortedByCountry, setSortByCountry] = useState(false);

  const sortByCountry = () => {
    setSortByCountry(!sortedByCountry);
  };
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const togglePaint = () => {
    setShowColors(!showColors);
  };

  const sorted = sortedByCountry
    ? [...users].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      })
    : users;

  const handleDelete = (mail: string ) => {
    const newUsers = users.filter((user) => user.email != mail);
    setUsers(newUsers);
  }

  
  return (
    <>
      <h1>Prueba Tecnica</h1>
      <UserActions togglePaint={togglePaint} sortByCountry={sortByCountry} />
      <ListOfUsers
        sorted={sorted}
        showColors={showColors}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
