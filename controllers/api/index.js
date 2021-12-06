// API Controllers
const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

router.get("/",(req,res)=>{
    res.send("API Deadend!")
})
module.exports = router;