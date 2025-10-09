const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
        console.log("Connected To DB");
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB;