const Post=require("../models/postModel")
const Comment=require("../models/commentModel")
const Like=require("../models/likeModel")

async function createPost(req,res){
    try {
        const {title,body}=req.body;
        const response=await Post.create({title,body})

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created"
            }
        )
        
    } catch (error) {

        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message 
        })
        
    }

}

async function getallPost(req,res){
    try {

        const response = await Post.find({})
  .sort({ createdAt: -1 }) // Sort in descending order based on creationTimestampColumn
  .populate("like")
  .populate("comment")
  .exec();
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created"
            }
        )

        
    } catch (error) {

        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message 
        })
        
        
    }
}

module.exports={createPost,getallPost}