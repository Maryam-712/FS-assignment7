import express from "express";
import { Addteacher, Getteacher, GetteacherId, Updateteacher, Deleteteacher } from "../controller/teacher.js";

const router = express.Router();

router.post('/', Addteacher);

router.get('/', Getteacher);

router.get('/:id', GetteacherId);

router.put('/:id', Updateteacher);

router.delete('/:id', Deleteteacher);

export default router;