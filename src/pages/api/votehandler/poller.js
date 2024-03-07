// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "@/serverhelper/prisma"
//only use this as a base line image dont forget to put entire thing in try catch blocks
import axios from "axios"
const chainurl="http://localhost:4000"
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
        let createdvote=await prisma.voted.create({data:{
            voteid:voteid,
            username:username,
            voteto:req.body.voteto,
            adhar:req.body.adhar
        }})
        //here when the vote has been recorded in the db the validity is false we send it to the express backend
        let response=(await axios.post(chainurl+"/block",{
            block:createdvote
        })).data
        console.log(response)
        if(response.message==="success"){
            await prisma.voted.update(
                {where:{
                    id:createdvote.id
                },
                data:{
                    validity:true
                }
            }
            )
            res.status(200).json({ message:"success" })

        }else{
            res.status(200).json({ message:"block invalidated" })

        }
    
    }


    }
  } else{
    console.log("no session")
    res.status(403).json({ message:"forbidden" })

}
}


