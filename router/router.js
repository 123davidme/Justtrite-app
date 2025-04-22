 const express = require('express'); 
 const {getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct} = require('../controller/controller')

 const router = express.Router(); 

 // creater all router for product    
 router.get('/get', getAllProducts); 
 router.get ('/get/:id', getSingleProduct); 
 router.post('/add', addProduct);
 router.put('/update', updateProduct); 
 router.delete('/delete', deleteProduct);  

 module.exports = router;