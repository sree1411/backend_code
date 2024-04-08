const vendorController = require('../controllers/vendorController')
const express = require('express')
const router = express.Router();
router.post('/register', vendorController.vendorRegistror)
router.post('/login', vendorController.vendorLogin)
router.get('/get-allvendors', vendorController.getAllVendors);
router.get('/get-singlevendor/:id', vendorController.getVendorById)
module.exports = router