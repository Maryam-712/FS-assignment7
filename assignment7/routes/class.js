import express from "express";
import { Addclass, Getclass, GetclassId, Updateclass, Deleteclass } from "../controller/class.js";

const router = express.Router();

router.post('/',Addclass);

router.get('/', Getclass);

router.get('/:id', GetclassId);

router.put('/:id', Updateclass);

router.delete('/:id', Deleteclass);

export default router;
