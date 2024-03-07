// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "@/serverhelper/prisma"
//only use this as a base line image dont forget to put entire thing in try catch blocks

export default async function handler(req, res) {
  const session=await getServerSession(req,res,authOptions)

    console.log(session.user.name)
    if(req.method=='GET'){
    let allvotes=await prisma.voted.findMany()
    res.status(200).json({ message:"success",vote:allvotes })

    }

}


