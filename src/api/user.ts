import express, { Request, Response } from 'express';
import { addUser, getUsers } from '../model/user';
const router = express.Router();

router.get('/api/user',async (req:Request,res:Response)=>{
    return res.send(await getUsers());
})

router.post('/api/user',async (req,res)=>{
    return addUser();
})

export default router