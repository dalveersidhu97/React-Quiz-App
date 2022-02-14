import { createSlice } from "@reduxjs/toolkit";

const quizResultSlice = createSlice({
   name: 'quizResult', 
   initialState: {results: []},
   reducers: {
       addResult: (state, action) => {
        state.results.push(action.payload);
       }
   }
});

export const {addResult} = quizResultSlice.actions;
export default quizResultSlice.reducer;