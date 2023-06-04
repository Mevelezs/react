import { UserId, deleteUserById } from "../../store/users/slice";
import { useAppDispatch } from "./storeType";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const remove = (id: UserId) => {
    dispatch(deleteUserById(id));
  }

  return {remove}
}

