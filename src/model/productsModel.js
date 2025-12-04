const mongoose = require('mongoose')


const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);


const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
   slug: { 
        type: String, 
        slug: "title",   
        unique: true,   
    },
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema, 'product')

module.exports = Product