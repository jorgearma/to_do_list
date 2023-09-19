import { Router } from "express";
import { login,register, logout , profile } from '../controllers/auth.controllers.js';
import { authrequiere } from "../middlewares/valided_token.js";

import {  validateSchema} from "../middlewares/validator.middelware.js ";
import { registerSchema,loginSchema } from "../schema/auth.schema.js";
const router = Router()

router.post('/register',validateSchema(registerSchema) , register)
router.post('/login',validateSchema(loginSchema), login)
router.post('/logout',logout)

router.get('/profile',authrequiere , profile)

export default router