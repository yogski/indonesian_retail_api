const ProductModel = require('../models/products');

module.exports = {
  /**
  * @api {get} /barcode/:barcode Request example information
  * @apiName GetByBarcode
  * @apiGroup ProductSearch
  *
  * @apiSuccess {integer} id Id of example.
  * @apiSuccess {String} item_1 First description of Example.
  * @apiSuccess {String} item_2 Second description of Example.
  */
  getByBarcode: async (req, res) => {
    try {
      const payload = {barcode: req.params.barcode};
      if (req.query.limit) payload.limit = req.query.limit;
      const result = await ProductModel.getByBarcode(payload);
      if (result.length === 0) {
        return res.status(400).json({
          result : "ERROR",
          message : "DATA_NOT_FOUND"
        })
      }
      return res.status(200).json({
        count : result.length,
        data : result
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        result : "ERROR",
        message : error
      });
    }
  },
    /**
  * @api {get} /barcode/:barcode Request example information
  * @apiName GetByProductName
  * @apiGroup ProductSearch
  *
  * @apiSuccess {integer} id Id of example.
  * @apiSuccess {String} item_1 First description of Example.
  * @apiSuccess {String} item_2 Second description of Example.
  */
  getByProductName: async (req, res) => {
    try {
      const payload = {productName: req.params.name.toUpperCase()};
      if (req.query.limit) payload.limit = req.query.limit;
      const result = await ProductModel.getByProductName(payload);
      if (result.length === 0) {
        return res.status(400).json({
          result : "ERROR",
          message : "DATA_NOT_FOUND"
        })
      }
      return res.status(200).json({
        count : result.length,
        data : result
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        result : "ERROR",
        message : error
      });
    }
  },
  /**
  * @api {post} /examples Create example
  * @apiName Create
  * @apiGroup Example
  * 
  * @apiParam (Request body JSON) {String} item_1 Item 1 example
  * @apiParam (Request body JSON) {String} item_2 Item 2 example
  *
  * @apiSuccess {String} message Message after result.
  */
 create: async (req, res) => {

  }
}