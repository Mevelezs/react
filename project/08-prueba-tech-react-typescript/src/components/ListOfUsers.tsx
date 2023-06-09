import { type Users } from '../types';

interface Props {
  users: Users[];
}
export function ListOfUsers({ users }: Props) {
  return (
    <table style={{width:'100%', margin:'0'}}>
      <thead>
        <th>Foto</th>
        <th>Nombre</th>
        <th>País</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id.value}>
            <td>
              <img src={user.picture.thumbnail} alt={user.name.first} />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>
              <button>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// table, thead, tbody <--- componentes claves de una tabla
// tr --> rows
// td --> cell
// th --> header cells
