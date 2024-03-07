// routes/index.js
const express = require('express');
const router = express.Router();
const axios=require("axios")
// Define routes

function areAllElementsSimilar(array) {
    if (array.length === 0) {
      return true; // Empty array, all elements are considered similar
    }
    
    const firstElement = array[0];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== firstElement) {
        return false; // Found a different element, array is not similar
      }
    }
    
    return true; // All elements are similar
  }
  

const nodes=[]
router.post("/newnode",(req,res)=>{
    let nodeaddress=req.body.nodeaddress
    nodes.push(nodeaddress)
    res.send({message:"success"})
    console.log(nodes)
})

router.post('/block', async (req, res) => {
    //here we recieve the blocks
    console.log(req.body)
    let block=req.body.block
    let hasharray=[]
    let data=nodes.map(async (node)=>{
        let response=await axios.post(node+"/validate",{
            block:block
        })
        return response

    })
    let arraylength=data.length
    console.log(arraylength)
    let count=0
    Promise.all(data).then((results)=>{
        results.forEach((result)=>{
            count++

            let hash=result.data.hash
            console.log(hash)
            hasharray.push(hash)
            if(arraylength === count ){
                console.log(hasharray)
                if(areAllElementsSimilar(hasharray)){
                    res.send({message:"success"})
    
                }else{
                    res.send({message:"block invalidated"})
                }
            }
        })


    })

});



module.exports = router;
