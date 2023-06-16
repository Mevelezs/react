

export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return fetch(
    `https://randomuser.me/api/?results=3&seed=Mauricio&page=${pageParam}`
  ) // seed : semillas revisar doc de la api
    .then(async (res) => {
      console.log(res.ok, res.status, res.statusText);

      if (!res.ok) throw new Error('error de la petición'); // validación correcta (cons axios no es necesario el catch getiona esta linea por debajo)
      return await res.json();
    })
    .then((data) => {
      const currentPage = data.info.page;
      const nextCursor = currentPage <= 5 ? currentPage + 1 : undefined;
      return {
        users: data.results,
        nextCursor,
      };
    });
};
