import { configureStore } from "@reduxjs/toolkit";
import enigmaReducer from "./datastore/enigmaSlice";
import guessedWordsReducer from "./datastore/guessedWordsSlice";
import guessReducer from "./datastore/guessSlice";
import errorMsgReducer from "./datastore/errorMsgSlice";

export default configureStore({
  reducer: {
    enigma: enigmaReducer,
    guess: guessReducer,
    guessedWords: guessedWordsReducer,
    errorMsg: errorMsgReducer,
  }
});
