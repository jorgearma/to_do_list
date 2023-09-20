import { authrequiere } from "../middlewares/valided_token.js";
import {Router} from "express";
import { createtaks ,deletetaksk,gettak,gettaks,updatetask } from "../controllers/taks.controllers.js";
import { createTaskSchema } from "../schema/tasks.schema.js";
import { validateSchema } from "../middlewares/validator.middelware.js";

const router = Router()

router.get('/tasks', authrequiere ,gettaks )
router.get('/tasks/:id', authrequiere, gettak )

router.post('/tasks', authrequiere, validateSchema(createTaskSchema), createtaks)
router.delete('/tasks/:id', authrequiere, deletetaksk )
router.put('/tasks/:id', authrequiere, updatetask )


export default router