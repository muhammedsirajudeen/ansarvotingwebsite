// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "@/serverhelper/prisma"
//only use this as a base line image dont forget to put entire thing in try catch blocks

export default async function handler(req, res) {
  const session=await getServerSession(req,res,authOptions)
  if(session){
    console.log(session.user.name)
    if(req.method=='POST'){
    let voteid=req.body.currentvoteid
    console.log(req.body)
    let username=session.user.name
    //find a way to handle duplicates as well
    let checkvote=await prisma.voted.findFirst(
        {
            where:{
                username:session.user.name,
                voteid:voteid
            }
        }
    )
    console.log(checkvote)
    if(checkvote){
        res.status(200).json({message:"vote has already been registered"})
    }else{
        await prisma.voted.create({data:{
            voteid:voteid,
            username:username,
            voteto:req.body.voteto,
            adhar:req.body.adhar
        }})
        res.status(200).json({ message:"success" })
    
    }


    }
  } else{
    console.log("no session")
    res.status(403).json({ message:"forbidden" })

}
}


