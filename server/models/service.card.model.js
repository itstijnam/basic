import mongoose from 'mongoose'


const serviceModel = mongoose.Schema({
    service_name: {type: String, required: true},
    short_desc: {type: String, required: true},
    desc: {type: String, required: true},
    img: {type: String, required: true}
})

export const Service = mongoose.model("Service", serviceModel);
