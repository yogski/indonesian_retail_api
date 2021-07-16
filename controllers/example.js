const ExampleModel = require('../models/example');

module.exports = {
  /**
  * @api {get} /examples Request example information
  * @apiName GetAll
  * @apiGroup Example
  *
  * @apiSuccess {integer} id Id of example.
  * @apiSuccess {String} item_1 First description of Example.
  * @apiSuccess {String} item_2 Second description of Example.
  */
  getAll: async (req, res) => {
    try {
      const result = await ExampleModel.getAll({limit: 20});
      if (result.length === 0) {
        res.status(400).json({
          result : "ERROR",
          message : "DATA_NOT_FOUND"
        })
      }
      res.status(200).json({
        count : result.length,
        data : result
      })
    } catch (error) {
      res.status(500).json({
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