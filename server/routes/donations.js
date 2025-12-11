const express = require('express')
const router = express.Router()
const db = require('../db')


router.post('/', (req,res)=>{
const {amount} = req.body
db.run('INSERT INTO donations (amount,date) VALUES (?,?)',[amount,new Date().toISOString()], function(err){
if(err) return res.status(500).json({error:err.message})
res.json({id:this.lastID})
})
})


module.exports = router