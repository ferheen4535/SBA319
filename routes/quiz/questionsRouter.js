import express from 'express';
import * as questionsController from '../../controllers/quiz/questionsControllers.js';

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.send('Here are the questions');
});

// Seed route
router.get('/seed', questionsController.seedQuestions);

// Get all questions
router.get('/', questionsController.getQuestions);

// Post a new question
router.post('/', questionsController.createQuestions);

export default router;

//I am able to make Create, update, and delete routes in Postman and 
// I see the changes in compass but when I go back the next day to 
// recheck my work, the IDs change and I can't see the changes in postman again//
//I tried to work on fixing it all weekend but not sure why it is happening//