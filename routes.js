const express = require('express');
const router = express.Router();
const ProductController = require('./controllers/products');

router.get('/product/barcode/:barcode', ProductController.getByBarcode);
router.get('/product/name/:name', ProductController.getByProductName);
// router.post('/examples', ProductController.create);

// Return 404 for others
router.get('*', function (req, res) {
  res.status(404).json();
});

module.exports = router;
