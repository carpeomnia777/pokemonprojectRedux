const express = require('express')
const router = express.Router()
const {ensureAuth} = require("../middleware/auth") 
const Pokemon =require('../models/Pokemon')
//login/landing page
//@get get/

router.get('/add', ensureAuth, (req,res) =>{
    res.render('build/add')
})
//process add form
router.post('/', ensureAuth, async (req,res) =>{
    try{
        req.body.user= req.user.id
        await Pokemon.create(req.body)
        res.redirect('/stats')

    }catch(err){
        console.log(err)
        res.render('error/500')
    }
})

router.get('/', ensureAuth, async(req,res) =>{
    try{
        const pokemon = await Pokemon.find()
        .populate('user')
        .sort({createdAt: 'desc'})
        .lean()

    res.render('build/index', {pokemon,
        })
    }catch(err) {
        console.log(err)
        res.render('error/500')
    }
})



module.exports = router