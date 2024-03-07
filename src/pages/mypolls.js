import axios from "axios"
import { useEffect, useState } from "react"
import {useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import {PulseLoader } from "react-spinners"
import Link from "next/link"
export default  function Home() {
  const [loading,setLoading]=useState(true)
  const {data:session,status}=useSession()
  const [openvotes,setOpenvotes]=useState([])
  const [votearray,setVotearray]=useState([])
  const [uservotearray,setUservotearray]=useState([])
  useEffect(()=>{
    if(status==="authenticated"){
      setLoading(false)
      //get the vote created by the user
      async function userPolls(){
        let response=(await axios.get("api/votehandler/userpoll")).data
        console.log(response)
        setVotearray(response.votearray)
      }
      //get all the votes given by the user
      async function userVotes(){
        let response=(await axios.get("api/votehandler/uservote")).data
        console.log(response)
        setUservotearray(response.uservotearray)

      }
      
      userPolls()
      userVotes()
    }else if(status==="unauthenticated"){
      window.location.href="/"
    }
  },[session])

  async function statusHandler(e){
    let voteid=e.target.id
    let status=e.target.textContent==="open" ? false : true
    console.log(status)
    let response=(await axios.put("api/votehandler/userpoll",{
      id:voteid,
      status:status
    })).data
    console.log(response)
    if(response.message==="success"){
      alert("the vote has been closed")
      window.location.reload()
    }

  }
  async function summaryHandler(){
    win
  }

  return (
    loading? <div className="fixed w-screen h-screen flex items-center justify-center"><PulseLoader loading={loading}/></div> :
      <div className="flex w-screen h-screen flex-col items-center">
        <Navbar username={session.user.name} />

    {/* here return the votes that has been given by you         */}

    {/*  also the polls that you have created has an option to close the poll  */}
      <h1>YOUR POLLS</h1>
      <div className="flex items-center justify-evenly w-full font-bold">
        <div>username</div>
        <div>votename</div>
        <div>description</div>
        <div>status</div>
        <div>summary</div>
      </div>
      {votearray.map((vote)=>{
        return(
          <div key={vote.id} className="flex  items-center justify-evenly w-full"  >
            <div>{vote.username}</div>
            <div>{vote.votename}</div>
            <div>{vote.description}</div>
            <button id={vote.id} className="bg-black text-white" onClick={statusHandler} >{vote.status?"open":"closed"}</button>
            <Link  className="bg-black text-white p-1" href="/[voteId]" as={"/"+vote.id} >
              view summary
            </Link>
          </div>
        )
      })}
      <h1 className="font-bold m-10" >VOTES RECORDED BY YOU</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="flex items-center justify-evenly font-bold">
            <td className="border p-2 w-1/2">Vote ID</td>
            <td className="border p-2 w-1/2">Vote To</td>
          </tr>
        </thead>
        <tbody>
          {uservotearray.map((uservote, index) => (
            <tr key={index} className="flex items-center justify-evenly">
              <td className="border p-2 w-1/2">{uservote.voteid}</td>
              <td className="border p-2 w-1/2">{uservote.voteto}</td>
            </tr>
          ))}
        </tbody>
      </table>


      </div>
    )

}
