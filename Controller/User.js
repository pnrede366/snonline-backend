
const user  = require("../Model/User")

exports.createUser=async(req,res)=>{
    const data = await user.create(req.body)

    res.status(200).json({
        success:true,
        data:data,
        message:"user created successfully"
    })
}


exports.getUser=async(req,res)=>{
    const data = await user.find()

    res.status(200).json({
        success:true,
        data:data,
        message:"data fetch successfully"
    })
}


exports.getSingleUser=async(req,res)=>{
    console.log(req.body);
    const data = await user.findOne({_id:req.body.id})

    res.status(200).json({
        success:true,
        data:data,
        message:"data fetch successfully"
    })
}