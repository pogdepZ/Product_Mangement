const Product = require("../../model/productsModel")

const getHomeProducts = async (req, res)=>{
    const productList = await Product.find({deleted: false})
    console.log(productList)
    res.render('client/pages/products', {
        pageProducts: 'Danh sách',
        list: productList
    })
}

const getDetailProduct = async(req, res)=>{
    const product = await Product.findOne({_id: req.params.id})
    console.log(product)
    res.send("Hihihi")
}

module.exports = {
    getHomeProducts,
    getDetailProduct 
}