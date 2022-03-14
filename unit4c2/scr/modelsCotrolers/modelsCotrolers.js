const express = require("express");

let User = require("../models/user");

let Branch = require("../models/branch");
let Fixed = require("../models/fixedAcc");
let Master = require("../models/master");
let Saving = require("../models/saving");

const router = express.Router();

router.post("/users", async (req, res) => {
    try{
        const users = await User.create(req.body)
        return res.send(users)
    }
    catch(err){
        return res.send(err)
    }
});


router.post("/branch", async (req, res) => {
    try{
        const branch = await Branch.create(req.body)
        return res.send(branch)
    }
    catch(err){
        return res.send(err)
    }
});


router.post("/master", async (req, res) => {
    try{
        const master = await Master.create(req.body)
        return res.send(master)
    }
    catch(err){
        return res.send(err)
    }
});


router.post("/fixed", async (req, res) => {
    try{
        const fixed = await Fixed.create(req.body)
        return res.send(fixed)
    }
    catch(err){
        return res.send(err)
    }
});


router.post("/saving", async (req, res) => {
    try{
        const saving = await Saving.create(req.body)
        return res.send(seving)
    }
    catch(err){
        return res.send(err)
    }
});


router.get("/users",async (req, res) =>{

    try{
        const users = await User.find().lean().exec();
        return res.send(users)
    }
    catch(err){
        res.send(err)
    }
})

router.get("/branch",async (req, res) =>{

    try{
        const branch = await Branch.find().lean().exec();
        return res.send(branch)
    }
    catch(err){
        res.send(err)
    }
})

router.get("/master",async (req, res) =>{

    try{
        const master = await Master.find().lean().exec();
        return res.send(master)
    }
    catch(err){
        res.send(err)
    }
})

router.get("/fixed",async (req, res) =>{

    try{
        const fixed = await Fixed.find().lean().exec();
        return res.send(fixed)
    }
    catch(err){
        res.send(err)
    }
})

router.get("/saving",async (req, res) =>{

    try{
        const saving = await Saving.find().lean().exec();
        return res.send(saving)
    }
    catch(err){
        res.send(err)
    }
})



module.exports = router;
