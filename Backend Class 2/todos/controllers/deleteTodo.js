const Todo = require("../models/Todo");
exports.deleteTodo = async(req,res)=>{
    try{
      const {id} = req.params;
      await Todo.findByIdAndDelete(id)
      res.status(200).json({
        success:true,
        message : "Deleted todo succesfully"
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