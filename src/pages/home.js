import axios from "axios"
import { useEffect, useState } from "react"
import {useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import {PulseLoader } from "react-spinners"
export default  function Home() {
  const [loading,setLoading]=useState(true)
  const {data:session,status}=useSession()
  const [openvotes,setOpenvotes]=useState([])
  useEffect(()=>{
    if(status==="authenticated"){
      setLoading(false)
      async function getopenVotes(){
        let openvotes=(await axios.get("/api/votehandler/vote")).data
        console.log(openvotes)
        setOpenvotes(openvotes.votearray)
      }
      getopenVotes()
    }else if(status==="unauthenticated"){
      window.location.href="/"
    }
  },[session])
  function voteHandler(e){
    //handle votes here and send it to nodes and stuff like that
    console.log(e.target.id)
    window.localStorage.setItem("currentvote",e.target.id)
    window.location.href="/poll"
  }
  return (
    loading? <div className="fixed w-screen h-screen flex items-center justify-center"><PulseLoader loading={loading}/></div> :
      <div className="flex w-screen h-screen flex-col items-center">
        <Navbar username={session.user.name} />
        <h1 className="font-bold" >CURRENT OPEN VOTINGS ARE</h1>
        {openvotes.map((votes)=>{
          return(
            <div key={votes.id} className="flex items-center justify-center border border-black m-2 " >
              <div className="m-3" >{votes.username}</div>
              <div>{votes.votename}</div>
              <div className="m-3" >{votes.description}</div>
              <button className="bg-black text-white rounded-lg m-2 p-2" id={votes.id} onClick={voteHandler} >vote</button>
            </div>
          )
        })}
      </div>
    )

}
