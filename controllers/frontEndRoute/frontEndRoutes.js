const express = require('express');
const router = express.Router();
const {User} = require('../../models');

router.get("/",(req,res)=>{
    return res.render("home")
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
    }
    User.findByPk(req.session.user.id
    ).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render('user',hbsUser);
    })
})

module.exports = router;