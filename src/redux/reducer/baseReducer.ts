import { createSlice } from "@reduxjs/toolkit";
import { UserDTO } from "../../DTO/UserDTO";
import { RootState } from "../store/store";

export const baseReducer = createSlice({
  name: "counter",
  initialState: {
    users: [] as UserDTO[],
  },
  reducers: {
    AddUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { AddUsers } = baseReducer.actions;

export default baseReducer.reducer;

export const GetUsers = (state: RootState) => state.baseReducer.users;
