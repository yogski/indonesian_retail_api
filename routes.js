const express = require('express');
const router = express.Router();
const ProductController = require('./controllers/products');

// Endpoint: search
router.get('/search/barcode/:barcode', ProductController.getByBarcode);
router.get('/search/name/:name', ProductController.getByProductName);

// Endpoint: barcode utility
router.get('/check/barcode/:barcode', ProductController.checkBarcodeExists);
router.post('/generate/barcode', ProductController.generateBarcodeSvg);
// router.post('/examples', ProductController.create);

// Endpoint: product creation
router.post('/create/product', ProductController.createProduct);

// Return 404 for others
router.get('*', function (req, res) {
  res.status(200).json({header: req.headers});
});

module.exports = router;
