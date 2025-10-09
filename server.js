const express = require('express');

const app = require('./src/app')

app.listen(3000,()=>{
    console.log("Server Started on port 3000")
})