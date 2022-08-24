const express= require('express');
const router=express.Router()
const {ensureAuth, ensureGuest} = require("../middleware/auth")
const Pokemon =require('../models/Pokemon') 

//login in page
//get 

router.get('/', ensureGuest, async (req,res) =>{
    try{
        const pokemon = await pokemon-stats.find({user: req.user.id}).lean()
    }catch (err){

    }
    res.render('login', {layout:'login'})
})    


//Dashboard
//get /dashboard
router.get('/stats', ensureAuth,  async(req,res) =>{
    
    try{
        const pokemon =await pokemon-stats.find().lean()
    res.render('stats', {
        pokemon: req.pokemon.name})    
    }catch (err){
        console.error(err)
        res.render("error/500")
    }
})






module.exports=router