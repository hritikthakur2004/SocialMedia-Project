const postModel = require('../models/post.model');
const { post } = require('../routes/post.routes');
const {generateCaption} = require('../service/ai.service')
const uploadFile = require('../service/storage.service')
const {v4:uuidv4}= require('uuid');
async function postController(req,res){
    const file = req.file;
    

    const base64Image =  Buffer.from(file.buffer).toString('base64');
    const caption = await generateCaption(base64Image)
  const result =   await uploadFile(file.buffer,`${uuidv4()}`)
  const post = await postModel.create({
    image:result.url,
    caption:caption,
    userId:req.user._id
  })
   res.status(201).json({
    message:"Post created successfully",
    post:post
})
}
module.exports = postController;
