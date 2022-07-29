import { createSlice } from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        currentUser: {}
    },
    reducers: {
        setCurrentUser:  (state, action) => {
            state.currentUser = action.payload
        }
    }

});

export const { setCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer;