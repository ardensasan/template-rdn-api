import express from 'express'
const router = express.Router();


router.get("/",async (req,res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has s"
        })
    } catch (error) {
        
    }
}) 

export default router;