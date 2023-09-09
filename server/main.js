
//const express = require("express")
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { adminRouter } from "./src/routes/routes_principal.js";

export const app = express()

app.use(cors())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', adminRouter);  



app.listen(4000)
