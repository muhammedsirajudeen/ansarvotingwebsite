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
    const [options,setOptions]=useState([])
    const [currentoption,setCurrentoption]=useState("")

    async function submitHandler(){
      let voteoptionarray=document.querySelectorAll(".voteoptions")
      let voteoption=""
      voteoptionarray.forEach((option)=>{
        if(voteoption.length===0){
          voteoption=option.textContent
        }else{
          voteoption=voteoption+"|"+option.textContent
        }
      })
      console.log(voteoption)
        let response= (await  axios.post("api/votehandler/vote",
        {
          votename:name,
          description:description,
          voteoptions:voteoption,
          status:true
        })).data
        console.log(response)
        if(response.message==="success"){
          alert("vote created")
          window.location.reload()
        }
    }
    async function optionHandler(){
      setOptions(prevOption=> [...prevOption,currentoption] )
      setCurrentoption("")
    }
    function deleteOption(){
      console.log("handler delete here ")
    }
  return (
    loading? <div className="fixed w-screen h-screen flex items-center justify-center"><PulseLoader loading={loading}/></div> :
      <div className="flex w-screen h-screen flex-col items-center">
        <Navbar username={session?.user.name} />
        <h1 className="font-bold" >ENTER DETAILS TO CREATE A POLL</h1>
        <div className=" border border-black flex flex-col items-center justify-center mt-10 rounded-lg max-w-96 ">
            <input type="text" className="border border-black mt-5 " placeholder="enter voting name " onChange={(e)=>setName(e.target.value)} value={name} ></input>
            {/* <h3 className="mt-5" >voting image</h3>
            <input type="file" className="voteimage m-5 "></input> */}
            <h3>voting description</h3>
            <input  className="border border-black m-5 " type="text" placeholder="enter voting description  " onChange={(e)=>setDescription(e.target.value)} value={description}  ></input>
            <div className="flex items-center justify-center">
              <input className="border border-black m-2" type="text"  placeholder="enter voting options here" onChange={(e)=>setCurrentoption(e.target.value)} value={currentoption}  ></input>
              <button  className=" flex items-center bg-black text-white h-5 p-1" onClick={optionHandler} > +</button>
            </div> 
            <div className="border border-black flex flex-wrap items-center justify-evenly">
              {options.map((value)=>{
                return(
                  <div className="flex  items-center justify-evenly m-2 p-1"  key={value} >
                    <div className="voteoptions" >{value}</div>
                    <button className="m-1 bg-black text-white p-1 h-5 flex items-center" id={value} onClick={deleteOption} >x</button>
                  </div>
                )
              })}  
            </div>           
            <button className="bg-black text-white p-2 rounded-lg m-2" onClick={submitHandler} >submit</button>
        </div>
      </div>
    )

}
