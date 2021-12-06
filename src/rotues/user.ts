import express, { Request, Response } from 'express';
import { addUser, getUsers, updateUser } from '../model/user';
const router = express.Router();

router.get('/api/user',async (req:Request,res:Response)=>{
    return res.send(await getUsers());
})

router.post('/api/user',async (req:Request,res:Response)=>{
    return res.send(addUser(req.body));
})

router.put('/api/user',async (req:Request,res:Response)=>{
    return res.send(updateUser(req.body.query,req.body.data,req.body.type));
})

export default router