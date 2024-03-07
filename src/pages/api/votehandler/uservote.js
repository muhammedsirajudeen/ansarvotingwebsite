// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "@/serverhelper/prisma"
//only use this as a base line image dont forget to put entire thing in try catch blocks

export default async function handler(req, res) {
  const session=await getServerSession(req,res,authOptions)
  if(session){
    console.log(session.user.name)
    //votes created by the user
    if(req.method==='GET'){
        let uservote=await prisma.voted.findMany({where:{username:session.user.name}})
        console.log(uservote)
        res.status(200).json({ message:"success",uservotearray:uservote })
        
    }

  } else{
    console.log("no session")
    res.status(403).json({ message:"forbidden" })

  }
}


