



const Vendor = require("../models/Vendor");
const jwt = require("jsonwebtoken");
const dotEnv = require('dotenv')
const bcrypt = require('bcryptjs');


dotEnv.config()
let secretkey = process.env.MYNAMEISN



const vendorRegistror = async(req, res)=>{
   const {username, email, password} = req.body
    // console.log(username, email, password)
   
    try {
        const vendorEmail  = await Vendor.findOne({email})
        if(vendorEmail){
            return res.status(201).json({success : "Email  alredy taken"})
        }

        const hashPassword = await bcrypt.hash(password, 10)
        // console.log(hashPassword)

        const newVendor = new Vendor({
             username,
             email,
             password:hashPassword
        })
      

        await newVendor.save()
        res.status(201).json({success : "registered successfully"})

    } catch (error) {
        console.error(error);
        res.status(500).json({error : "registration filed area error "})
    }

}


const vendorLogin = async(req, res)=>{
     const {email, password} = req.body
  
     try {
        let vendor  = await Vendor.findOne({email})
         console.log(vendor)
        if(!vendor){
            return res.status(401).json({error : "email is not there"})
         }
        const vendorPassword = await bcrypt.compare(password, vendor.password)
        if(!vendorPassword){
            return res.status(401).json({error : "invalid password"})
         }

        const token =  jwt.sign({vendorId:vendor._id}, secretkey)
        console.log(token)
   
        
        res.status(200).json({success : "login successfully", token})
     } catch (error) {
        console.error(error);
        res.status(500).json({error : "vendor login area error "})
     }

}

const getAllVendors = async (req, res) => {
    try {
        // Assuming 'firm' is a valid field or reference in the Vendor schema
        const vendors = await Vendor.find().populate('firm');
        res.status(200).json({ vendors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error occurred while fetching vendors" });
    }
};

const getVendorById = async(req,res)=>{
    const vendorId = req.params.id
    try {
        // Assuming 'firm' is a valid field or reference in the Vendor schema
        const vendors = await Vendor.findById(vendorId).populate('firms')
        console.log(vendors)
        if(!vendors){
            return res.status(401).json({error : "invalid vendors"}) 
        }
        console.log(vendors);
        res.status(200).json({ vendors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error occurred while fetching vendors" });
    }
}


module.exports ={vendorRegistror, vendorLogin, getAllVendors, getVendorById}