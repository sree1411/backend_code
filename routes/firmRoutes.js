const firmController = require('../controllers/firmController')
const verifyToken = require('../middlewear/verifyToken')
const express = require('express')
const router = express.Router();
router.post('/add-firm', verifyToken, firmController.addFirm)
module.exports = router