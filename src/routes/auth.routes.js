import { Router } from "express";
import { login,register, logout , profile } from '../controllers/auth.controllers.js';
import { authrequiere } from "../middlewares/valided_token.js";

const router = Router()

router.post('/register' , register)
router.post('/login', login)
router.post('/logout',logout)

router.get('/profile',authrequiere , profile)

export default router