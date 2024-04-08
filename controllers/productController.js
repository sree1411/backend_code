


const Firm = require('../models/Firm')
const Product = require('../models/Product')


const addProduct = async(req, res) =>{
    try {

        const {productname,price,categeory,bestseller,description} = req.body
        const firmId= req.params.firmId
        const firm = await Firm.findById(firmId)

        // const vendor = await Vendor.findById(req.vendorId)
        const product = new Product({
            productname,price,categeory,bestseller,description, firm: firm._id
           })
    
        const saveproduct =  await product.save();
        
        firm.product.push(saveproduct)
        await firm.save()
        res.status(200).json({saveproduct});
    
       } catch (error) {
            console.error(error)
            res.status(500).json({error:"error in the addproduct place.."})
       }
}

module.exports = {addProduct}