import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    subjectName: String,
})

export const Subject = mongoose.model('subject', SubjectSchema);