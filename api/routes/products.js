const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message:"Get product" 
    });
});
router.get('/:productId',(req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message:"Get product details",
        createdProduct: product 
    });
});
router.post('/',(req, res, next) => {
    res.status(200).json({
        message:"post" 
    });
});
router.patch('/',(req, res, next) => {
    res.status(200).json({
        message:"patch" 
    });
});
router.delete('/',(req, res, next) => {
    res.status(200).json({
        message:"delete" 
    });
});


module.exports = router;