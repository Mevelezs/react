import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  email: string;
  github: string;
}

export type UserId = string;

export interface UserWithId extends User {
  id: UserId;
}

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Miguel Duran',
    email: 'mcomail@mail',
    github: 'midudev',
  },
  {
    id: '2',
    name: 'Mauricio Vélez',
    email: 'mauricio@gmail.com',
    github: 'mevelezs',
  },
  {
    id: '3',
    name: 'Omar Zambrano',
    email: 'omar@gmail.com',
    github: 'oazambranoa',
  },
  {
    id: '4',
    name: 'Andres Tápias',
    email: 'andres@gmail.com',
    github: 'AndresTapias',
  },
  {
    id: '5',
    name: 'Juan Fernández',
    email: 'juan@gmail.com',
    github: 'juanfernandez',
  },
  {
    id: '6',
    name: '<NAME>',
    email: '<EMAIL>',
    github: '<GITHUB>',
  },
];

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState ? JSON.parse(persistedState).user : DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
  },
});

export default userSlice.reducer;

export const { deleteUserById, addUser } = userSlice.actions;
