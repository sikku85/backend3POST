const Comment=require("../models/commentModel")
const Post=require("../models/postModel")

async function createComment(req,res){
    try {
        const {post,user,body}=req.body;
        const response=await Comment.create({post,user,body});

        const updatePost=await Post.findByIdAndUpdate(post,{$push:{comment:response._id}},{new: true}).
                                populate("comment").exec();

        res.status(200).json(
            {
                success:true,
                data:updatePost,
                message:"entry created"
            }
        )

        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            success:false,
            data:"server error",
            message:error.message
        })
        
    }
}
module.exports={createComment}