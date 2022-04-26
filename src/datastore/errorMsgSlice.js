import { createSlice } from '@reduxjs/toolkit';

const errorMsgSlice = createSlice({
  name: 'errorMsg',
  initialState: '',
  reducers: {
    addErrorMsg: (state, action) => action.payload,
    clearErrorMsg: () => '',
  },
})

export const selectErrorMsg = (state) => state.errorMsg;

export const {
   addErrorMsg,
   clearErrorMsg,
} = errorMsgSlice.actions;

export default errorMsgSlice.reducer;
