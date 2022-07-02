import { createSlice } from '@reduxjs/toolkit'

const userLstSlice = createSlice({
  name: 'User',
  initialState: {
    list: []
  },
  reducers: {

    addUser: (state, action) => {
      state.list.push(action.payload)
    },

  }

});

export const { addUser, } = userLstSlice.actions

export default userLstSlice.reducer;