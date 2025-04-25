
import dotenv from 'dotenv'
dotenv.config()
import './database/database.js';
import express from 'express';
import usersRouter from './routes/quiz/usersRouter.js';
import questionsRouter from './routes/quiz/questionsRouter.js';
import resultsRouter from './routes/quiz/resultsRouter.js';

const app = express();
const port = process.env.PORT || 5055;


// Middleware 
app.use(express.urlencoded())
app.use(express.json())
app.use('/quiz/users', usersRouter);
app.use('/quiz/questions', questionsRouter);
app.use('/quiz/results', resultsRouter);

// Routes
app.get('/',(req, res)=>{
    res.send('Welcome to Badmaash Beards Quiz')
})



/////////////////////////











// App.listen
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
    });