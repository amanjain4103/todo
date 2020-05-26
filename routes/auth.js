const express = require('express');
const router = express.Router();

const google =  router.get('/google',(req,res)=>{
    res.send("logged in with google");
})

module.exports = {
    google:router
}