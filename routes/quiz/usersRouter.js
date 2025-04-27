import express from 'express';
import * as usersControllers from '../../controllers/quiz/usersControllers.js';

const router = express.Router();

// Seed
router.get('/', usersControllers.seedUsers);

// Index - Get all users
router.get('/', usersControllers.getUsers);

// Show - Get a single user
router.get('/:id', usersControllers.getUser);

// Create - Add a new user, 
//_id:680bb0b4f777b4261418f9c6
//username "Musa"
//email "musa.k@gmail.com"
//and//
//username: 'Mark',
//email: 'mark.k@gmail.com',
//_id: new ObjectId('680e4fe3365a37054b886b27'),

router.post('/', usersControllers.createUser);



// Delete - Remove a user//
//http://localhost:5055/quiz/users/680e4fe3365a37054b886b27//
router.delete('/:id', usersControllers.deleteUser);

export default router;
