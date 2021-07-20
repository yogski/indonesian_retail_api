const ProductModel = require('../models/products');
const JsBarcode = require('jsbarcode');
const { DOMImplementation, XMLSerializer } = require('xmldom');
const formatter = require('../helpers/formatting');

module.exports = {
  /**
  * @api {get} /search/barcode/:barcode Get product by barcode
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
  * @api {get} /search/category/:category Get barcode by product name
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
  * @api {post} /barcode/generate Create example
  * @apiName GenerateBarcode
  * @apiGroup BarcodeUtilities
  * 
  * @apiParam (Request body JSON) {String} item_1 Item 1 example
  * @apiParam (Request body JSON) {String} item_2 Item 2 example
  *
  * @apiSuccess {String} message Message after result.
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
  * @api {get} /check/barcode/:barcode Check Barcode Exists in Database
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