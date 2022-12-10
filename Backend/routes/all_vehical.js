const express = require('express')
const router = express.Router()

const Slot = require('../models/Slot')
router.get('/', (req, res) => {
    // fetch all the slots
    Slot.find({}, (err, slots) => {
    
        // console.log(slots);
        res.send(slots);
   
})}
)

module.exports = router