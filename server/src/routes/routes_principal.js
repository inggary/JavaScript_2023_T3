
import { Router } from "express";

import { 
    get_users, 
    delete_cliente, 
    get_404,  
    post_cliente,
    put_cliente
} from "../functions/functions_routes.js";

export const adminRouter = Router()

adminRouter.get("/:id", get_users)

adminRouter.post("/", post_cliente)

adminRouter.delete("/", delete_cliente)

adminRouter.put("/", put_cliente)

adminRouter.get('*', get_404);