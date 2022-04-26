import { createSlice } from '@reduxjs/toolkit';

const guessedWordsSlice = createSlice({
  name: 'guessedWords',
  initialState: [],
  reducers: {
    addGuessWord: (state, action) => [...state, action.payload],
    clearGuessedWords: () => [],
  },
});
  export const selectGuessedWords = (state) => state.guessedWords;

export const {
   addGuessWord,
   clearGuessedWords,
} = guessedWordsSlice.actions;

export default guessedWordsSlice.reducer;
