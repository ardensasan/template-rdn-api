import express, { Request, Response } from 'express'
import { createTable } from '../model/generator';
const router = express.Router();

router.post('/api/create/:name',(req:Request,res:Response)=>{
    createTable(req.params.name)
    return res.send("")
})

export default router;