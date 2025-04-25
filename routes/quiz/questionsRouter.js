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