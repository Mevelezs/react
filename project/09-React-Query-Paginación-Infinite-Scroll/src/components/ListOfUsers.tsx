import { SortBy, type Users } from '../types.d';

interface Props {
  sorted: Users[] | undefined;
  showColors: boolean;
  handleDelete: (email: string) => void;
  handleOrganisator: (data: SortBy) => void;
}
export function ListOfUsers({
  sorted,
  showColors,
  handleDelete,
  handleOrganisator,

}
  : Props) {
  const selectColors = (index: number) => {
    return index % 2 === 0 ? '#333' : '#555';
  };

  return (
    <main>
      <table style={{ width: '100%', margin: '0' }}>
        <thead>
          <tr>
            <th>Photo</th>
            <th
              className='sort'
              onClick={() => {
                handleOrganisator(SortBy.NAME);
              }}
            >
              Name
            </th>
            <th
              className='sort'
              onClick={() => {
                handleOrganisator(SortBy.LASTN);
              }}
            >
              LastName
            </th>
            <th
              className='sort'
              onClick={() => {
                handleOrganisator(SortBy.COUNTRY);
              }}
            >
              Country
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted?.map((user, index) => (
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
                <button onClick={() => handleDelete(user.email)}>Delete</button>
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
