import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/users';
import { type Users } from '../types';

export const useUsers = () => {

  const { isLoading, isError, data, refetch, hasNextPage, fetchNextPage } =
    useInfiniteQuery<{ nextCursor: number; users: Users[] }>(
      ['users'],
      fetchUsers,
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false // para que no haga fetching si el usuario sale de la pagina (puede causar problemas cuando el usuario ha hecho varias peticiones que se están renderizando)
      }
    );

  return {
    refetch,
    fetchNextPage,
    isError,
    isLoading,
    users: data?.pages?.flatMap((page) => page.users) ?? [],
    hasNextPage,
  };
};
