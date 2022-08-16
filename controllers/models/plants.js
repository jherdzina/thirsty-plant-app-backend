import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    plantName: { type: String, required: true },
    altPlantName: { type: String },
    imageURL: { type: String },
    roomLocated: { type: String },
    wateredLast: { 
        type: Date,
        default: new Date()
    },
    waterSchedule: { type: String }
})


module.exports = mongoose.model('Plant', plantSchema)