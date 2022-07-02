import { createSlice } from '@reduxjs/toolkit'

const userLstSlice = createSlice({
  name: 'user',
  initialState: {
    list: []
  },
  reducers: {

    setUser: (state, {payload}) => {
      state.list = payload;
    }, 
    addUser: (state, action) => {
      state.list.push(action.payload)
    },
    removeUser: (state, {id}) => {

      state.list = state.list.filter(item => item.id !== id)
    },
    editUser: (state,{id, dataChanged}) => {

      let data = state.list.map(item => {
        if (item.id === id) item = dataChanged
        return item
      })
      state.list = data
    },

  }

});

export const { addUser,setUser,editUser,removeUser } = userLstSlice.actions

export default userLstSlice.reducer;