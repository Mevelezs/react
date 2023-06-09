import { useEffect, useState } from 'react';
import { type Users } from '../src/types.ts';
import './App.css';
import { ListOfUsers } from './components/ListOfUsers.tsx';

function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <>
      <h1>Prueba Tecnica</h1>
      <ListOfUsers users={users} />
    </>
  );
}

export default App;
