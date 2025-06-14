import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: 'auth',
    initialState: {
        services: [],
        testimonials: [],
        selectedService: null,
    },
    reducers: {
        setServices: (state, action)=>{
            state.services = action.payload
        },
        setTestimonials: (state, action)=>{
            state.testimonials = action.payload
        },
        setSelectedService: (state, action)=>{
            state.selectedService = action.payload
        }
    }
});

export const {setServices, setTestimonials, setSelectedService} = serviceSlice.actions;
export default serviceSlice.reducer;