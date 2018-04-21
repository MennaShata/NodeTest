const express = require('express');
const apiRouter = express.Router();
const User = require('../models/usermodel');

apiRouter.route('/').get((req, res, next)=> {
    User.find((err,users)=>{
    res.json(users);
  });

})

apiRouter.route('/findByID').get((req,res,next)=>{
  let id = req.id
  User.findById({id},function(err,user) { 
    res.json(user);
  })

})
apiRouter.route('/user/create').post((req,res,next)=>{
let userObj = new User(req.body);
 userObj.save(function(err,user){
   if(err) return next(err);
   res.json({success:true, user: user})
 })
})

module.exports = apiRouter;
