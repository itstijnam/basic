import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentAuthUser: null,
    },
    reducers: {
        setAuthUser: (state, action)=>{
            state.currentAuthUser = action.payload
        }
    }
});

export const {setAuthUser} = authSlice.actions;
export default authSlice.reducer;