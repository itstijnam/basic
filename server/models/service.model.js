import mongoose from "mongoose";


const serviceModel = mongoose.Schema({
    heading: {type: String, required: true},
    image: {type: String, required: true},
    short_desc: {type: String, required: true},
    desc: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    type: {type: String},
    subcat: {type: String},
    plot_area: {type: String},
    build_up_area: {type: String},
    completed_in: {type: String},
})

export const Service = mongoose.model("Service", serviceModel);