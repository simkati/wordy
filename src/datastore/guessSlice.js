import { createSlice } from '@reduxjs/toolkit';

const guessSlice = createSlice({
  name: 'guess',
  initialState: [],
  reducers: {
    addGuessLetter: (state, action) => [...state, action.payload],
    deleteGuessLetter: (state) => state.slice(0, state.length-1),
    clearGuessLetter: () => [],
  },
})

export const selectGuess = (state) => state.guess;

export const {
   addGuessLetter,
   deleteGuessLetter,
   clearGuessLetter,
} = guessSlice.actions;

export default guessSlice.reducer;
