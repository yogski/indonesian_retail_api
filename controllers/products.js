const ProductModel = require('../models/products');
const JsBarcode = require('jsbarcode');
const { DOMImplementation, XMLSerializer } = require('xmldom');
const formatter = require('../helpers/formatting');

module.exports = {
  /**
  * @api {get} /v1/search/barcode/:barcode Get product by barcode
  * @apiName GetByBarcode
  * @apiGroup ProductSearch
  *
  * @apiSuccess {String} barcode Barcode string of the product.
  * @apiSuccess {String} product_name Name of the product.
  * @apiSuccess {String} category Type/category of product.
  * @apiSuccess {String} unit_of_measure UoM for the product
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
  * @api {get} /v1/search/name/:name Get barcode by product name
  * @apiName GetByProductName
  * @apiGroup ProductSearch
  *
  * @apiSuccess {String} barcode Barcode string of the product.
  * @apiSuccess {String} product_name Name of the product.
  * @apiSuccess {String} category Type/category of product.
  * @apiSuccess {String} unit_of_measure UoM for the product
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
  * @api {post} /v1/barcode/generate Create barcode
  * @apiName GenerateBarcode
  * @apiGroup BarcodeUtilities
  * 
  * @apiParam (Request body JSON) {String} content Content Input string
  *
  * @apiSuccess {SVG} Image result in SVG format.
  */
  generateBarcodeSvg: async (req, res) => {
    try {
      const xmlSerializer = new XMLSerializer();
      const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
      const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

      JsBarcode(svgNode, req.body.content, {
          xmlDocument: document,
      });

      const svgText = xmlSerializer.serializeToString(svgNode);
      res.status(200)
      .attachment(`${formatter.generateRandomFilename()}.svg`)
      .send(svgText);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  /**
  * @api {get} /v1/check/barcode/:barcode Check Barcode Exists in Database
  * @apiName CheckBarcodeExists
  * @apiGroup BarcodeUtilities
  *
  * @apiSuccess {String} result Result statement (FAILED, SUCCESS).
  * @apiSuccess {String} message Confirm that product exists.
  */
  checkBarcodeExists: async (req, res) => {
    try {
      const payload = {barcode: req.params.barcode};
      const result = await ProductModel.getByBarcode(payload);
      if (!result) {
        return res.status(400).json({
          result : "ERROR",
          message :  `Product with barcode ${req.params.barcode} DOES NOT exist in database.`
        });
      } else {
        return res.status(200).json({
          result : "SUCCESS",
          message : `Product with barcode ${req.params.barcode} exists in database.`
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        result : "ERROR",
        message : error
      });
    }
  },


 create: async (req, res) => {

  }
}