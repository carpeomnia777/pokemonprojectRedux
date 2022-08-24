const express = require('express')
const router = express.Router()
const passport = require('passport')
//login/landing page
//@get get/

router.get('/google', passport.authenticate('google', {scope:['profile']}))


//Dashboard
//get /dashboard
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/stats')
})

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
})
})
module.exports = router 