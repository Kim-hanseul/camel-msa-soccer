const express = require('express');
const {Router} = require('express');
const userRouter = express.Router();

/* GET users listing. */
userRouter.post("/sign-up", (req,res)=>{
    const {userId, password, name, telephone} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`userId : ${userId}`)
    console.log(`password : ${password}`)
    console.log(`name : ${name}`)
    console.log(`telephoneNumber : ${telephone}`)
    res.json(req.body)
  })

  module.exports = userRouter;

