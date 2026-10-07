import { Class } from "../models/class.js";

export const Addclass = async(req, res) => {
    try {
        const {classname , room} = req.body;
        if(!classname || !room){
            return res.status(400).json({error: "bad request", msg: "missing attributes"})
        }
        const newclass = { className: classname , roomNumber: room};
        const addclass = new Class(newclass);
        console.log(addclass);
        await addclass.save();
        return res.status(201).json(addclass);    

    } catch (error) {
        next(error);
    }
}

export const Getclass = async(req, res) => {
    try {
        const getclass = await Class.find();
        return res.status(200).json(getclass);
    } catch (error) {
        next(error)
    }
}

export const GetclassId = async (req, res) => {
    try {
        const id = req.params.body;
        const classid = await Class.findById(id)
        return res.status(200).json(classid)
    } catch (error) {
        next(error)
    }
}

export const Updateclass = async(req, res) => {
    try {
        const id = req.params.body;
        const {classname, room} = req.body;
        const details = {className: classname, roomNumber: room}; 
        const updateclass = await Class.findByIdAndUpdate({_id: id}, details, {new: true});

        if(!updateclass){
            return res.status(404).json({error: "Person nor found"})
        }
        return res.status(200).json(update);
    } catch (error) {
        next(error)
    }
}

export const Deleteclass = async(req, res) => {
    try {
        const id = req.params.body;
        const deleteclass = await Class.findByIdAndDelete({_id: id});
        return res.status(200).json(deleteclass)
    } catch (error) {
        next(error)
    }
}