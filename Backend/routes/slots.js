const express = require('express')
const router = express.Router()
const Slot = require('../models/Slot')
router.post('/', (req, res) => {
  const slot=Slot(req.body)  
  slot.save();
  res.send(req.body);
  res.send("hello");
})

module.exports = router