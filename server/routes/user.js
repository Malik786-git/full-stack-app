import express from 'express';
import { userController } from '../controllers/userCon.js';
import {addUserController } from '../controllers/addUserCon.js';

const router = express.Router();


// User CRUD....

// get all users
router.get('/all-user', userController)


// create new user..
router.post('/add-user', addUserController)


export default router;