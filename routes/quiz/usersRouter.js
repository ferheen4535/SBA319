import express from 'express';
import * as usersControllers from '../../controllers/quiz/usersControllers.js';

const router = express.Router();

// Seed
router.get('/', usersControllers.seedUsers);

// Index - Get all users
router.get('/', usersControllers.getUsers);

// Show - Get a single user
router.get('/:id', usersControllers.getUser);

//username: 'Glen',
 // email: 'glen.k@gmail.com',
 // _id: new ObjectId('680f7ae29fe2c5f8a9b3060d'),//

router.post('/', usersControllers.createUser);





//username: 'Mark',
//email: 'mark.k@gmail.com',
//_id: new ObjectId('680e4fe3365a37054b886b27'),
// Delete - Remove a user//
//http://localhost:5055/quiz/users/680e4fe3365a37054b886b27//

router.delete('/:id', usersControllers.deleteUser);

export default router;
