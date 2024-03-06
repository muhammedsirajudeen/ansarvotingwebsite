import axios from "axios"
import { useEffect, useState } from "react"
import {useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import {PulseLoader } from "react-spinners"
export default  function Home() {
  const [loading,setLoading]=useState(true)
  const {data:session,status}=useSession()
  const [currentvote,setCurrentvote]=useState("")
  const [voteoptions,setVoteoptions]=useState([])
  const [selectedoption,setSelectedoption]=useState("")
  const [adhar,setAdhar]=useState("")
  useEffect(()=>{
    if(status==="authenticated"){
      setLoading(false)
      async function getcurrentvote(){
        //here get the current vote just send the id and recieve the current vote then vote while voting send to nodes and perform some trick
        let currentvoteid=window.localStorage.getItem("currentvote")
        let response=(await axios.post("api/votehandler/getvote",
          {
            voteid:currentvoteid
          }
        )).data
        console.log(response)
        setCurrentvote(response.vote)
        setVoteoptions(response.vote.voteoptions.split("|"))
      }
      getcurrentvote()

    }else if(status==="unauthenticated"){
      window.location.href="/"
    }
  },[session])
  
  async function pollHandler(){
    let currentvoteid=window.localStorage.getItem("currentvote")
    //post to the backend and save in db anyone can run a node final results will be compared from the data in the nodes
    let response=(await axios.post("api/votehandler/poller",{
      currentvoteid,
      voteto:selectedoption,
      adhar:adhar

    })).data
    console.log(response)
    if(response.message==="success"){
      alert("vote has been registered")
      window.location.reload()
    }else{
      alert(response.message)
    }
  }

  return (
    loading? <div className="fixed w-screen h-screen flex items-center justify-center"><PulseLoader loading={loading}/></div> :
      <div className="flex w-screen h-screen flex-col items-center">
        <Navbar username={session.user.name} />
        <div className="flex flex-col items-center justify-center ">
          <h2 className="font font-bold text-lg" >{currentvote.votename} by {currentvote.username}  </h2>
          <div>{currentvote.description}</div>
          <input type="text" placeholder="enter adhar number" className="border border-black m-5" onChange={(e)=>setAdhar(e.target.value)} value={adhar} ></input>
          {/* here we give options for whoever is in the election            */}
          <input type="text" placeholder="enter unique id" className="border border-black m-3" ></input>
          <select value={selectedoption} onChange={(e)=>setSelectedoption(e.target.value)} className="m-3"  > 
            <option value="">Select an Option</option>
            {voteoptions.map((options)=>{
              return(
                
                <option key={options} value={options}>{options}</option>
                
              )
            })}
          </select>
          <button className="bg-black text-white p-2 rounded-lg" onClick={pollHandler} >poll</button>
        </div>
      </div>
    )

}
