
const Vendor = require('../models/Vendor')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')

dotEnv.config()

    const secretkey = process.env.MYNAMEISN

    const verifyToken = async(req, res, next)=>{

    const token = req.headers.token

        if(!token){
            res.status(201).json({error:"invalid token or check the correct token"})
        }
 
      try {
        const decoded = jwt.verify(token, secretkey)
        const vendor = await Vendor.findById(decoded.vendorId)
        if(!vendor){
            res.status(201).json({error:"invalid the vendor filed"})
        }
        req.vendorId = vendor._id
        next()
      } catch (error) {
        console.error(error)
        res.status(500).json({error:"error in the verify token place"})
      }


    }

    module.exports = verifyToken