import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    className: String,
    roomNumber: String
})

export const Class = mongoose.model('class', ClassSchema);