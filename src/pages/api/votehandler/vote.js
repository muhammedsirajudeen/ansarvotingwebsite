// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session=await getServerSession(req,res,authOptions)
  if(session){
    console.log(session.user.name)
    if(req.method==='POST'){
        let userdata=req.body
        userdata.username=session.user.name
        try{
            
          await prisma.vote.create({data:userdata})
            res.status(200).json({ message:"success" })
    
        }catch(error){
            console.log(error)
            res.status(200).json({message:"error occured"})
        }

    }
    else if(req.method==='GET'){
      let openvotes=await prisma.vote.findMany()
      console.log(openvotes)
      res.status(200).json({message:"success",votearray:openvotes})
      
    }
  } else{
    console.log("no session")
    res.status(403).json({ message:"forbidden" })
  }
 
}


