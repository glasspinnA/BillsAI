import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDTO } from "../../DTO/UserDTO";

const userReducer = createSlice({
  name: "user",
  initialState: {
    users: [] as UserDTO[],
  },
  reducers: {
    AddUsers: (state, action: PayloadAction<UserDTO[]>) => {
      return { ...state, users: action.payload };
    },
  },
});
export default userReducer.reducer;
export const { AddUsers } = userReducer.actions;
