import express from "express";
import { Addsubject, Getsubject, GetsubjectId, Updatesubject, Deletesubject } from "../controller/subject.js";

const router = express.Router();

router.post('/', Addsubject);

router.get('/', Getsubject);

router.get('/:id', GetsubjectId);

router.put('/:id', Updatesubject);

router.delete('/:id', Deletesubject);

export default router;