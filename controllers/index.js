// Index router - WSK checked
const express = require('express');
const router = express.Router();

// Front End Handlebars Work
const frontEndRoutes = require("./frontEndRoute");
router.use("/", frontEndRoutes);

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;