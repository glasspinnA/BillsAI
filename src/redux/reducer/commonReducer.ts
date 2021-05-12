import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDTO } from "../../DTO/UserDTO";
import { Theme } from "../../enum/Theme";
import { RootState } from "../store/store";

const commonReducer = createSlice({
  name: "common",
  initialState: {
    theme: 0 as Theme,
    isDarkMode: false,
  },
  reducers: {
    SetTheme: (state, action: PayloadAction<Theme>) => {
      return { ...state, theme: action.payload };
    },
    SetDarkModeState: (state, action: PayloadAction<boolean>) => {
      return { ...state, isDarkMode: action.payload };
    },
  },
});
export default commonReducer.reducer;
export const { SetTheme, SetDarkModeState } = commonReducer.actions;
export const GetSelectedTheme = (state: RootState) => state.common.theme;
