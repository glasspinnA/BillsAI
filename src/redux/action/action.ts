import { UserDTO } from "../../DTO/UserDTO";
import ActionTypes from "./../types/actionTypes";

export const AddUsers = (users: UserDTO[]) => ({
  type: ActionTypes.ADD_USERS,
  payload: users,
});
