
import { Router } from "express";

import { 
    get_cliente, 
    delete_cliente, 
    get_404,  
    post_cliente,
    put_cliente,
    get_clientes
} from "../functions/functions_routes.js";

export const adminRouter = Router()

adminRouter.get("/", get_clientes)

adminRouter.get("/:id", get_cliente)

adminRouter.post("/", post_cliente)

adminRouter.delete("/:id", delete_cliente)

adminRouter.put("/", put_cliente)

adminRouter.get('*', get_404);