const mongoose = require('mongoose'); 

const ProductSchema = new mongoose.Schema({
    title:{
        type : String, 
        require : [true, 'product title is required'], 
        trim : true,
        maxlength : [100, 'product title cannot be more than 100 character']
    },
    producer:{
        type : String, 
        require : [true, 'producer name is required'], 
        trim : true
    }, 
    size:{
        type : String, 
        require : [true, 'size is required'], 
        trim : true
    },
    price:{
        type : Number, 
        require : [true, 'product price is required'], 
    },
    productionDate:{
        type : Date, 
        require : [true, 'production date is required'], 
        productionDate : new Date().getFullYear,
        default: Date.now
    },
    expiringDate:{
        type : Date, 
        require : [true, 'expiring date is required'], 
        expiringDate : new Date().getFullYear,
    },
}) 

module.exports = mongoose.model('Product', ProductSchema);

