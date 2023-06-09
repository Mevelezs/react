import { type Users } from '../types';

interface Props {
  sorted: Users[];
  showColors: boolean;
}
export function ListOfUsers({ sorted, showColors }: Props) {
  const selectColors = (index: number) => {
    return index % 2 === 0 ? '#333' : '#555';
  };

  return (
    <main>
      <table style={{ width: '100%', margin: '0' }}>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user, index) => (
            <tr
              key={user.email}
              style={{
                backgroundColor: showColors
                  ? selectColors(index)
                  : 'transparent',
              }}
            >
              <td>
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

// table, thead, tbody <--- componentes claves de una tabla
// tr --> rows
// td --> cell
// th --> header cells
