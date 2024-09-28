import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux-toolkit/store";
// Define a type for the slice state
interface AuthState {
  isLogin: boolean;
  isLoading: boolean;
}
// Define the initial state using that type
const initialState: AuthState = {
  isLogin: false,
  isLoading: false,
};
export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});
//export const {} = authSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.authState;
export default authSlice.reducer;
