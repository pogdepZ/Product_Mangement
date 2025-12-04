const Product = require("../../model/productsModel")

module.exports.productList = async (req, res) => {
    let find = {
        deleted: false,
    }

    if (req.query.status) {
        find.status = req.query.status
    }

    if (req.query.keyword) {
        const regex = new RegExp(req.query.keyword, "i")
        find.title = regex
    }

    const pages = {
        curPage: 1,
        showProducts: 4
    }
    if (req.query.page) {
        pages.curPage = req.query.page
    }
    const countProducts = await Product.countDocuments(find)
    pages.maxPage = Math.ceil(countProducts / pages.showProducts)
    const productList = await Product.find(find).limit(pages.showProducts).skip((pages.curPage - 1) * 4)
    console.log(productList[0]._id)

    res.render('admin/pages/products', {
        productList: productList,
        statusCur: req.query.status || "",
        keyword: req.query.keyword || "",
        pages: pages
    })
}

module.exports.changeStatus = async (req, res) => {
    const { status, id } = req.params
    await Product.updateOne({ _id: id }, { status })
    res.redirect("/admin/products")
}
module.exports.changeStatusMulti = async (req, res) => {
    const ids = req.body.ids.split(',')
    const status = req.body.status
    await Product.updateMany({ _id: { $in: ids } }, { status: status })
    res.redirect("/admin/products")
}
module.exports.deleteItem = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/admin/products")
}
module.exports.create = async (req, res) => {
    res.render('admin/pages/create')
}
module.exports.postProduct = async (req, res) => {
    const products = new Product(req.body)
    products.deleted = false
    products.thumbnail=`/uploads/${req.file.filename}`
    await products.save()
    res.redirect("/admin/products")
}
module.exports.detail = async (req, res) => {
    const id = req.params.id

    const products = await Product.findOne({_id: id})

    console.log(products)
    res.render("admin/pages/detail")
}