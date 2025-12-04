module.exports = (req, res, next)=>{
    if(!req.body.title){
        console.log("Khong co du title")
        res.redirect("/admin/products")
        return;
    }
    next()
}