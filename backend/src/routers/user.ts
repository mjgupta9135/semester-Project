import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();


router.post("/signin",(req,res)=>{
    const hardCodedAddress = "6MQfSk5n8UHzMQPmCUrW1oMv6jC7VMRnJHphuJYeSMDd";
    const token=jwt.sign({
        address:hardCodedAddress;
    })
})


export default router;
