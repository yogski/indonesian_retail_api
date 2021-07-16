const express = require('express');
const router = express.Router();
const exampleController = require('./controllers/example');

router.get('/examples', exampleController.getAll);
router.post('/examples', exampleController.create);

// Return 404 for others
router.get('*', function (req, res) {
  res.status(404).json();
});

module.exports = router;
