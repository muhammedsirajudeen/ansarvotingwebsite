import axios from "axios"
import { useEffect, useState } from "react"
import {useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import {PulseLoader } from "react-spinners"
import { useRouter } from 'next/router';
import BarChart from "@/components/Chart"
export default  function Home() {
  const [loading,setLoading]=useState(true)
  const {data:session,status}=useSession()
  const [votearray,setVotearray]=useState([])
  const router = useRouter();
  const [data,setData]=useState({})
  useEffect(()=>{
    if(status==="authenticated"){
      setLoading(false)
      const { voteId } = router.query;
      console.log(voteId)
      async function getSummary(){
        let response=(await axios.post("api/summary/summary",
        {
          voteid:voteId
        })).data
        let votecounts=response.votecounts
        console.log(votecounts)
        const votetoArray = votecounts.map(item => item.voteto);
        const countArray = votecounts.map(item => item.count);
        setData({labels:votetoArray,values:countArray})
      }
      getSummary()

    }else if(status==="unauthenticated"){
      window.location.href="/"
    }
  },[session])

  return (
    loading? <div className="fixed w-screen h-screen flex items-center justify-center"><PulseLoader loading={loading}/></div> :
      <div className="flex w-screen h-screen flex-col items-center">
        <Navbar username={session.user.name} />
        <BarChart data={data}/>
      </div>
    )

}
