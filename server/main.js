
//const express = require("express")
import express from "express";

import { adminRouter } from "./src/routes/routes_principal.js";

export const app = express()

app.use('/', adminRouter);  

app.listen(80)
