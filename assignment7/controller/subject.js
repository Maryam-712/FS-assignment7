import { Subject } from "../models/subject.js";

export const Addsubject = async(req, res) => {
    try {
        const {subject} = req.body;
        if(!subject){
            return res.status(400).json({error: "Bad request", msg: "missing attributes"})
        }
        const newsubject = {subjectName: subject};
        const addsubject = new Subject(newsubject);
        await addsubject.save();
        return res.status(200).json(addsubject);
    } catch (error) {
        next(error)
    }
}

export const Getsubject = async(req, res) => {
    try {
        const getsubject = await Subject.find();
        return res.status(200).json(getsubject);
    } catch (error) {
        next(error);
    }
}

export const GetsubjectId = async(req, res) => {
    try {
        const id = req.params.body;
        const getsubjectid = await Subject.findById(id);
        if(!getsubjectid){
            return res.status(404).json({error: "Subject Not Found"})
        }
        return res.status(200).json(getsubjectid)
    } catch (error) {
        next(error);
    }
}

export const Updatesubject = async(req, res) => {
    try {
        const id = req.params.body;
        const {subject}  = req.body;
        const newsubject = {subjectName: subject}
        const updatesubject = await Subject.findByIdAndUpdate({_id: id}, newsubject, {new: true})
        if(!updatesubject){
            return res.status(404).json({error: "Not Found"})
        }
        return res.status(200).json(updatesubject)
    } catch (error) {
        next(error)
    }
}

export const Deletesubject = async(req, res) => {
    try {
        const id = req.params.body;
        const deletesubject = await Subject.findByIdAndDelete({_id: id})
        if(!deletesubject){
            return res.status(404).json({error: "Not found"})
        }
        return res.status(200).json(deletesubject)
    } catch (error) {
        next(error)
    }
}