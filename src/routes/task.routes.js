import { authrequiere } from "../middlewares/valided_token.js";
import {Router} from "express";

const router = Router()

router.get('/tasks', authrequiere ,(req , res) => {
    return res.send('taks')
})


export default router