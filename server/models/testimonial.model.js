import mongoose from "mongoose";


const testimonialModel = mongoose.Schema({
    testimonial_name: {type: String, required: true},
    image: {type: String, required: true},
    quote: {type: String, required: true},
    city: {type: String},
    country: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

export const Testimonial = mongoose.model("Testimonial", testimonialModel);