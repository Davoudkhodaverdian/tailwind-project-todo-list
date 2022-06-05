import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list:[]
  },
  reducers: {
    addTodo: (state,action) => {
      state.list.push(action.payload)
    },
    
  }
});

export const {} = todoSlice.actions

export default todoSlice.reducer;