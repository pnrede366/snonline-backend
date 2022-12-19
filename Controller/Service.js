const service = require("../Model/Service")

exports.createService=async(req,res)=>{
    console.log(req.body);
 const data= await service.create(req.body);

 res.status(200).json({
    success:true,
    data:data,
    message:"service added successfully"
 })
}
exports.getService=async(req,res)=>{
    console.log("hello i called");
    const data = await service.find()
    console.log(service);
    res.status(200).json({
        success:true,
        data:data,
        message:"data fetch successfully"
    })
}