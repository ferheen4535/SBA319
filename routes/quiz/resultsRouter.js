import express from 'express';
import * as resultsControllers from '../../controllers/quiz/resultsControllers.js';

const router = express.Router();

// Seed route
router.get('/seed', resultsControllers.seedResults);

// Index route (replace this with actual index logic later)
router.get('/', (req, res) => {
    res.send('Here are your results');
});

// Create route//
router.post('/', resultsControllers.createResult); 


// update route - PUT /:id 680bca9082d1f2edec46715c//
router.put('/:id', resultsControllers.updateResult);



// DELETE route - delete by ID: 680bc43a8f66f6369a745cb9//
//_id:680bc43a8f66f6369a745cb9
// title: "The Mint Maverick"
// scentMatch: "Masti Mint + Icy Springs Beard Butter and Oil"
// description: "Fresh, sharp, and ready to break the mold. You think fast, move faster…"
//
router.delete('/:id', resultsControllers.deleteResult);



export default router;
