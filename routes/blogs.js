const express=require("express");
const router=express.Router();

const {createLike}=require("../controllers/likeController")
const {createComment}=require("../controllers/commentController")
const {createPost}=require("../controllers/postController")
const {getallPost}=require("../controllers/postController")
const {unlikePost}=require("../controllers/likeController")

router.post("/createLike",createLike)
router.post("/createComment",createComment)
router.post('/createPost',createPost)
router.get("/getallPost",getallPost)
router.post("/unlikePost",unlikePost)

module.exports=router;