import mongoose from "mongoose";


const serviceModel = mongoose.Schema({
    heading: {type: String, required: true},
    image: {type: String, required: true},
    short_desc: {type: String, required: true},
    desc: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    type: {}
})

export const Service = mongoose.model("Service", serviceModel);