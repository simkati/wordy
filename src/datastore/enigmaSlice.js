import { createSlice } from '@reduxjs/toolkit';

const enigmaSlice = createSlice({
  name: 'enigma',
  initialState: [],
  reducers: {
    newEnigma: (state, action) => action.payload,
  },
});
export const selectEnigma = (state) => state.enigma;

export const {
   newEnigma,
} = enigmaSlice.actions;

export default enigmaSlice.reducer;
