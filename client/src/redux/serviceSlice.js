import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: 'auth',
    initialState: {
        services: [],
        testimonials: []
    },
    reducers: {
        setServices: (state, action)=>{
            state.services = action.payload
        },
        setTestimonials: (state, action)=>{
            state.testimonials = action.payload
        }
    }
});

export const {setServices, setTestimonials} = serviceSlice.actions;
export default serviceSlice.reducer;