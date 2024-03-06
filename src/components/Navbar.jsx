import { signOut } from "next-auth/react"
export default function Navbar({username}){
    return(
        <div className="flex w-screen items-center justify-evenly m-3">
            <a href="/" className=" font-bold">VOTING WEBSITE</a>
            <div className=" font-bold">{username}</div>
            <a href="/createvote" className="font-bold" >createvote</a>
            <a href="/viewsummary" className="font-bold">viewsummary</a>
            <a href="/mypolls" className="font-bold">mypolls</a>
            <button onClick={()=>signOut()}  className=" bg-custombgcolor text-white text-xs h-8 w-14 rounded-lg font-light">signout</button>
        </div>
    )
}