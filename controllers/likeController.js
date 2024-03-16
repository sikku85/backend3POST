const Like=require("../models/likeModel")
const Post=require("../models/postModel")

async function createLike(req,res){
    try {

        const {post,user}=req.body;
        const response=await Like.create({post,user})
        const updatePost=await Post.findByIdAndUpdate(post,{$push:{like:response._id}},{new: true}).
                                populate("like");
        

                                res.status(200).json(
                                    {
                                        success:true,
                                        data:updatePost,
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

async function unlikePost(req,res){
    try {
        const {like,post}=req.body;
        const likeResponse= await Like.findOneAndDelete({post:post,_id:like})
        const updateResponse=await Post.findByIdAndUpdate(post,{$pull:{like:likeResponse._id}},{new:true})

        res.status(200).json(
            {
                success:true,
                data:updateResponse,
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

module.exports={createLike,unlikePost}