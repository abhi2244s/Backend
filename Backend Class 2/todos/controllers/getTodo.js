const Todo = require("../models/Todo");
exports.getTodo = async(req,res)=>{
    try{
      const response = await Todo.find({});
      res.status(200).json({
        success:true,
        data : response,
        message : "All todo getting succesfully"
      })
    }
    catch(err){
        console(err)
        res.status(500).json({
            success:false,
            data : "Internal error",
            message : err.message
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
      const id = req.params.id;
      const response  = await Todo.findById({_id:id})
      res.status(200).json({
        success:true,
        data : response,
        message : "Single todo getting succesfully"
      })
    }
    catch(err){
        console(err)
        res.status(500).json({
            success:false,
            data : "Internal error",
            message : err.message
        })
    }
}