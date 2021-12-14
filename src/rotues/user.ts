import express, { Request, Response } from 'express';
import { addUser, deleteUser, getUserDetails, getUsers, updateUser } from '../model/user';
const router = express.Router();

router.get('/api/user/:id',async (req:Request,res:Response)=>{
    const result = await getUserDetails(req.params.id)
    return res.send(result);
})

router.get('/api/user',async (req:Request,res:Response)=>{
    const result = await getUsers();
    return res.send(result);
})

router.post('/api/user',async (req:Request,res:Response)=>{
    return res.send(await addUser(req.body))
})

router.put('/api/user',async (req:Request,res:Response)=>{
    const result = await updateUser(req.body)
    return res.send(result)
})

router.delete('/api/user/:id',async (req:Request,res:Response)=>{
    const result = await deleteUser(req.params.id)    
    return res.send(result)
})
export default router