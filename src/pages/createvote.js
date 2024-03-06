import axios from "axios"
import { useEffect, useState } from "react"
import {useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import {PulseLoader } from "react-spinners"
export default  function Home() {
    const [loading,setLoading]=useState(false)
    const {data:session,status}=useSession()
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    


    async function submitHandler(){
        let response= (await  axios.post("api/votehandler/vote",
        {
          votename:name,
          description:description
        })).data
        console.log(response)
        if(response.message==="success"){
          alert("vote created")
          window.location.reload()
        }
    }
  return (
    loading? <div className="fixed w-screen h-screen flex items-center justify-center"><PulseLoader loading={loading}/></div> :
      <div className="flex w-screen h-screen flex-col items-center">
        <Navbar username={session?.user.name} />
        <h1 className="font-bold" >ENTER DETAILS TO CREATE A POLL</h1>
        <div className=" border border-black flex flex-col items-center justify-center mt-10 rounded-lg ">
            <input type="text" className="border border-black mt-5 " placeholder="enter voting name " onChange={(e)=>setName(e.target.value)} value={name} ></input>
            {/* <h3 className="mt-5" >voting image</h3>
            <input type="file" className="voteimage m-5 "></input> */}
            <h3>voting description</h3>
            <input  className="border border-black m-5 " type="text" placeholder="enter voting description  " onChange={(e)=>setDescription(e.target.value)} value={description}  ></input>
            <button className="bg-black text-white p-2 rounded-lg" onClick={submitHandler} >submit</button>
        </div>
      </div>
    )

}
