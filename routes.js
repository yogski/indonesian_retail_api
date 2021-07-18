const express = require('express');
const router = express.Router();
const ProductController = require('./controllers/products');

// Endpoint: search
router.get('/search/barcode/:barcode', ProductController.getByBarcode);
router.get('/search/name/:name', ProductController.getByProductName);

router.get('/check/barcode/:barcode', ProductController.checkBarcodeExists);
// router.post('/examples', ProductController.create);

// Return 404 for others
router.get('*', function (req, res) {
  res.status(404).json();
});

module.exports = router;
