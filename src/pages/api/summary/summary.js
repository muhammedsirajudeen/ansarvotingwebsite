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
      let voteid=req.body.voteid
      console.log(voteid)
      const voteCounts = await prisma.voted.groupBy({
        by: ['voteto'],
        _count: {
          voteto: true
        },
        where: {
          voteid: voteid
        }
      });
      let modifiedcounts=[]
      voteCounts.forEach((vote)=>{
        modifiedcounts.push({voteto:vote.voteto,count:vote._count.voteto})
      })
      console.log(modifiedcounts)
      res.status(200).json({ message:"success",votecounts:modifiedcounts })

    }
  } else{
    console.log("no session")
    res.status(403).json({ message:"forbidden" })

}
}


