import express from 'express';
import dotenv from 'dotenv';
import { DBconnect } from './config/db.js';
import ClassRouter from './routes/class.js';
import TeacherRouter from './routes/teacher.js'
import SubjectRouter from './routes/subject.js'
import { Errorhandling } from './middleware/errorhandling.js';


const app = express();

app.use(express.json());
dotenv.config();

DBconnect();

const PORT = 3000;

app.use('/teacher', TeacherRouter);
app.use('/class', ClassRouter);
app.use('/subject', SubjectRouter);


app.use((req, res, next) => {
    const error = new Error(`Not Found ${req.originalUrl}`);
    error.status(404);
    next();
})

app.use(Errorhandling);

app.listen(PORT, () => {
    console.log(`Server is running on the port no. ${PORT}`)
})
