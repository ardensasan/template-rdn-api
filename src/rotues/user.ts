import express, { Request, Response } from 'express';
import { addUser, getUsers, updateUser } from '../model/user';
const router = express.Router();

router.get('/api/user',async (req:Request,res:Response)=>{
    const result = await getUsers();
    return res.send(result);
})

router.post('/api/user',async (req:Request,res:Response)=>{
    return res.send(await addUser(req.body))
    
})

router.put('/api/user',async (req:Request,res:Response)=>{
    return res.send(await updateUser(req.body.query,req.body.data,req.body.type));
})

export default router