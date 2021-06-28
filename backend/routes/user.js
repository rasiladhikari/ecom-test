import express from 'express';
const router = express.Router();
import {authUser, registerUser} from '../controller/user.js';

router.post('/login', authUser);
router.route('/register').post(registerUser);

export default router;