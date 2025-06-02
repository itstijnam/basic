import { createSlice } from "@reduxjs/toolkit";

const customDesign = createSlice({
    name: 'design',
    initialState: {
        blackToggle: false,
    },
    reducers: {
        setBlackToggle: (state, action)=>{
            state.blackToggle = action.payload
        }
    }
});

export const {setBlackToggle} = customDesign.actions;
export default customDesign.reducer;