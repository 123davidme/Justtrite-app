const product = require('../model/productModel'); 

const getAllProducts = async (req, res) => {
    try{
        const allProduct = await product.find({});
        if(allProduct.length > 0){
            return res.status(200).json({
                success : true, 
                message : 'All product available',
                data : allProduct,
            })
        }
        res.status(400).json({
            success: false,
            message : 'No product find',
        })
    }catch(e){
        res.status(505).json({
            success : false,
            message : 'Connection fail',
        })
    }
};

const getSingleProduct = async (req, res) => {
    try{
        const getProductId = req.params.id;
        const currentProduct = await product.findById(getProductId);
        if(!currentProduct){
            res.status(404).json({
                success : false,
                message : 'Product can not be found by the Id, used valid Id'
            })
        }
        res.status(200).json({
            success : true, 
            message: 'Product found by Id', 
            data : currentProduct,
        })
    }catch(e){
        res.status(505).json({
            success : false,
            message : 'Connection fail',
        })
    }
};

const addProduct = async (req, res) => {
    try{
        const getProductFormData = req.body;
        const newlyCreatedProduct = await product.create(getProductFormData);
        if(getProductFormData){
            res.status(200).json({
            success : true,
            message : 'Product created successfully',
            data : newlyCreatedProduct
        })
    }
        res.status(404).json({
            success: false,
            message : 'product not found'
    })
    }catch(e){
        res.status(505).json({
            success : false,
            message : 'Connection fail',
        })
    }
}; 

const updateProduct = async (req, res) => {
    try{
        const getProductId = req.params.id; 
        const getProductFormBody = req.body; 
        const updatedProduct = await product.findByIdAndUpdate(
        getProductId, 
        getProductFormBody, 
        {new : true}
        );
        if(updateProduct){
            res.status(200).json({
                success : true, 
                message : 'Product updated',
                data : updateProduct,
            })
        }
        res.status(404).json({
            success : false, 
            message : 'product not updated'
        })

    }catch(e){
        res.status(505).json({
            success : false,
            message : 'Connection fail',
        })
    }
}; 

const deleteProduct = async (req, res) => {
    try{
        const findProductId = req.params.id; 
        const deleteProduct = await product.findByIdAndDelete(findProductId);
        if(deleteProduct)
        res.status(200).json({
            success : true,
            message : 'Product deleted',
            data : deleteProduct
        })
        res.status(404).json({
            success : false,
            message : 'product not deleted by Id'
        })
    }catch(e){
        res.status(505).json({
            success : false,
            message : 'Connection fail',
        })
    }
};

module.exports= {
    getAllProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct,
}
