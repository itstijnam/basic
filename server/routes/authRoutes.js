
import express from 'express';
import { login, logout, register } from '../controllers/authController.js';


const router = express.Router();
// auth route
router.route('/register').post(register) 
router.route('/login').post(login)
router.post('/logout', logout); 

export default router;
