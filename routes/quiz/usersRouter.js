import express from 'express';
import * as usersControllers from '../../controllers/quiz/usersControllers.js';
const router = express.Router();

router.get('/', (req, res) => {        //test//
    res.send('I am ready to take the Badmaash Quiz')
})

// routes / API Endpoints//
//INDUCES-index, new, delete, update, create, edit, show//CRUD//

//seed///
router.get('/seed', usersControllers.seedUsers)

//index//
router.get('/', usersControllers.seedUsers);

//new//


//create//
router.post('/', usersControllers.createUser);





export default router;