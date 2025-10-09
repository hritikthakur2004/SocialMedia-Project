
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");


async function registerController(req, res) {
    const {username,password} = req.body;
    const isUserExist = await userModel.findOne({username});
    if(isUserExist){
       return res.status(409).json({message:"user already exist"});
    }
    const user = await userModel.create({username,
        password: await bcrypt.hash(password,10)
    }); 
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    res.cookie = ("token",token)
   
    res.status(201).json({
        message:"user registered successfully"
    })
    
}
async function loginController(req,res){
    const {username,password} = req.body;
    const user = await userModel.findOne({
        username
    })
    if(!user){
        res.status(404).json({
            message:"user not found"
        })
    }
    const isPassword  = await bcrypt.compare(password,user.password);

    if(!isPassword){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    
        res.status(201).json({
            message:"user login successfully",
            id:user._id,
            username:user.username,
            token 
        })
    
}

module.exports = {registerController,loginController};