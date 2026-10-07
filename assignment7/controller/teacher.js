import {Teacher} from '../models/teacher.js';

export const Addteacher = async(req, res) => {
    try {
        const {name, email, department} = req.body;
        if(!name || !email || !department){
            return res.status(400).json({error: "bad request", message: "missing attributes"})
        }
        const newteacher =  {name, email, department}
        const addteacher = new Teacher(newteacher);
        await addteacher.save();
        return res.status(200).json(addteacher)
    } catch (error) {
        next(error)
    }
}

export const Getteacher = async(req, res) => {
    try {
        const getteacher = await Teacher.find();
        return res.status(200).json(getteacher)
    } catch (error) {
        next(error)
    }
}

export const GetteacherId = async(req, res) => {
    try {
        const id = req.params.body;
        const getid = await Teacher.findById(id);
        if(!getid){
            return res.status(404).json({error: "Not Found"})
        }
        return res.status(200).json(getid)
    } catch (error) {
        next(error)
    }
}

export const Updateteacher = async(req, res) => {
    try {
        const id = req.params.body;
        const {name, email, department} = req.body;
        const details = {name, email, department}
        const updateteacher = await Teacher.findByIdAndUpdate({_id: id}, details, {new: true})
         if(!updateteacher){
            return res.status(404).json({error: "Not Found"})
        }
        return res.status(200).json(updateteacher)
    } catch (error) {
        next(error)
    }
}

export const Deleteteacher = async(req, res) => {
    try {
        const id = req.params.body;
        const deleteteacher = await Teacher.findByIdAndDelete({_id: id});
         if(!deleteteacher){
            return res.status(404).json({error: "Not Found"})
        }
        return res.status(200).json(deleteteacher)
    } catch (error) {
        next(error)
    }
}