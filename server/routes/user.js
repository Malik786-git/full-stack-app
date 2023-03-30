import express from 'express';
import { userController } from '../controllers/userCon.js';
import {addUserController } from '../controllers/addUserCon.js';
import {deleteUserController } from '../controllers/deleteUserCon.js';
import {updateUserController } from '../controllers/updateUserCon.js';

const router = express.Router();


// User CRUD....


// get all users
router.get('/all-user', userController)


// create new user..
router.post('/add-user', addUserController)


// delete user..
router.delete('/delete-user/:id', deleteUserController)


// update user..
router.patch('/update-user/:id', updateUserController)


export default router;