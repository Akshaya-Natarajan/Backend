const Crackers = require("../Model/Crackerlist")

// create cracker
const createCracker = async(req,res) => {
    console.log(req.body);
    
    let user = req.userId
    let pr_no = `PR-${Math.floor(1000+Math.random()*9000)}`

    const createNewCracker = await Crackers.create({...req.body,pr_no:pr_no,createdBy:user})
    if(!createNewCracker){
        res.json({status:0, message:"Cracker is not created"})
    }
    res.json({status:1,message:"Created successfully!"})
}

// find all data
const getCracker = async(req,res) => {

    const getalldetails = await Crackers.find({createdBy:req.userId})

if (!getalldetails){
res.json({status:0,Message:"not found!"})
}
res.json({status:1,response:getalldetails})
}

// find by id
const getdetailbyId = async(req,res) => {

    const getone = await Crackers.findById(req.params.id)

if (!getone){
res.json({status:0,Message:"not found!"})
}
res.json({status:1,response:getone})
}

// delete one data
const deletebyId = async(req,res) => {

    const deletecracker = await Crackers.findByIdAndDelete(req.params.id)

if (!deletecracker){
res.json({status:0,Message:"not found!"})
}
res.json({status:1,message:"deleted"})
}

//update one data
const updatecrackerdetails = async(req,res) => {

    const update = await Crackers.findByIdAndUpdate(req.params.id,req.body)

if (!update){
res.json({status:0,Message:"not updated!"})
}
res.json({status:1,message:"updated succesfully!"})
}

module.exports = {createCracker,getCracker,getdetailbyId,deletebyId,updatecrackerdetails}