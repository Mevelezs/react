import {User, UserId, deleteUserById, addUser } from "../../store/users/slice";
import { useAppDispatch } from "./storeType";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const remove = (id: UserId) => {
    dispatch(deleteUserById(id));
  }

  const addNewUser = (user: User) => {
    dispatch(addUser(user));
  };

  return {
    remove,
    addNewUser,
  }
}
