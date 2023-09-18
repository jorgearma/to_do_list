import { authrequiere } from "../middlewares/valided_token.js";
import {Router} from "express";
import { createtaks ,deletetaksk,gettak,gettaks,updatetask } from "../controllers/taks.controllers.js";


const router = Router()

router.get('/tasks', authrequiere ,gettaks )
router.get('/tasks/:id', authrequiere, gettak )

router.post('/tasks', authrequiere, createtaks)
router.delete('/tasks/:id', authrequiere, deletetaksk )
router.put('/tasks/:id', authrequiere, updatetask )


export default router