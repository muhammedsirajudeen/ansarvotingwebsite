// index.js
const express = require('express');
const app = express();
const port = 8000;
const cors=require("cors")
const axios=require("axios")
// Import routes
const crypto = require('crypto');

const mainNode="http://localhost:4000"



//used to hash the block
function generateSHA256Hash(data) {
    // Create a SHA-256 hash object
    const hash = crypto.createHash('sha256');
  
    // Update the hash object with the data to be hashed
    hash.update(data);
  
    // Generate the hashed data as a hexadecimal string
    const hashedData = hash.digest('hex');
  
    return hashedData;
}

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the router
app.get("/",(req,res)=>{
    res.send({message:"hello"})
})
app.post("/validate",(req,res)=>{
    let block=req.body.block
    let hash=generateSHA256Hash(JSON.stringify(block))
    console.log(hash)
    res.send({message:"success",hash:hash})
})
// Start the server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  let response=(await axios.post(mainNode+"/newnode",{
    nodeaddress:"http://localhost:"+port
  })).data
  console.log(response)
});
