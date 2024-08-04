import express from "express";
import { create, getAll, getOne,Update, userDelete } from "../controller/userController.js";

const route=express.Router()
route.post('/create',create)
route.get('/getall',getAll)
route.get('/getone/:id',getOne)
route.put('/update/:id',Update)
route.delete('/delete/:id',userDelete)


export default route;