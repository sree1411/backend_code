


const Firm = require('../models/Firm')
const Vendor = require('../models/Vendor')



const addFirm =  async (req,res)=>{
  

   try {
    const {firmname, area,  categeory, offer, region} = req.body
    const vendor = await Vendor.findById(req.vendorId)
    const firm = new Firm({
        firmname, area, categeory, offer, region, vendor:vendor._id
       })

       const savedFirm = await firm.save()
       vendor.firm.push(savedFirm)

       await vendor.save();
       res.status(200).json("add firm");

   } catch (error) {
        console.error(error)
        res.status(500).json({error:"error in the addFirm place.."})
   }
  
}

module.exports = {addFirm}