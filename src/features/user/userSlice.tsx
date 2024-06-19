import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../interfaces/user.type";

const getInitialDarkMode = (): boolean => {
  const darkMode = localStorage.getItem("dark-mode");
  return darkMode !== null ? JSON.parse(darkMode) : false;
};

const initialState: UserState = {
  residents: [],
  darkMode: getInitialDarkMode(),
  sessionUser: {
    fullname: '',
    private: '',
    numberOfHouse: 0,
    email: '',
    phoneNumber: '',
    roles: [],
    token: '',
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.residents.push(action.payload);
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem("dark-mode", JSON.stringify(action.payload));
      state.darkMode = action.payload;
    },
    getDarkMode: (state) => {
      const darkMode = localStorage.getItem("dark-mode");
      return darkMode !== null ? JSON.parse(darkMode) : state.darkMode;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addUser, setDarkMode } = userSlice.actions;

export default userSlice.reducer;
